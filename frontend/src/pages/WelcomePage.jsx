import WelcomeScreen from "../components/WelcomeScreen";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleSelectPizza = (pizzaId) => {
    localStorage.setItem("selectedPizza", pizzaId);
    navigate("/equipment");
  };

  return <WelcomeScreen onSelectPizza={handleSelectPizza} />;
  }