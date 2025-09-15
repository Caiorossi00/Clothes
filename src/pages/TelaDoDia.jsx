import React, { useState } from "react";
import SideCard from "../components/SideCard";
import WeekCalendar from "../components/WeekCalendar";
import CardKit from "../components/CardKit";
import Usado from "../components/Usado";
import IconBar from "../components/IconBar";
import diasDaSemana from "../data/diasDaSemana.json";
import kits from "../data/kits.json";
import "../assets/styles/TelaDoDia.scss";

const nomesDias = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

const TelaDoDia = ({ lado = "left" }) => {
  const hojeIndex = new Date().getDay();
  const diaAtual = nomesDias[hojeIndex];

  const diaInfo = diasDaSemana[diaAtual];

  if (!diaInfo) return <p>Dia não encontrado</p>;

  const kitsDoDia = kits.filter((k) => k.dia === diaAtual);

  const [statusKits, setStatusKits] = useState(
    kitsDoDia.reduce((acc, kit) => {
      acc[kit.id] = kit.status;
      return acc;
    }, {})
  );

  const toggleStatus = (id) => {
    setStatusKits({
      ...statusKits,
      [id]: statusKits[id] === "disponível" ? "indisponível" : "disponível",
    });
  };

  const disponiveis = kitsDoDia.filter(
    (k) => statusKits[k.id] === "disponível"
  ).length;
  const indisponiveis = kitsDoDia.filter(
    (k) => statusKits[k.id] === "indisponível"
  ).length;

  return (
    <div className="tela-do-dia">
      <SideCard
        lado={lado}
        dia={diaAtual}
        imagem={diaInfo.imagem}
        hoje={true}
      />

      <div className="tela-do-dia-right">
        <header>
          <WeekCalendar />
        </header>

        <main>
          <div className="contadores">
            <div className="contador-disponiveis">
              <h2>
                <span className="numero">
                  {disponiveis < 10 ? `0${disponiveis}` : disponiveis}
                </span>
                Kits disponíveis
              </h2>
            </div>
            <div className="contador-indisponiveis">
              <h2>
                <span className="numero">
                  {indisponiveis < 10 ? `0${indisponiveis}` : indisponiveis}
                </span>
                Kits sujos
              </h2>
            </div>
          </div>

          {kitsDoDia.length > 0 ? (
            kitsDoDia.map((kit) => (
              <CardKit key={kit.id} kit={kit} status={statusKits[kit.id]} />
            ))
          ) : (
            <p>Nenhum kit atribuído para hoje.</p>
          )}

          <Usado
            diaAtual={diaAtual}
            statusKits={statusKits}
            toggleStatus={toggleStatus}
          />
        </main>

        <footer>
          <IconBar />
        </footer>
      </div>
    </div>
  );
};

export default TelaDoDia;
