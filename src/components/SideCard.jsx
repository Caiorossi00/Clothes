import React from "react";
import "../assets/styles/SideCard.scss";

const SideCard = ({ lado = "left", dia = "", imagem = "", hoje = false }) => {
  return (
    <aside className={`side-card ${lado}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imagem})` }}
      />
      <div className="overlay">
        <h2 className="dia">{dia.charAt(0).toUpperCase() + dia.slice(1)}</h2>
      </div>
    </aside>
  );
};

export default SideCard;
