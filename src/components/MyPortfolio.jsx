
import { renderAnimatedText } from "./TextAnimation";

const MyPortfolio = () => {
  const textpart1 = "My";
    const textpart2 = "Portfolio";

  return (
 <div className=" p-6 sm:p-12 text-white bg-black lg:pl-30">

      <div className="font-comforter">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-6xl font-bold ">{renderAnimatedText(textpart1)}
        <span className="mx-2"></span>
        {renderAnimatedText(textpart2, textpart1.length)}
        </h2>
        <p>hello </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
