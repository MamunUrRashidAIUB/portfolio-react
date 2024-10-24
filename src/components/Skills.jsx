import Skillbar from "./Skillbar";
import { renderAnimatedText } from "./TextAnimation";

const Skills = () => {
  const text1 = "Skills";
  const text2 = "&,";
  const text3 = "Experience";
  return (
    <div
      id="skills"
      className="lg:pl-30 flex min-h-screen flex-col bg-black p-6 text-white sm:p-12 lg:flex-row"
    >
      <div className="flex-1">
        <div className="font-comforter">
          <h2 className="text-5xl font-bold text-cyan-400 sm:text-7xl md:text-7xl lg:text-6xl">
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
            I want to start my journey as a freelance developer or full-time
            developer, I want to work on site or remotely and collaborate with
            talented people to create web products for both business and
            consumer use.
            <br />
            <br />
            <span className="mb-2 block">
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The area of my expertise is
              full-stack development: HTML, CSS, JS, Node, building small and
              medium web apps, features, animations, and coding interactive
              layouts.
            </span>
            <br />
            I have more than 1 years of experience in this field. As well as I
            have taken courses from diffrent platform such as Coursera,
            Codecademy and so on. I have a lot of projects from static to full
            fledged Web Application. You can check my Works.
            <br />
            <br />
            <span className="mb-2 block">
              Visit my Github profile for more details or just contact me.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-center lg:pl-8">
        <Skillbar></Skillbar>
      </div>
    </div>
  );
};

export default Skills;
