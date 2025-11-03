import ResultCard from "../components/ResultCard";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const navigate = useNavigate();
  const pizza = localStorage.getItem("selectedPizza");
  const equipment = localStorage.getItem("selectedEquipment");
  const style = localStorage.getItem("selectedStyle");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <button className="absolute top-4 left-4 p-2 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => navigate(-1)}>← Wstecz</button>
      <ResultCard pizza={pizza} equipment={equipment} style={style} />
    </div>
  );
}