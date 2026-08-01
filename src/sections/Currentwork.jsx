import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import { FiTarget, FiCode, FiBookOpen, FiBriefcase } from "react-icons/fi";
import { renderAnimatedText } from "../components/common/TextAnimation";

const FOCUS = [
  "Backend Architecture",
  "API Design",
  "TypeScript",
  "Clean Code",
  "Performance",
  "Full-stack Development",
];

const PROJECTS = [
  {
    title: "FootLive",
    description:
      "Live football standings and curated news powered by Next.js App Router and external API integrations.",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured storefront with product cart, checkout, and an admin panel for managing products.",
  },
  {
    title: "E-commerce Backend API",
    description:
      "Scalable REST API with JWT authentication, role-based access control, and secure order processing.",
  },
];

const LEARNING = [
  "Backend Architecture",
  "Testing",
  "Performance Optimization",
  "TypeScript Patterns",
  "API Design",
];

const LOOKING_FOR =
  "I'm looking for a Junior Full-Stack Developer opportunity where I can build real products, collaborate with experienced engineers, and continue improving my technical skills.";

const Card = ({ icon, title, index, children }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              scale: 1.02,
              boxShadow: "0 24px 40px -24px rgba(34, 211, 238, 0.35)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }
      }
      className="rounded-xl border border-white/10 bg-black/50 p-5"
    >
      <div className="flex items-center gap-2.5">
        <span aria-hidden="true" className="text-xl text-cyan-400">
          {icon}
        </span>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </motion.div>
  );
};

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
};

const Currentwork = () => {
  const title1 = "Currently";
  const title2 = "Building";

  return (
    <section
      id="currentwork"
      aria-labelledby="currentwork-heading"
      className="p-6 text-white sm:p-12 lg:pl-30"
    >
      <div>
        <div className="font-comforter">
          <h2
            id="currentwork-heading"
            className="text-4xl font-bold text-cyan-400 sm:text-6xl md:text-7xl lg:text-6xl"
          >
            {renderAnimatedText(title1)}
            <span className="mx-2"></span>
            {renderAnimatedText(title2, title1.length)}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <Card icon={<FiTarget />} title="Current Focus" index={0}>
            <ul className="space-y-2 text-sm text-gray-300">
              {FOCUS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-cyan-400">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<FiCode />} title="Current Projects" index={1}>
            <ul className="space-y-4 text-sm">
              {PROJECTS.map((project) => (
                <li key={project.title}>
                  <p className="font-medium text-white">{project.title}</p>
                  <p className="mt-0.5 text-gray-400">{project.description}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<FiBookOpen />} title="Currently Learning" index={2}>
            <ul className="flex flex-wrap gap-2">
              {LEARNING.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-cyan-400/30 bg-black/40 px-3 py-1 text-xs text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<FiBriefcase />} title="Looking For" index={3}>
            <span className="inline-flex items-center rounded-full border border-green-400/40 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
              Open to work
            </span>
            <p className="mt-3 text-sm text-gray-300">{LOOKING_FOR}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Currentwork;
