import "./App.css";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
