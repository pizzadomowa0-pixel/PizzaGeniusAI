import StyleSelector, { allStyles } from "../components/StyleSelector";
import { useNavigate, useLocation } from "react-router-dom";

export default function StylePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedEquipment = location.state?.equipment; // odbieramy sprzęt

  // filtrowanie stylów w zależności od wybranego sprzętu
  const stylesForEquipment = (equipment) => {
  if (equipment === "oven" || equipment === "stone") {
    return allStyles.filter((s) => ["wloska_klasyczna", "rzymska", "nowojorska"].includes(s.id));
  } else {
    return allStyles.filter((s) => ["neapolitanska", "wloska_klasyczna", "canotto"].includes(s.id));
  }
  };

  const handleSelectStyle = (styleId) => {
  localStorage.setItem("selectedStyle", styleId);
  navigate("/fermentation", {
    state: {
      equipment: selectedEquipment, // z poprzedniej strony
      style: styleId,               // wybrany styl
      pizzaType: "margherita",      // lub dynamicznie w przyszłości
    },
  });
};

  return (
    <div>
        <button
  className="absolute top-4 left-4 p-2 rounded bg-gray-200 hover:bg-gray-300"
  // navigate(-1) -> jawnie do /equipment
  onClick={() => navigate("/equipment")}
>
  ← Wstecz
</button>

      <StyleSelector
        styles={stylesForEquipment(selectedEquipment)}
        onSelect={handleSelectStyle}
      />
    </div>
  );
}