import { renderAnimatedText } from "./TextAnimation";
import Lottie from "lottie-react";
import animation from "./animation/facebook.json";
import animation2 from "./animation/github.json";

const ConnectWithMe = () => {
  const text1 = "Connect";
  const text2 = "With";
  const text3 = "Me";
  return (
    <div>
      <div>
        <h1 className="text-4xl pl-14 bg-black uppercase text-cyan-400 sm:text-6xl md:text-8xl lg:text-6xl font-bold pb-5 ">
          {renderAnimatedText(text1)}
          <span className="mx-2"></span>
          {renderAnimatedText(text2)}
          <span className="mx-2"></span>
          {renderAnimatedText(text3)}
        </h1>
      </div>
      <div className="bg-slate-900   border-cyan-400  font-bold text-white p-5">
        <div className="flex justify-center items-center">
          <a
            href="https://www.facebook.com/profile.php?id=100026601601848"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie animationData={animation} className="w-10 h-14" />
          </a>
          <a
            href="https://github.com/MamunUrRashidAIUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie animationData={animation2} className="w-10 h-14" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>
            Email:
            <a href="mailto:md.mamun.ur.rashid.cse@gmail.com">
              md.mamun.ur.rashid.cse@gmail.com
            </a>
          </span>
          <p>Phone: +880 1880 299 555</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved. | Developed
            by Rashid
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
