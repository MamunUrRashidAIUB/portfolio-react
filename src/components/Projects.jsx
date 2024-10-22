
import portfoliodata from "../portfolio.json";

const Projects = () => {
  return (
    <div id="projects" className="p-4 bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {portfoliodata.map((project) => (
          <div
            key={project.id}
            className=" p-1 rounded-lg shadow-lg border-cyan-400"
          >
            <img
              src={`../src/Photos/${project.image}`}
              alt={project.title}
              className="w-full h-48 object-cover mb-2"
            />
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-cyan-400 text-black border-cyan-400 border px-2 py-1 rounded relative overflow-hidden transition-colors duration-500 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-black"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
