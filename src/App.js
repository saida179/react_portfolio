import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Router>

          <Nav />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Wrapper>
          <Footer />

        </Router>
    </>
  );
}

export default App;
