import { Switch, Route } from "react-router-dom";
import { Header, Notice } from "./components";
import { About, Contact, Skills } from "./pages";
import { Intro, MyPortfolio, Projects, Currentwork, ConnectWithMe } from "./sections";

const App = () => {
  return (
    <>
      <Notice />
      <Header />
      {/* <Scroll /> */}
      <Switch>
        <Route exact path="/">
          <Intro />
          <MyPortfolio />
          <Projects />
          <Currentwork />
          <Contact />
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
