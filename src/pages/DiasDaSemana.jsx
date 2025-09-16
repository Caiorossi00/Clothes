import React from "react";
import { useNavigate } from "react-router-dom";
import diasDaSemana from "../data/diasDaSemana.json";
import "../assets/styles/DiasDaSemana.scss";

const DiasDaSemana = () => {
  const navigate = useNavigate();

  return (
    <div className="week-screen">
      {Object.entries(diasDaSemana).map(([nome, info]) => (
        <div
          key={nome}
          className="dia-bloco"
          style={{ backgroundImage: `url(${info.imagem})` }}
          onClick={() => navigate(`/dias/${nome}`)}
        >
          <div className="overlay"></div>
          <h2 className="nome-dia">{nome}</h2>
        </div>
      ))}
    </div>
  );
};

export default DiasDaSemana;
