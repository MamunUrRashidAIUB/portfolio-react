import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, animate } from "framer-motion";
import PropTypes from "prop-types";
import Footer from "../components/layout/Footer";
import { renderAnimatedText } from "../components/common/TextAnimation";
import animation from "../assets/animations/developer.json";
import Lottie from "lottie-react";

const STATS = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 3, suffix: "+", label: "Full Stack Apps" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 2, suffix: "+", label: "Years Learning" },
];

const STACK = [
  {
    title: "Frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    items: ["Node.js", "Express", "REST API", "JWT"],
  },
  {
    title: "Database",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    items: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
];

const BUILDING = [
  "E-commerce Platform",
  "Modern Portfolio",
  "Backend APIs",
  "Learning Testing & TypeScript",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i ?? 0) * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const StatCounter = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-cyan-400 sm:text-4xl">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
};

StatCounter.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const TextSection = ({ label, index, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    custom={index}
  >
    <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
      {label}
    </h3>
    <p className="text-gray-300">{children}</p>
  </motion.div>
);

TextSection.propTypes = {
  label: PropTypes.string.isRequired,
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
};

const About = () => {
  const text1 = "About";
  const text2 = "Me";

  return (
    <div>
      <div
        id="about"
        className="lg:pl-30 flex min-h-screen flex-col p-6 text-white sm:p-12 lg:flex-row"
      >
        <div className="flex-1">
          <div className="font-comforter">
            <h2 className="text-4xl font-bold text-cyan-400 sm:text-6xl md:text-8xl lg:text-6xl">
              {renderAnimatedText(text1)}
              <span className="mx-2"></span>
              {renderAnimatedText(text2)}
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 text-xl font-medium text-cyan-200 sm:text-2xl"
          >
            Junior Full-Stack Developer building scalable web applications with
            modern technologies and clean engineering practices.
          </motion.p>

          <div className="mt-8 space-y-6">
            <TextSection label="Who I Am" index={0}>
              I&apos;m Mamun Ur Rashid, a junior full-stack developer based in
              Bangladesh. I build products end to end — the interfaces users
              interact with, the APIs that serve them, and the databases behind
              both.
            </TextSection>
            <TextSection label="What I Build" index={1}>
              My focus is writing clean, maintainable code that is reliable,
              scalable, and ready for real-world use. I enjoy breaking down
              complex problems into simple, maintainable solutions and believe
              good software is built through thoughtful architecture, clean
              code, and continuous iteration.
            </TextSection>
            <TextSection label="Current Focus" index={2}>
              Right now I&apos;m deepening my backend skills — cleaner APIs and
              more sensible database schemas — and getting better at TypeScript
              and writing tests. I&apos;m not chasing every new tool; I&apos;m
              going deeper on the ones that matter.
            </TextSection>
            <TextSection label="Looking For" index={3}>
              I&apos;m currently seeking junior full-stack opportunities where I
              can contribute to real products, collaborate with experienced
              engineers, and continue growing through meaningful challenges.
            </TextSection>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </motion.div>

          <div className="mt-12">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">
              Tech Stack
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STACK.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="rounded-lg border border-cyan-400/40 bg-black/60 p-5"
                >
                  <div className="flex items-center gap-2 text-cyan-400">
                    {group.icon}
                    <span className="font-semibold">{group.title}</span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-gray-300">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
            className="mt-12"
          >
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-cyan-400">
              Currently Building
            </h3>
            <ul className="space-y-1 text-gray-300">
              {BUILDING.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-12"
          >
            <p className="mb-4 text-lg font-semibold text-white">
              Interested in working together?
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Photos/CV_Mamun_ur_rashid.pdf"
                download="cv.pdf"
                className="group relative inline-block overflow-hidden rounded border border-cyan-400 bg-black px-5 py-2 font-medium text-cyan-400"
              >
                <span className="absolute left-0 top-0 flex h-full w-0 transform bg-cyan-400 opacity-90 transition-all duration-700 ease-out group-hover:w-full"></span>
                <span className="relative group-hover:text-black">
                  Download Resume
                </span>
              </a>
              <Link
                to="/projects"
                className="group relative inline-block overflow-hidden rounded border border-cyan-400 bg-black px-5 py-2 font-medium text-cyan-400"
              >
                <span className="absolute left-0 top-0 flex h-full w-0 transform bg-cyan-400 opacity-90 transition-all duration-700 ease-out group-hover:w-full"></span>
                <span className="relative group-hover:text-black">
                  View Projects
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-1 justify-center lg:pl-8">
          <Lottie animationData={animation} className="w-full max-w-md" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
