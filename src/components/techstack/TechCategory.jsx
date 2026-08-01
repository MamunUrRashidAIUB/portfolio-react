import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import TechItem from "./TechItem";

const TechCategory = ({ category, icon, items, index }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              scale: 1.03,
              boxShadow: "0 24px 40px -24px rgba(34, 211, 238, 0.4)",
              transition: { type: "spring", stiffness: 260, damping: 20 },
            }
      }
      className="rounded-2xl border border-white/10 bg-black/50 p-6"
    >
      <header className="mb-5 flex items-center gap-2.5">
        <span aria-hidden="true" className="text-xl text-cyan-400">
          {icon}
        </span>
        <h3 className="text-base font-semibold text-white">{category}</h3>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <TechItem key={item.name} {...item} />
        ))}
      </div>
    </motion.section>
  );
};

TechCategory.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
};

export default TechCategory;
