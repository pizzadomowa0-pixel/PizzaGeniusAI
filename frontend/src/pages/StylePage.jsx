import StyleSelector, { allStyles } from "../components/StyleSelector";
import { useNavigate, useLocation } from "react-router-dom";

export default function StylePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedEquipment = location.state?.equipment;
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
      equipment: selectedEquipment, //
      style: styleId,               //
      pizzaType: "margherita",      //
    },
  });
};

  return (
    <div>
        <button
  className="absolute top-4 left-4 p-2 rounded bg-gray-200 hover:bg-gray-300"
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