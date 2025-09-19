import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiasDaSemana from "./pages/DiasDaSemana";
import TelaDoDia from "./pages/TelaDoDia";
import MeusConjuntos from "./pages/MeusConjuntos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaDoDia />} />
        <Route path="/dias" element={<DiasDaSemana />} />
        <Route path="/dias/:dia" element={<TelaDoDia />} />
        <Route path="/conjuntos" element={<MeusConjuntos />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
