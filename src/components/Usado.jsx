import React from "react";
import kits from "../data/kits.json";
import "../assets/styles/Usado.scss";

const Usado = ({ diaAtual, statusKits, toggleStatus }) => {
  const kitsDoDia = kits.filter((k) => k.dia === diaAtual);

  return (
    <div className="usado-checklist">
      {kitsDoDia.map((kit) => (
        <label key={kit.id} className="kit-checkbox">
          Usado hoje?
          <input
            type="checkbox"
            checked={statusKits[kit.id] === "indisponível"}
            onChange={() => toggleStatus(kit.id)}
          />
        </label>
      ))}
    </div>
  );
};

export default Usado;
