import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSelect from "./components/HeroSelect";
//import Wrapper from "./components/Wrapper/index"


function App() {
  return (
      <Router>
          <div>
              <Navbar />
              <HeroSelect>
                  <Switch>
                      <Route exact path="/" component={About} />
                      <Route path="/About" component={About} />
                      <Route path="/Portfolio" component={Portfolio} />
                      <Route path="/Contact" component={Contact} />
                      <Route component={About} />
                  </Switch>
                  </HeroSelect>
              <Footer />
          </div>
      </Router>
  );
}

export default App;