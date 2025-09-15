import React from "react";
import diasDaSemana from "../data/diasDaSemana.json";
import "../assets/styles/DiasDaSemana.scss";

const DiasDaSemana = () => {
  return (
    <div className="week-screen">
      {Object.entries(diasDaSemana).map(([dia, info], index) => (
        <div
          key={dia}
          className="dia-bloco"
          style={{ backgroundImage: `url(${info.imagem})` }}
        >
          <div className="overlay">
            <h1 className="nome-dia">
              {dia.charAt(0).toUpperCase() + dia.slice(1)}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiasDaSemana;
