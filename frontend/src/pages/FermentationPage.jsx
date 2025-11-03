import { useNavigate, useLocation } from "react-router-dom";

export default function FermentationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousData = location.state || {};

  const fermentations = [
    {
      id: "6h_room",
      title: "Szybka fermentacja",
      description: "Do 6 godzin – fermentacja w temperaturze pokojowej",
    },
    {
      id: "24h_fridge",
      title: "Długa fermentacja",
      description: "Minimum 24 godziny – dojrzewanie w lodówce",
    },
  ];

  const handleFermentationSelect = (fermentation) => {
    const data = {
      ...previousData,
      fermentation,
    };

    navigate("/pizza", { state: data }); // przejście do PizzaPage z wszystkimi danymi
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-orange-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-orange-800">
        Wybierz czas fermentacji ciasta
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {fermentations.map((f) => (
          <div
            key={f.id}
            onClick={() => handleFermentationSelect(f.id)}
            className="cursor-pointer bg-white shadow-md hover:shadow-xl transition-all rounded-2xl p-6 border-2 border-transparent hover:border-orange-400"
          >
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">{f.title}</h2>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute top-4 left-4 p-2 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => navigate("/style", { state: previousData })}
      >
        ← Wstecz
      </button>
    </div>
  );
}