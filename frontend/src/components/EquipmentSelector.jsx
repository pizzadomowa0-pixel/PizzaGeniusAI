import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const equipments = [
  { id: "oven", name: "Piekarnik z blachą" },
  { id: "stone", name: "Piekarnik z kamieniem do pizzy" },
  { id: "mini_oven", name: "Mały piecyk kopułowy" },
  { id: "gass_stone", name: "Mały piecyk gazowy" },
];

export default function EquipmentSelector({ onSelect }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">
        Wybierz swój sprzęt
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {equipments.map((eq) => (
          <motion.div
            key={eq.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer rounded-2xl shadow-md border border-gray-200 p-6 text-center font-semibold text-gray-800 hover:shadow-lg"
            onClick={() => {
              onSelect(eq.id);
              navigate("/style", { state: { equipment: eq.id } });
            }}
          >
            {eq.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}