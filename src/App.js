import "./App.css";
import CardInicio from "./Components/CardInicio/CardInicio";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <CardInicio />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
