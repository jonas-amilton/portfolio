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
          <div className="navlinks">
            <a
              href="https://www.linkedin.com/in/jonas-ag-silva"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
          <div className="navlinks">
            <a
              href="https://github.com/jonas-amilton"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
