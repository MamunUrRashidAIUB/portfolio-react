import Header from "./components/Header";
import Intro from "./components/Intro";
import MyPortfolio from "./components/MyPortfolio";
import Projects from "./components/Projects";
import Currentwork from "./components/Currentwork";
import Contact from "./components/Contact";
import ConnectWithMe from "./components/Connectwithme";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Intro />
          <MyPortfolio />
          <Projects />
          <Currentwork />
          <Contact />
          <ConnectWithMe />
          <Footer />
        </Route>
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/connectwithme" component={ConnectWithMe} />
      </Switch>
    </>
  );
};

export default App;
