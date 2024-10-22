import portfoliodata from "../portfolio.json"

const Projects = () => {
  return (
    <div className="p-4 bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfoliodata.map(project => (
          <div key={project.id} className="border p-4 rounded-lg shadow-lg border-cyan-400">
            <img src={`../src/Photos/${project.image}`} alt={project.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex space-x-2 my-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-cyan-300 text-black px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;

