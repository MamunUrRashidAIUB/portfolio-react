import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import { renderAnimatedText } from "../common/TextAnimation";
import TimelineItem from "./TimelineItem";
import { EXPERIENCE } from "./data";

const Experience = ({ className = "mt-20" }) => {
  const prefersReducedMotion = useReducedMotion();
  const title1 = "My";
  const title2 = "Experience";

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={className}
    >
      <div className="font-comforter">
        <h2
          id="experience-heading"
          className="text-4xl font-bold text-cyan-400 sm:text-6xl md:text-7xl lg:text-6xl"
        >
          {renderAnimatedText(title1)}
          <span className="mx-2"></span>
          {renderAnimatedText(title2, title1.length)}
        </h2>
      </div>
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 max-w-2xl text-gray-300"
      >
        Software engineering experience building and shipping production-ready
        full-stack applications.
      </motion.p>

      <ol className="relative mt-10 border-l border-white/10">
        {EXPERIENCE.map((item, i) => (
          <TimelineItem key={item.role} item={item} index={i} />
        ))}
      </ol>
    </section>
  );
};

Experience.propTypes = {
  className: PropTypes.string,
};

export default Experience;
