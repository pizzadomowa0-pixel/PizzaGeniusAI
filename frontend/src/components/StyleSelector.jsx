import { motion } from "framer-motion";
/*
const styles = [
  {
    id: "neapolitan",
    label: "Neapolitańska",
    description: "Cienkie ciasto, puszyste brzegi, pieczona w wysokiej temperaturze.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Pizza_Napoletana_margherita_stg_02.jpg",
  },
  {
    id: "roman",
    label: "Rzymska",
    description: "Cienka, chrupiąca i prostokątna. Idealna na szybki kawałek.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Pizza_romana_in_teglia.jpg",
  },
  {
    id: "sicilian",
    label: "Sycylijska",
    description: "Grubsze ciasto, często z oliwkami i anchois.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Sicilian_pizza.jpg",
  },
  {
    id: "classica",
    label: "Włoska klasyczna",
    description: "Cienkie, chrupiące, sztywne ciasto",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Sicilian_pizza.jpg",
  },
  {
    id: "canotto",
    label: "Canotto",
    description: "Ogromne napowietrzone brzegi",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Sicilian_pizza.jpg",
  },
  {
    id: "nowojorska",
    label: "Nowojorska",
    description: "Grubsze ciasto, dużo sera.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Sicilian_pizza.jpg",
  },
];
*/
export const allStyles = [
  { id: "rzymska", label: "Rzymska", description: "Cienkie i prostokątne ciasto", image: "/images/rzymska.jpg" },
  { id: "nowojorska", label: "Nowojorska", description: "Grubsze ciasto, dużo sera", image: "/images/nowojorska.jpg" },
  { id: "neapolitanska", label: "Neapolitańska", description: "Cienkie ciasto, puszyste brzegi", image: "/images/neapolitańska.jpg" },
  { id: "wloska_klasyczna", label: "Włoska klasyczna", description: "Cienkie, chrupiące, sztywne ciasto", image: "/images/klasyczna.jpg" },
  { id: "canotto", label: "Canotto", description: "Ogromne napowietrzone brzegi", image: "/images/canotto.jpg" },
  { id: "sycylijska", label: "Sycylijska", description: "Ogromne napowietrzone brzegi", image: "/images/sycylijska.jpg" },
];

export default function StyleSelector({ selected, onSelect, styles }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Wybierz styl pizzy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {styles.map((style) => (
          <motion.div
            key={style.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer rounded-2xl overflow-hidden shadow-md border transition
              ${
                selected === style.id
                  ? "ring-4 ring-orange-500 border-orange-400"
                  : "hover:shadow-lg border-gray-200"
              }`}
            onClick={() => onSelect(style.id)}
          >
            <img
              src={style.image}
              alt={style.label}
              className="w-full h-40 object-cover"
            />
            <div
              className={`p-4 text-center font-medium ${
                selected === style.id ? "bg-orange-500 text-white" : "bg-white text-gray-700"
              }`}
            >
              {style.label}
            </div>
            <p
              className={`text-sm text-center p-3 ${
                selected === style.id ? "bg-orange-50 text-gray-800" : "bg-gray-50 text-gray-600"
              }`}
            >
              {style.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}