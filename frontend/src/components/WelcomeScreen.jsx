import { motion } from "framer-motion";

const pizzas = [
  { id: "margherita", name: "Margherita", image: "/images/margherita.jpg" },
  { id: "pepperoni", name: "Pepperoni", image: "/images/pepperoni.jpg" },
  { id: "quattro_formaggi", name: "Quattro Formaggi", image: "/images/4_sery.jpg" },
  { id: "prosciutto_funghi", name: "Prosciutto e Funghi", image: "/images/prosciutto.jpg" },
  { id: "carbonara", name: "Carbonara", image: "/images/carbonara.jpg" },
];

export default function WelcomeScreen({ onSelectPizza }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 p-6">
      <motion.h1 className="text-5xl font-extrabold text-orange-600 mb-6 text-center drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        🍕 Witaj w PizzaGenius AI!
      </motion.h1>
      <motion.p className="text-gray-700 text-xl mb-8 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        Jaka jest Twoja ulubiona włoska pizza? Za chwilę zrobimy ją razem!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {pizzas.map((pizza) => (
          <motion.div key={pizza.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg"
            onClick={() => onSelectPizza(pizza.id)}>
            <img src={pizza.image} alt={pizza.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center font-semibold bg-white text-gray-800">{pizza.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}