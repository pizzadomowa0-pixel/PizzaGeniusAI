import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import EquipmentPage from "./pages/EquipmentPage";
import StylePage from "./pages/StylePage";
import PizzaPage from "./pages/PizzaPage";
import ResultPage from "./pages/ResultPage";
import PizzaSelector from "./components/PizzaSelector";
import FermentationPage from "./pages/FermentationPage";
import { useState } from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/style" element={<StylePage />} />
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/fermentation" element={<FermentationPage />} />
      </Routes>
    </Router>
  );
}