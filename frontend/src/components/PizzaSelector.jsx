import { motion } from "framer-motion";

const pizzaOptions = [
  {
    id: "margherita",
    label: "Margherita",
    image: "/images/margherita.jpg",
  },
  {
    id: "pepperoni",
    label: "Pepperoni",
    image: "/images/pepperoni.jpg",
  },
  {
    id: "quattro_formaggi",
    label: "Quattro Formaggi",
    image: "/images/4_sery.jpg",
  },
  {
    id: "prosciutto_funghi",
    label: "Prosciutto e Funghi",
    image: "/images/prosciutto.jpg",
  },
  {
    id: "carbonara",
    label: "Carbonara",
    image: "/images/carbonara.jpg",
  },
];

export default function PizzaSelector({ selected, onSelect }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        🍕 Wybierz rodzaj pizzy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzaOptions.map((pizza) => (
          <motion.div
            key={pizza.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer rounded-2xl overflow-hidden shadow-md border transition
              ${
                selected === pizza.id
                  ? "ring-4 ring-orange-500 border-orange-400"
                  : "hover:shadow-lg border-gray-200"
              }`}
            onClick={() => onSelect(pizza.id)}
          >
            <img
              src={pizza.image}
              alt={pizza.label}
              className="w-full h-40 object-cover"
            />
            <div
              className={`p-4 text-center font-medium ${
                selected === pizza.id
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {pizza.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}