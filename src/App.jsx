
import Header from "./components/Header";
import Intro from "./components/Intro";
import MyPortfolio from "./components/MyPortfolio";
import Projects from "./components/Projects";
import Currentwork from "./components/Currentwork";
import Contact from "./components/Contact";
import ConnectWithMe from "./components/Connectwithme";
const App = () => {
  
  return (
    <div>
      <Header  />
          <Intro />
          <MyPortfolio  />
          <Projects />
          <Currentwork />
          <Contact />
          <ConnectWithMe />
    </div>
  );
};
export default App;
