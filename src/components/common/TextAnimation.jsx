import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const renderAnimatedText = (text, customStartIndex = 0) =>
  text.split("").map((l, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: -8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: (i + customStartIndex) * 0.2, duration: 0.3 },
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="inline-block"
    >
      <motion.span
        className="inline-block"
        whileHover={{
          y: -4,
          scale: 1.06,
          color: "#00ffdd",
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25,
            mass: 0.4,
          },
        }}
        whileTap={{
          y: -4,
          scale: 1.06,
          color: "#00ffdd",
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25,
            mass: 0.4,
          },
        }}
      >
        {l}
      </motion.span>
    </motion.span>
  ));

const usePrefersHover = () => {
  const [canHover, setCanHover] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return canHover;
};

export const LETTER_STAGGER_MS = 24;

export const letterVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: (i * LETTER_STAGGER_MS) / 1000,
      y: { type: "spring", stiffness: 320, damping: 24, mass: 0.6 },
      opacity: { duration: 0.25, ease: "easeOut" },
      filter: { duration: 0.35, ease: "easeOut" },
    },
  }),
};

export const AnimatedWord = ({
  text,
  startIndex = 0,
  interactiveAfterMs = 0,
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();
  const canHover = usePrefersHover();
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setInteractive(true), interactiveAfterMs);
    return () => clearTimeout(timeout);
  }, [interactiveAfterMs]);

  if (prefersReducedMotion) return text;

  return (
    <motion.span
      className={`inline-block whitespace-nowrap ${className}`}
      whileHover={
        canHover && interactive
          ? {
              scale: 1.05,
              y: -5,
              transition: {
                type: "spring",
                stiffness: 350,
                damping: 14,
                mass: 0.5,
              },
            }
          : undefined
      }
    >
      {text.split("").map((char, j) => (
        <motion.span
          key={j}
          className="inline-block"
          custom={startIndex + j}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

AnimatedWord.propTypes = {
  text: PropTypes.string.isRequired,
  startIndex: PropTypes.number,
  interactiveAfterMs: PropTypes.number,
  className: PropTypes.string,
};
