import React from "react";
import "../Navbar/style.css";
import { BiCodeCurly } from "react-icons/bi";

function NavBar() {
  return (
    <>
      <header>
        <div className="title">
          <div style={{ marginTop: "1.6em" }}>
            <BiCodeCurly size={35} color="red" />
          </div>{" "}
          <h1>Jonas Silva</h1>
        </div>
        <nav className="navbar">
          <div className="navlinks">Inicio</div>
          <div className="navlinks">Experiências</div>
          <div className="navlinks">Projetos</div>
          <div className="navlinks">Conhecimentos</div>
          <div className="navlinks">Contato</div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
