import { renderAnimatedText } from "./TextAnimation";
import Button from "./Button";
import{useHistory} from "react-router-dom";

const MyPortfolio = () => {

const history = useHistory();
const handleButtonClick =()=>{

  history.push("/projects");
}

  const textpart1 = "My";
  const textpart2 = "Portfolio";

  return (
    <div className="p-6 sm:p-12 text-white bg-black lg:pl-30">
      <div className="font-comforter">
        <h2 className="text-4xl  text-cyan-400 sm:text-6xl md:text-8xl lg:text-6xl font-bold">
          {renderAnimatedText(textpart1)}
          <span className="mx-2"></span>
          {renderAnimatedText(textpart2, textpart1.length)}
        </h2>
      </div>
      <div className="mt-4">
        <p>
          A small gallery of recent projects chosen by me. I've done them all
          together from scratch. It's only a drop in the ocean compared to the
          entire list. Interested to see some more? Visit my work page.
        </p>
      </div>
      <div className="p-10 pl-20">
        <Button text="SEE MY WORK" onClick={handleButtonClick} className="mt-4" />
      </div>
    </div>
  );
};

export default MyPortfolio;
