import { renderAnimatedText } from "./TextAnimation";
import Button from "./Button";

const MyPortfolio = ({ onSeeMyWorkClick }) => {
  const textpart1 = "What ";
  const textpart2 = "i'm";
  const textpart3 = " working ";
  const textpart4 = "  on";

  return (
    <div className="p-6 sm:p-12 text-white bg-black lg:pl-30">
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
          passion for code had begun when I was a high-school student, alongside
          with CSS and HTML as standards of the current web. For over years
          after years I have done many projects, some on my own and some with
          amazing people around the globe. Working for companies and individuals
          around the globe I met and learnt from amazing and ambitious people. I
          currently work remotely with a selected freelance client base and are
          open for new opportunities. More about my experience and work you'll
          find on Skills and About .
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
