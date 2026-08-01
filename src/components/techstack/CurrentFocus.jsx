import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const CurrentFocus = ({ items }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-14"
    >
      <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
        Currently Improving
      </h3>
      <ul className="mt-3 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/40 px-4 py-1.5 text-sm text-gray-200"
          >
            <span aria-hidden="true" className="text-cyan-400">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

CurrentFocus.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CurrentFocus;
