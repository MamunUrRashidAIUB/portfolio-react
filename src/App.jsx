import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Notice } from "./components";
import Intro from "./sections/Intro";
import MyPortfolio from "./sections/MyPortfolio";
import KineticGrid from "./components/ui/KineticGrid";

const Projects = lazy(() => import("./sections/Projects"));
const Currentwork = lazy(() => import("./sections/Currentwork"));
const ConnectWithMe = lazy(() => import("./sections/Connectwithme"));
const TechStack = lazy(() => import("./components/techstack/TechStack"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <KineticGrid />
      </div>
      <div className="relative z-10">
        <Notice />
        <Header />
        <main>
          <Suspense fallback={null}>
            <Switch>
            <Route exact path="/">
              <Intro />
              <MyPortfolio />
              <Suspense fallback={null}>
                <Projects />
              </Suspense>
              <Suspense fallback={null}>
                <Experience className="p-6 sm:p-12 lg:pl-30" />
              </Suspense>
              <Suspense fallback={null}>
                <TechStack className="p-6 sm:p-12 lg:pl-30" />
              </Suspense>
              <Suspense fallback={null}>
                <Currentwork />
              </Suspense>
              <Suspense fallback={null}>
                <Contact />
              </Suspense>
            </Route>
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/connectwithme" component={ConnectWithMe} />
          </Switch>
        </Suspense>
      </main>
      </div>
    </>
  );
};

export default App;
