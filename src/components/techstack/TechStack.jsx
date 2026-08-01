import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { renderAnimatedText } from "../common/TextAnimation";
import TechCategory from "./TechCategory";
import CurrentFocus from "./CurrentFocus";
import { STACK, IMPROVING } from "./data";

const TechStack = () => {
  const prefersReducedMotion = useReducedMotion();
  const title1 = "Tech";
  const title2 = "Stack";

  return (
    <section id="skills" aria-labelledby="tech-stack-heading">
      <h2
        id="tech-stack-heading"
        className="text-4xl font-bold text-cyan-400 sm:text-6xl md:text-7xl lg:text-6xl"
      >
        {renderAnimatedText(title1)}
        <span className="mx-2"></span>
        {renderAnimatedText(title2, title1.length)}
      </h2>
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 max-w-2xl text-gray-300"
      >
        I build modern full-stack applications using technologies focused on
        scalability, maintainability, performance, and developer experience.
        These are the tools I use most to design, build, and deploy
        production-ready applications.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {STACK.map((group, i) => (
          <TechCategory key={group.category} {...group} index={i} />
        ))}
      </div>

      <CurrentFocus items={IMPROVING} />

      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group relative inline-block overflow-hidden rounded border border-cyan-400 bg-black px-6 py-2.5 font-medium text-cyan-400 transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <span className="absolute left-0 top-0 flex h-full w-0 transform bg-cyan-400 opacity-90 transition-all duration-700 ease-out motion-reduce:transition-none group-hover:w-full"></span>
          <span className="relative group-hover:text-black">
            View Projects
          </span>
        </Link>
      </div>
    </section>
  );
};

export default TechStack;
