import Skillbar from "./Skillbar";
import { renderAnimatedText } from "./TextAnimation";

const Skills = () => {
  const text1 = "Skills";
  const text2 = "&,";
  const text3 = "Experience";
  return (
    <div
      id="skills"
      className="p-6 sm:p-12 text-white bg-black lg:pl-30 flex flex-col lg:flex-row min-h-screen"
    >
      <div className="flex-1">
        <div className="font-comforter">
          <h2 className="text-5xl  text-cyan-400 sm:text-7xl md:text-7xl lg:text-6xl font-bold">
            {renderAnimatedText(text1)}
            <span className="mx-2"></span>
            {renderAnimatedText(text2)}
            <span className="mx-2"></span>
            {renderAnimatedText(text3)}
            <span className="mx-2"></span>
          </h2>
        </div>
        <div className="mt-20">
          <p>
            Since beginning my journey as a freelance developer, I’ve done
            remote work for agencies and collaborated with talented people to
            create web products for both business and consumer use.
            <br />
            <br />
            <span className="block mb-2">
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The area of my expertise is
              full-stack development: HTML, CSS, JS, Node, building small and
              medium web apps, features, animations, and coding interactive
              layouts.
            </span>
            <br />
            I have more than 2 years of experience in this field. As well as I
            have taken courses from diffrent platform such as Coursera,
            Codecademy and so on. I have a lot of projects from static to full
            fledged Web Application. You can check my Works.
            <br />
            <br />
            <span className="block mb-2">
              Visit my Github profile for more details or just contact me.
            </span>
          </p>
        </div>
      </div>
      <div className="  flex-1 flex justify-center  lg:pl-8">
        <Skillbar></Skillbar>
      </div>
    </div>
  );
};

export default Skills;
