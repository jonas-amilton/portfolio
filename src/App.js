import "./App.css";
import Home from "./Components/Home/Home";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
