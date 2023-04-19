import "./App.css";
import CardInicio from "./Components/CardInicio/CardInicio";
import Experience from "./Components/Experience/Experience";
import NavBar from "./Components/Navbar/NavBar";
import Projects from "./Components/Projects/Projects.tsx";

function App() {
  return (
    <>
      <NavBar />
      <CardInicio />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
