import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import MyPortfolio from "./components/MyPortfolio";
import Projects from "./components/Projects";
import Currentwork from "./components/Currentwork";
import Contact from "./components/Contact";
const App = () => {
  
  return (
    <div>
      <Header  />
          <Intro />
          <MyPortfolio  />
          <Projects />
          <Currentwork />
          <Contact />
    </div>
  );
};
export default App;
