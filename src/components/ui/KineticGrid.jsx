import { useEffect, useRef } from "react";

const DEFAULT_PROPS = {
  background: "#000000",
  dotColor: "#AEB9C7",
  lineColor: "#24365A",
  trail: true,
  trailColor: "#1B3A6E",
  spacing: 30,
  radius: 400,
  strength: 4,
};

/**
 * Kinetic Grid
 *
 * A reactive dot grid that is pulled toward the cursor within a chosen
 * radius, with a trail line that follows the mouse as it moves.
 * Mounted as a fixed, non-interactive site background.
 */
const KineticGrid = (props) => {
  const {
    background = "#000000",
    dotColor = "#FFFFFF",
    lineColor = "#2563EB",
    trailColor = "#2664EB",
    spacing = 50,
    radius = 200,
    strength = 4,
    trail = true,
    style,
  } = { ...DEFAULT_PROPS, ...props };

  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const trailRef = useRef([]);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GAP = Math.max(8, spacing);
    const R = Math.max(1, radius);
    const PULL = (Math.max(1, Math.min(10, strength)) / 10) * 4;

    let W = 1;
    let H = 1;
    let cols = [];
    let dots = [];

    const build = (mw, mh) => {
      const rect = host.getBoundingClientRect();
      W = Math.max(1, Math.floor(mw ?? rect.width));
      H = Math.max(1, Math.floor(mh ?? rect.height));
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = [];
      dots = [];
      const nCols = Math.floor(W / GAP) + 2;
      const nRows = Math.floor(H / GAP) + 2;
      for (let c = 0; c < nCols; c++) {
        const col = [];
        for (let r = 0; r < nRows; r++) {
          const hx = c * GAP;
          const hy = r * GAP;
          const dot = { hx, hy, x: hx, y: hy, vx: 0, vy: 0 };
          col.push(dot);
          dots.push(dot);
        }
        cols.push(col);
      }
    };

    const setMouse = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const mx = clientX - rect.left;
      const my = clientY - rect.top;
      mouseRef.current.x = mx;
      mouseRef.current.y = my;
      mouseRef.current.active = true;
      const now = performance.now();
      const trailPoints = trailRef.current;
      trailPoints.push({ x: mx, y: my, t: now });
      if (trailPoints.length > 80) trailPoints.shift();
    };

    const onMove = (e) => setMouse(e.clientX, e.clientY);
    const onLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const onTouch = (e) => {
      const touch = e.touches[0];
      if (touch) setMouse(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);

    let raf = 0;
    const frame = () => {
      const m = mouseRef.current;
      ctx.clearRect(0, 0, W, H);

      for (const d of dots) {
        let ax = (d.hx - d.x) * 0.08;
        let ay = (d.hy - d.y) * 0.08;
        if (m.active) {
          const dx = m.x - d.x;
          const dy = m.y - d.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < R && dist > 0.001) {
            const f = (1 - dist / R) * PULL;
            ax += (dx / dist) * f;
            ay += (dy / dist) * f;
          }
        }
        d.vx = (d.vx + ax) * 0.82;
        d.vy = (d.vy + ay) * 0.82;
        d.x += d.vx;
        d.y += d.vy;
      }

      for (let c = 0; c < cols.length; c++) {
        for (let r = 0; r < cols[c].length; r++) {
          const d = cols[c][r];
          const right = cols[c + 1]?.[r];
          const down = cols[c]?.[r + 1];
          const prox = m.active
            ? Math.max(
                0,
                1 - Math.sqrt((m.x - d.x) ** 2 + (m.y - d.y) ** 2) / R,
              )
            : 0;
          if (right) {
            ctx.globalAlpha = 0.03 + prox * 0.3;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.3 + prox * 0.7;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }
          if (down) {
            ctx.globalAlpha = 0.03 + prox * 0.3;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.3 + prox * 0.7;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(down.x, down.y);
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        const prox = m.active
          ? Math.max(
              0,
              1 - Math.sqrt((m.x - d.x) ** 2 + (m.y - d.y) ** 2) / R,
            )
          : 0;
        ctx.globalAlpha = 0.08 + prox * 0.3;
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 0.5 + prox * 1.0, 0, 2 * Math.PI);
        ctx.fill();
      }

      if (trail) {
        const now = performance.now();
        const trailPoints = trailRef.current;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 1; i < trailPoints.length; i++) {
          const a = trailPoints[i - 1];
          const b = trailPoints[i];
          const age = now - b.t;
          if (age > 260) continue;
          ctx.globalAlpha = Math.max(0, 1 - age / 260) * 0.4;
          ctx.strokeStyle = trailColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    build();
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver((entries) => {
            const cr = entries[0]?.contentRect;
            build(cr?.width, cr?.height);
          })
        : null;
    ro?.observe(host);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
    };
  }, [background, dotColor, lineColor, trailColor, spacing, radius, strength, trail]);

  return (
    <div
      ref={hostRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background,
        pointerEvents: "none",
        ...(style || {}),
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

KineticGrid.displayName = "Kinetic Grid";

export default KineticGrid;
