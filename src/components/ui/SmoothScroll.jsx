import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.04,
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: true,
};

const Scroll = () => {
  useEffect(() => {
    const scrollInstance = Scrollbar.init(document.body, options);

    // Cleanup function to destroy the Scrollbar instance when the component unmounts
    return () => {
      scrollInstance.destroy();
    };
  }, []);

  return null;
};

export default Scroll;
