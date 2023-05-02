import React from "react";
import "./style.css";

import paginaRecados from "../../assets/demo/pagina-recados.jpeg";
import registroVendas from "../../assets/demo/registro-vendas.jpeg";
import siteClima from "../../assets/demo/site-clima.jpeg";
import siteMapas from "../../assets/demo/site-mapas.jpeg";

const cards = [
  {
    title: "Página de Recados",
    description: (
      <p>
        <a
          href="https://avaliacao-final-modulo-front-end.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projeto hospedado no Vercel{" "}
        </a>
      </p>
    ),

    image: paginaRecados,
  },
  {
    title: "Registro de Vendas",
    description: (
      <p>
        <a
          href="https://prova-frameworks-desenvolvimento-web.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projeto hospedado no Vercel{" "}
        </a>
      </p>
    ),
    image: registroVendas,
  },
  {
    title: "Site de Clima",
    description: (
      <p>
        <a
          href="https://site-de-clima-react-js.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projeto hospedado no Vercel{" "}
        </a>
      </p>
    ),

    image: siteClima,
  },
  {
    title: "Site de Mapas",
    description: (
      <p>
        <a
          href="https://pagina-de-mapas.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projeto hospedado no Vercel{" "}
        </a>
      </p>
    ),

    image: siteMapas,
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="container-cards">
        <h2>Projetos</h2>
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
