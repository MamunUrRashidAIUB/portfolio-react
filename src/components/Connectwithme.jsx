import { renderAnimatedText } from "./TextAnimation";
import Lottie from "lottie-react";
import animation from "./animation/facebook2.json";
import animation2 from "./animation/github3.json";
import animation3 from "./animation/youtube.json";
import animation4 from "./animation/linkdin.json";
const ConnectWithMe = () => {
  const text1 = "Connect";
  const text2 = "With";
  const text3 = "Me";
  return (
    <div id="connectwithme" className="bg-black">
      <div>
        <h1 className="text-4xl pl-14 bg-black uppercase text-cyan-400 sm:text-6xl md:text-8xl lg:text-6xl font-bold pb-5 ">
          {renderAnimatedText(text1)}
          <span className="mx-2"></span>
          {renderAnimatedText(text2)}
          <span className="mx-2"></span>
          {renderAnimatedText(text3)}
        </h1>
        <div className="flex">
          <a
            href="https://www.facebook.com/profile.php?id=100026601601848"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie animationData={animation} className="w-36 h-36 " />
          </a>
          <a
            href="https://github.com/MamunUrRashidAIUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie animationData={animation3} className="w-36 h-36" />
          </a>
          <a
            href="https://github.com/MamunUrRashidAIUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie animationData={animation4} className="w-36 h-36" />
          </a>
          <a
            href="https://github.com/MamunUrRashidAIUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie animationData={animation2} className="w-36 h-36" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
