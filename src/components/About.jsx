import { renderAnimatedText } from "./TextAnimation";
import animation from "./animation/developer.json";
import Lottie from "lottie-react";
const About = () => {
  const text1 = "My,";
  const text2 = "Myself,";
  const text3 = "& I ";

  return (
    <div
      id="currentwork"
      className="lg:pl-30 flex min-h-screen flex-col bg-black p-6 text-white sm:p-12 lg:flex-row"
    >
      <div className="flex-1">
        <div className="font-comforter">
          <h2 className="text-4xl font-bold text-cyan-400 sm:text-6xl md:text-8xl lg:text-6xl">
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
            I’m a Full-Stack Developer located in Bangladesh. I have a serious
            passion for web technologies and creating intuitive, dynamic user
            experiences
            <br />
            <br />
            <span className="mb-2 block">
              Well-organised person, problem solver, independent employee with
              high attention to detail. Fan of sports, outdoor activities, TV
              series and song.
            </span>
            <br />
            Interested in the entire full-stack spectrum and working on
            ambitious projects with positive people. I have started my journey
            when I was a 21 years old. I was always fond of programming/coding
            from the early age. My journey was full of stumbling but I never
            gave up. From that journey till now I am learning every little
            things to improve me.
            <br />
            <br />
            <span className="mb-2 block">
              I like to build things on the web. And I am building diffrents
              application everyday to keep my skills in practtice. As well as
              looking for work to build amazing web app for my clients
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-center lg:pl-8">
        <Lottie animationData={animation} className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default About;
