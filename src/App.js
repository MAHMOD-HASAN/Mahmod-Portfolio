import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ContactMe from "./Pages/Home/ContactMe/ContactMe";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Home/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Navigation from "./Pages/Shared/Header/Navigation";

function App() {
  return (
  
    <Router>
      <Navigation></Navigation>

      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/contact'>
            <ContactMe></ContactMe>
        </Route>
        <Route exact path='/project'>
            <Projects></Projects>
        </Route>

        <Route exact path='/about'>
            <AboutMe></AboutMe>
        </Route>
        <Route path='/project/:projectId'>
            <ProjectDetails></ProjectDetails>
        </Route>
      </Switch>

      <Footer></Footer>

      <Navigation></Navigation>
      
    </Router>

  );
}

export default App;


