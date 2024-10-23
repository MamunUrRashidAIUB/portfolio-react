import portfoliodata from "../portfolio.json";

const Projects = () => {
  return (
    <div id="projects" className="p-4 bg-black text-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {portfoliodata.map((project) => (
          <div
            key={project.id}
            className="group relative p-1 rounded-lg shadow-lg border-cyan-400 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mb-2 transition-transform duration-500 ease-in-out group-hover:blur-sm group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex space-x-2 my-2 pb-2 ">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black text-white border-cyan-400 border px-2 py-1 rounded transition-colors duration-900 ease-in-out "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="opacity-0 group-hover:opacity-100 absolute justify-center left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
              >
                <span className="absolute top-0 left-0 flex w-0 h-full transition-all duration-700 ease-out transform group-hover:w-full bg-cyan-400 opacity-90"></span>
                <span className="relative group-hover:text-black">
                  View Project
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
