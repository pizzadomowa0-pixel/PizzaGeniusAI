import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { generatePizzaRecipe } from "../api/pizzaApi";

export default function PizzaPage() {
  const location = useLocation();
  const { equipment, style, pizzaType } = location.state || {};

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const result = await generatePizzaRecipe(equipment, style, pizzaType);
        setRecipe(result.recipe);
      } catch (err) {
        setError("Nie udało się pobrać przepisu 😢");
      } finally {
        setLoading(false);
      }
    };

    if (equipment && style && pizzaType) {
      fetchRecipe();
    }
  }, [equipment, style, pizzaType]);

  if (loading) return <p className="text-center mt-10">⏳ Generuję przepis...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Twój przepis na pizzę 🍕
      </h2>
      {recipe && (() => {
  let data;
  try {
    data = JSON.parse(recipe);
  } catch {
    return <p>Nie udało się przetworzyć przepisu 😢</p>;
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 text-lg">{data.intro}</p>

      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">🧂 Składniki</h3>
        <ul className="list-disc ml-6 space-y-1">
          {data.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">👨‍🍳 Kroki</h3>
        <ol className="list-decimal ml-6 space-y-2">
          {data.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">🔥 Wskazówki dotyczące pieczenia</h3>
        <p className="text-gray-700">{data.baking_tips}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">💡 Tip eksperta</h3>
        <p className="italic text-gray-700">{data.expert_tip}</p>
      </section>
    </div>
  );
})()}
    </div>
  );
}