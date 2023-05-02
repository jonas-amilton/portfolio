import React from "react";
import "./style.css";

const cards = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    image: "https://via.placeholder.com/150",
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
