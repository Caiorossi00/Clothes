import React, { useState } from "react";
import initialKits from "../data/kits";
import IconBar from "../components/IconBar";
import "../assets/styles/MeusConjuntos.scss";

const coresCamiseta = ["azul", "vermelha", "preta", "branca"];
const coresBermuda = ["preto", "azul", "cinza", "branco"];
const diasSemana = [
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
  "domingo",
];

const MeusConjuntos = () => {
  const [kits, setKits] = useState(initialKits);

  const atualizarKit = (id, campo, valor) => {
    setKits(
      kits.map((kit) =>
        kit.id === id
          ? {
              ...kit,
              [campo]:
                campo === "dia"
                  ? valor
                  : {
                      ...kit[campo],
                      cor: valor,
                    },
            }
          : kit
      )
    );
  };

  return (
    <div id="kits-display">
      <h1>Meus Conjuntos</h1>

      <div className="kits-container">
        {kits.map((kit) => (
          <div className="kit-card" key={kit.id}>
            <div className="kit-header">
              <h2>
                {kit.id.toString().padStart(2, "0")} - {kit.nome}
              </h2>
            </div>

            <div className="kit-body">
              <div className="kit-images">
                {kit.top.imagem && (
                  <img
                    src={kit.top.imagem}
                    alt={`Camiseta ${kit.top.cor}`}
                    className="kit-img-top"
                  />
                )}
                {kit.bottom.imagem && (
                  <img
                    src={kit.bottom.imagem}
                    alt={`Bermuda ${kit.bottom.cor}`}
                    className="kit-img-bottom"
                  />
                )}
              </div>

              <div className="kit-form-inline">
                <label>Camiseta:</label>
                <select
                  value={kit.top.cor}
                  onChange={(e) => atualizarKit(kit.id, "top", e.target.value)}
                >
                  {coresCamiseta.map((cor) => (
                    <option key={cor} value={cor}>
                      {cor}
                    </option>
                  ))}
                </select>

                <label>Bermuda:</label>
                <select
                  value={kit.bottom.cor}
                  onChange={(e) =>
                    atualizarKit(kit.id, "bottom", e.target.value)
                  }
                >
                  {coresBermuda.map((cor) => (
                    <option key={cor} value={cor}>
                      {cor}
                    </option>
                  ))}
                </select>

                <label>Dia da semana:</label>
                <select
                  value={kit.dia}
                  onChange={(e) => atualizarKit(kit.id, "dia", e.target.value)}
                >
                  {diasSemana.map((dia) => (
                    <option key={dia} value={dia}>
                      {dia}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      <IconBar />
    </div>
  );
};

export default MeusConjuntos;
