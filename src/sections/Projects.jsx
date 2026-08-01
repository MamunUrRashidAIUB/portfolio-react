import { motion, useReducedMotion } from "framer-motion";
import { renderAnimatedText } from "../components/common/TextAnimation";
import portfoliodata from "../data/portfolio.json";

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const title1 = "My";
  const title2 = "Projects";

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="min-h-screen p-6 text-white sm:p-12 lg:pl-30"
    >
      <div>
        <div className="font-comforter">
          <h2
            id="projects-heading"
            className="text-4xl font-bold text-cyan-400 sm:text-6xl md:text-7xl lg:text-6xl"
          >
            {renderAnimatedText(title1)}
            <span className="mx-2"></span>
            {renderAnimatedText(title2, title1.length)}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfoliodata.map((project, i) => (
            <motion.article
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
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
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, j) => (
                    <li
                      key={j}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                  {project.technologies.length > 4 && (
                    <li className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 4}
                    </li>
                  )}
                </ul>
                <div className="mt-auto pt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md border border-cyan-400/50 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors duration-300 motion-reduce:transition-none hover:bg-cyan-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
