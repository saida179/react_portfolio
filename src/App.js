import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/About" component={About} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Contact" component={Contact} />
                    <Route component={About} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;