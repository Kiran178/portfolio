// import BootstrapTheam from "./components/BootstrapTheamKit";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SocialLinks from "./components/SocialLinks";

import "./style/app.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <HeroSection />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <SocialLinks />
    </div>
  );
}

export default App;
