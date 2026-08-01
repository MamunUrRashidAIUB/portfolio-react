import { renderAnimatedText } from "../components/common/TextAnimation";
import Lottie from "lottie-react";
import animation from "../assets/animations/facebook2.json";
import animation2 from "../assets/animations/github3.json";
import animation3 from "../assets/animations/youtube.json";
import animation4 from "../assets/animations/linkdin.json";
import animation5 from "../assets/animations/whatsapp2.json";

const ConnectWithMe = () => {
  const text1 = "Connect";
  const text2 = "With";
  const text3 = "Me";
  return (
    <div id="connectwithme" className="py-11">
      <div className="text-center">
        <h2 className="pb-5 text-3xl font-bold uppercase text-cyan-400 sm:text-5xl md:text-6xl lg:text-7xl">
          {renderAnimatedText(text1)}
          <span className="mx-2"></span>
          {renderAnimatedText(text2)}
          <span className="mx-2"></span>
          {renderAnimatedText(text3)}
        </h2>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <a
            href="https://wa.me/8801880299555"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36"
          >
            <Lottie animationData={animation5} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100026601601848"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36"
          >
            <Lottie animationData={animation} />
          </a>

          <a
            href="https://www.linkedin.com/in/mamun-ur-rashid-39a13a3a8"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36"
          >
            <Lottie animationData={animation4} />
          </a>
          <a
            href="https://github.com/MamunUrRashidAIUB"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36"
          >
            <Lottie animationData={animation2} />
          </a>
          <a
            href="https://www.youtube.com/@Jhon-wick-007"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36"
          >
            <Lottie animationData={animation3} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
