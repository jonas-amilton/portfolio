import "./App.css";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
