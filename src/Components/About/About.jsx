import React from "react";
import "../About/style.css";
import foto from "../../assets/profile.JPG";

function About() {
  return (
    <>
      <div className="container">
        <div className="description">
          <h4>Meu nome é</h4>
          <h2>Jonas Silva</h2>
          <p>
            Eu sou um desenvolvedor Front-end apaixonado por criar interfaces de
            usuário impressionantes e interativas para sites e aplicativos web.
            Com conhecimento em HTML, CSS, BootStrap, JavaScript e React JS, sou
            capaz de criar layouts responsivos e intuitivos. Eu valorizo a
            colaboração e comunicação em equipe e estou sempre buscando maneiras
            de melhorar a experiência do usuário. Com atenção aos detalhes,
            transformo designs em códigos e crio experiências envolventes para
            aumentar a interatividade do usuário. Se você está procurando um
            desenvolvedor Front-end apaixonado por design e tecnologia, estou
            disponível para trabalhar com você em seu próximo projeto.
          </p>
        </div>
        <div className="div-photo">
          <img src={foto} alt="Foto do perfil" />
        </div>
      </div>
    </>
  );
}

export default About;
