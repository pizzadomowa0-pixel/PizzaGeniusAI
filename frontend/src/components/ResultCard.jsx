import { motion } from "framer-motion";

export default function ResultCard({ equipment, style, pizza }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 p-6 rounded-2xl shadow-xl border border-orange-200 bg-white"
    >
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">
        🎉 Twoja pizza jest gotowa!
      </h2>
      <ul className="space-y-2 text-gray-700 text-lg">
        <li>
          <span className="font-semibold">Sprzęt:</span> {equipment}
        </li>
        <li>
          <span className="font-semibold">Styl:</span> {style}
        </li>
        <li>
          <span className="font-semibold">Rodzaj pizzy:</span> {pizza}
        </li>
      </ul>
      <div className="mt-6 text-center">
        <p className="italic text-gray-500">
          Skorzystaj z przepisu dopasowanego idealnie do Twojego wyboru!
        </p>
      </div>
    </motion.div>
  );
}