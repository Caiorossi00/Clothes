import React from "react";
import kits from "../data/kits.json";
import "../assets/styles/CardKit.scss";

const CardKit = ({ id }) => {
  const kit = kits.find((k) => k.id === id);

  if (!kit) return null;

  return (
    <div className="card-kit">
      <div className="kit-top">
        <img src={kit.top.imagem} alt={kit.top.tipo} />
      </div>
      <div className="kit-bottom">
        <img src={kit.bottom.imagem} alt={kit.bottom.tipo} />
      </div>
      <div className="kit-info">
        <h3>{kit.nome}</h3>
        <p>Status: {kit.status}</p>
      </div>
    </div>
  );
};

export default CardKit;
