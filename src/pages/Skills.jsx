import Footer from "../components/layout/Footer";
import TechStack from "../components/techstack/TechStack";

const Skills = () => {
  return (
    <div>
      <div className="min-h-screen p-6 text-white sm:p-12">
        <div className="mx-auto max-w-5xl">
          <TechStack />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
