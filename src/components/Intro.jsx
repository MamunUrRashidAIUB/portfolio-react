import { renderAnimatedText } from "./TextAnimation";
import Button from "./Button";
import animation from "./animation/Animation - 1729607915612.json";
import Lottie from "lottie-react";

const Intro = () => {
  const text1 = "Hi";
  const text2Part1 = "I'm";
  const text2Part2 = "Rashid,";
  const text3Part1 = "Web";
  const text3Part2 = "Developer";

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <div>
        <Lottie animationData={animation} className="absolute" />
      </div>
      {/* Intro Section */}{" "}
      <div className="p-6 sm:p-12 md:p-16 lg:pl-30 text-white bg-black">
        <div className="font-comforter">
          {/* Hi Text */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold">
            {renderAnimatedText(text1)}
          </h1>

          {/* I'm Rashid Text */}
          <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl mt-2">
            {renderAnimatedText(text2Part1, text1.length)}
            <span className="mx-2"></span>
            {renderAnimatedText(text2Part2, text1.length + text2Part1.length)}
          </h1>

          {/* Web Developer Text */}
          <h1 className="text-4xl sm:text-7xl md:text-7xl lg:text-8xl mt-2">
            {renderAnimatedText(
              text3Part1,
              text1.length + text2Part1.length + text2Part2.length
            )}
            <span className="mx-2"></span>
            {renderAnimatedText(
              text3Part2,
              text1.length +
                text2Part1.length +
                text2Part2.length +
                text3Part1.length
            )}
          </h1>

          <h1 className="pt-10 pl-3 pb-3">Full-Stack Developer | React.js|</h1>
        </div>

        <div className="pl-3">
          <Button
            text="Contact Me"
            onClick={handleButtonClick}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
