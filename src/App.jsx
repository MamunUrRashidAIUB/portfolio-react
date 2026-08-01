import { Switch, Route } from "react-router-dom";
import { Header, Notice } from "./components";
import { About, Contact, Skills } from "./pages";
import { Intro, MyPortfolio, Projects, Currentwork, ConnectWithMe } from "./sections";
import KineticGrid from "./components/ui/KineticGrid";

const App = () => {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <KineticGrid />
      </div>
      <div className="relative z-10">
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
      </div>
    </>
  );
};

export default App;
