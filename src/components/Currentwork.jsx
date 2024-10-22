import React from "react";
import { renderAnimatedText } from "./TextAnimation";
import animation from "./animation/developer.json";
import Lottie from "lottie-react";

const Currentwork = () => {
  const textpart1 = "What ";
  const textpart2 = "i'm";
  const textpart3 = " working ";
  const textpart4 = "  on";

  return (
    <div className="p-6 sm:p-12 text-white bg-black lg:pl-30 flex flex-col lg:flex-row">
      <div className="flex-1">
        <div className="font-comforter">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-6xl font-bold">
            {renderAnimatedText(textpart1)}
            <span className="mx-2"></span>
            {renderAnimatedText(textpart2)}
            <span className="mx-2"></span>
            {renderAnimatedText(textpart3)}
            <span className="mx-2"></span>
            {renderAnimatedText(textpart4)}
          </h2>
        </div>
        <div className="mt-4">
          <p>
            The primary area of my interest is undoubtedly ReactJS & NodeJS. My
            passion for code began when I was a high-school student, alongside
            CSS and HTML as standards of the current web.
            <br />
            <br />
            <span className="block mb-2">
              For over years after years, I have done many projects, some on my
              own and some with amazing people around the globe. Working for
              companies and individuals around the globe, I met and learned from
              amazing and ambitious people.
            </span>
            <br />
            I currently work remotely with a selected freelance client base and
            am open to new opportunities.
            <br />
            <br />
            <span className="block mb-2">
              More about my experience and work you'll find on Skills and About.
            </span>
          </p>
        </div>
      </div>
      <div className="  flex-1 flex justify-center  lg:pl-8">
        <Lottie animationData={animation} className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default Currentwork;
