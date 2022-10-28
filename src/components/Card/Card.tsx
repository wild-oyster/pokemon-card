import "./styles.css";

import React from "react";
export type CardProps = {
  src: string;
};

const Card: React.FC<CardProps> = ({ src }) => {
  return (
    <div
      className="flip-card"
      style={{
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={"https://images.pokemontcg.io/mcd18/11_hires.png"}
            alt="back"
            width="260"
            height="365"
            style={{
              padding: "10px 10px 10px 10px",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="flip-card-back">
          <img
            src={src}
            alt="pokemon"
            width="260"
            height="365"
            style={{
              padding: "10px 10px 10px 10px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
