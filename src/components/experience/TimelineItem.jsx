import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const TimelineItem = ({ item, index }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <li className="relative mb-10 pl-8 last:mb-0 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full bg-cyan-400"
      />
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                y: -6,
                scale: 1.01,
                boxShadow: "0 24px 40px -24px rgba(34, 211, 238, 0.35)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }
        }
        className="rounded-xl border border-white/10 bg-black/50 p-5 sm:p-6"
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 text-sm font-bold text-cyan-300"
          >
            {item.initials}
          </span>
          <div>
            <h3 className="font-semibold text-white">{item.role}</h3>
            <p className="text-sm text-cyan-400">
              {item.company} · {item.period}
            </p>
          </div>
        </header>

        <p className="mt-4 text-sm text-gray-300">{item.description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-0.5 text-cyan-400">
                •
              </span>
              {responsibility}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Technologies
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Highlights
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-gray-400">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-cyan-400">
                  ✓
                </span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </li>
  );
};

TimelineItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TimelineItem;
