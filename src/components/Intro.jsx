import { renderAnimatedText } from "./TextAnimation";
import Button from "./Button";

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
    <div id="home">
      {/* Intro Section */}{" "}
      <div className="lg:pl-30 bg-black p-6 text-white sm:p-12 md:p-16">
        <div className="font-comforter">
          {/* Hi Text */}
          <h1 className="text-5xl font-bold sm:text-7xl md:text-8xl lg:text-8xl">
            {renderAnimatedText(text1)}
          </h1>

          {/* I'm Rashid Text */}
          <h1 className="mt-2 text-5xl sm:text-7xl md:text-7xl lg:text-8xl">
            {renderAnimatedText(text2Part1, text1.length)}
            <span className="mx-2"></span>
            {renderAnimatedText(text2Part2, text1.length + text2Part1.length)}
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

          <h1 className="pb-3 pl-3 pt-10">Full-Stack Developer | React.js|</h1>
        </div>

        <div className="p-6 pl-14">
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
