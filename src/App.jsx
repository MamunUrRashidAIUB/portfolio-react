import Header from "./components/Header";
import Intro from "./components/Intro";
import MyPortfolio from "./components/MyPortfolio";
import Projects from "./components/Projects";
import Currentwork from "./components/Currentwork";
import Contact from "./components/Contact";
import ConnectWithMe from "./components/Connectwithme";
import { Switch, Route } from "react-router-dom";  // Use Switch for v5

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/myportfolio" component={MyPortfolio} />
        <Route path="/project" component={Projects} />
        <Route path="/currentwork" component={Currentwork} />
        <Route path="/contact" component={Contact} />
        <Route path="/connectwithme" component={ConnectWithMe} />
      </Switch>
    </>
  );
};

export default App;
