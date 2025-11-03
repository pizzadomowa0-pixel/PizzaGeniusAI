import EquipmentSelector from "../components/EquipmentSelector";
import { useNavigate } from "react-router-dom";

export default function EquipmentPage() {
  const navigate = useNavigate();

  const handleSelectEquipment = (equipmentId) => {
    localStorage.setItem("selectedEquipment", equipmentId);
    navigate("/style");
  };

  return (
    <div>
      <button className="absolute top-4 left-4 p-2 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => navigate(-1)}>← Wstecz</button>
      <EquipmentSelector onSelect={handleSelectEquipment} />
    </div>
  );
}