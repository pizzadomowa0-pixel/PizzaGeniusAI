import axios from "axios";

const API_URL = "http://127.0.0.1:8000"

// backend FastAPI

// Funkcja wysyłająca dane do backendu
export async function generatePizzaRecipe(equipment, style, pizzaType, fermentation) {
  try {
    const response = await axios.post(`${API_URL}/generate`, {
      equipment,
      style,
      pizza_type: pizzaType,
      fermentation
    });

    return response.data; // zawiera { status: "success", recipe: "..." }
  } catch (error) {
    console.error("Błąd przy generowaniu przepisu:", error);
    throw error;
  }
}