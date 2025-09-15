import React from "react";
import "../assets/styles/CardKit.scss";

const CardKit = ({ kit, status }) => {
  return (
    <div
      className={`card-kit ${status === "indisponível" ? "indisponivel" : ""}`}
    >
      <div className="imagens-kit">
        <img src={kit.top.imagem} alt={kit.top.tipo} className="top" />
        <img src={kit.bottom.imagem} alt={kit.bottom.tipo} className="bottom" />
      </div>
    </div>
  );
};

export default CardKit;
