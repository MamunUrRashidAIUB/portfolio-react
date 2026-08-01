import { lazy, Suspense } from "react";
import { renderAnimatedText } from "../components/common/TextAnimation";
import Button from "../components/common/Button";
import { useHistory } from "react-router-dom";

const HeroLottie = lazy(() => import("../components/ui/HeroLottie"));

const Intro = () => {
  const history = useHistory();

  const text1 = "Hi";
  const text2Part1 = "I'm";
  const text2Part2 = "Rashid";
  const text3Part1 = "Full-Stack";
  const text3Part2 = "Developer";

  const handleButtonClick = () => {
    history.push("/contact");
  };

  return (
    <div
      id="home"
      className="lg:pl-30 flex flex-col p-6 text-white sm:p-12 lg:flex-row"
    >
      <div className="flex-1">
        <div className="font-comforter">
          {/* Hi Text */}
          <h1 className="text-xl font-bold text-cyan-400 sm:text-7xl md:text-8xl lg:text-8xl">
            {renderAnimatedText(text1)}
          </h1>

          {/* I'm Rashid Text */}
          <h1 className="mt-2 text-5xl text-cyan-400 sm:text-7xl md:text-7xl lg:text-8xl">
            {renderAnimatedText(text2Part1, text1.length)}
            <span className="mx-2"></span>
            {renderAnimatedText(
              text2Part2,
              text1.length + text2Part1.length,
            )}
          </h1>

          {/* Web Developer Text */}
          <h1 className="mt-2 text-3xl text-cyan-400 sm:text-8xl md:text-7xl lg:text-5xl">
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
            Full-Stack Developer | React.js| Tailwind CSS| JavaScript| MongoDB
          </h1>

          <div className="p-6 pl-16">
            <Button
              text="Contact Me"
              onClick={handleButtonClick}
              className="mt-4"
            />
          </div>
          <div className="mt-4">
            <a
              href="/CV_Mamun_Ur_Rashid.pdf"
              download="cv.pdf"
              className="group relative inline-block overflow-hidden rounded border border-cyan-400 bg-black px-5 py-2 font-medium text-cyan-400"
            >
              <span className="absolute left-0 top-0 flex h-full w-0 transform bg-cyan-400 opacity-90 transition-all duration-700 ease-out group-hover:w-full"></span>
              <span className="relative group-hover:text-black">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center lg:pl-8">
        <Suspense fallback={<div className="h-full w-full" aria-hidden="true" />}>
          <HeroLottie />
        </Suspense>
      </div>
    </div>
  );
};

export default Intro;
