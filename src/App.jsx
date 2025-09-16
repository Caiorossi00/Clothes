import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiasDaSemana from "./pages/DiasDaSemana";
import TelaDoDia from "./pages/TelaDoDia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaDoDia />} />
        <Route path="/dias" element={<DiasDaSemana />} />
        <Route path="/dias/:dia" element={<TelaDoDia />} />
      </Routes>
    </Router>
  );
}

export default App;
