import Header from "./components/Header";
import Intro from "./components/Intro";
import MyPortfolio from "./components/MyPortfolio";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Intro />
        <MyPortfolio />
        <Projects />
      </div>
    </div>
  );
};

export default App;
