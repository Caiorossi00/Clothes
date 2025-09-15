import React from "react";
import SideCard from "../components/SideCard";
import WeekCalendar from "../components/WeekCalendar";
import CardKit from "../components/CardKit";
import Usado from "../components/Usado";
import IconBar from "../components/IconBar";
import diasDaSemana from "../data/diasDaSemana.json";
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
          <div>
            <h1>Contador de disponíveis em kits</h1>
            <h1>Contador de indisponíveis em kits</h1>
          </div>

          {diaInfo.kits.length > 0 ? (
            diaInfo.kits.map((kitId) => <CardKit key={kitId} id={kitId} />)
          ) : (
            <p>Nenhum kit atribuído para hoje.</p>
          )}

          <Usado />
        </main>

        <footer>
          <IconBar />
        </footer>
      </div>
    </div>
  );
};

export default TelaDoDia;
