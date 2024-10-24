import { renderAnimatedText } from "./TextAnimation";
import Button from "./Button";
import animation from "./animation/hello.json";
import Lottie from "lottie-react";
import { useHistory } from "react-router-dom";

const Intro = () => {
  const history = useHistory();

  const text1 = "Hi";
  const text2Part1 = "I'm";
  const text2Part2 = "Rashid,";
  const text3Part1 = "Web";
  const text3Part2 = "Developer";

  const handleButtonClick = () => {
    history.push("/contact");
  };

  return (
    <div
      id="home"
      className="lg:pl-30 flex flex-col bg-black p-6 text-white sm:p-12 lg:flex-row"
    >
      <div className="flex-1">
        <div className="font-comforter">
          {/* Hi Text */}
          <h1 className="text-xl font-bold sm:text-7xl md:text-8xl lg:text-8xl">
            {renderAnimatedText(text1)}
          </h1>

          {/* I'm Rashid Text */}
          <h1 className="mt-2 text-5xl sm:text-7xl md:text-7xl lg:text-8xl">
            {renderAnimatedText(text2Part1)}
            <span className="mx-2"></span>
            {renderAnimatedText(text2Part2)}
          </h1>

          {/* Web Developer Text */}
          <h1 className="mt-2 text-4xl sm:text-7xl md:text-7xl lg:text-8xl">
            {renderAnimatedText(
              text3Part1,
              text1.length + text2Part1.length + text2Part2.length,
            )}
            <span className="mx-2"></span>
            {renderAnimatedText(
              text3Part2,
              text1.length +
                text2Part1.length +
                text2Part2.length +
                text3Part1.length,
            )}
          </h1>
          <h1 className="pb-3 pl-3 pt-10">
            Full-Stack Developer | React.js| Tailwind CSS| JavaScript
          </h1>

          <div className="p-6 pl-16">
            <Button
              text="Contact Me"
              onClick={handleButtonClick}
              className="mt-4"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center lg:pl-8">
        <Lottie animationData={animation} className="h-full w-full" />
      </div>
    </div>
  );
};

export default Intro;
