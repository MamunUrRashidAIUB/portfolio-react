import Footer from "../components/layout/Footer";
import TechStack from "../components/techstack/TechStack";
import Experience from "../components/experience/Experience";

const Skills = () => {
  return (
    <div>
      <div className="min-h-screen p-6 text-white sm:p-12">
        <div className="mx-auto max-w-5xl">
          <TechStack />
          <Experience />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
