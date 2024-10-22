import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import MyPortfolio from "./components/MyPortfolio";
import Projects from "./components/Projects";
import Currentwork from "./components/Currentwork";
const App = () => {
  const [showProjectsOnly, setShowProjectsOnly] = useState(false);
  const handleShowProjects = () => {
    setShowProjectsOnly(true);
  };
  const handleShowHome = () => {
    setShowProjectsOnly(false);
  };
  return (
    <div>
      <Header onHomeClick={handleShowHome} />
      {!showProjectsOnly && (
        <>
          <Intro />
          <MyPortfolio onSeeMyWorkClick={handleShowProjects} />
          <Projects />
          <Currentwork />
        </>
      )}
      {showProjectsOnly && <Projects />}
    </div>
  );
};
export default App;
