import { Switch, Route } from "react-router-dom";
import { Header, Notice } from "./components";
import { About, Contact, Skills } from "./pages";
import { Intro, MyPortfolio, Projects, Currentwork, ConnectWithMe } from "./sections";
import KineticGrid from "./components/ui/KineticGrid";
import TechStack from "./components/techstack/TechStack";
import Experience from "./components/experience/Experience";

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
            <Experience className="p-6 sm:p-12 lg:pl-30" />
            <TechStack className="p-6 sm:p-12 lg:pl-30" />
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
