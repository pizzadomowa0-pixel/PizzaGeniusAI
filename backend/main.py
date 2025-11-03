from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
from ai_logic import generate_pizza_prompt
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os

try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    print("⚠️  python-dotenv nie jest zainstalowany – używam zmiennych środowiskowych")

# 🔑 pobieramy klucz API z ENV
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("❌ Brak klucza API! Ustaw OPENAI_API_KEY w środowisku Render lub w pliku .env")

# ✅ inicjalizujemy klienta OpenAI
client = OpenAI(api_key=api_key)

# ✅ Aplikacja FastAPI
app = FastAPI()

# ✅ Pozwalamy frontendowi (React) łączyć się z backendem
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # w devie OK, potem można zawęzić
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Model danych wejściowych
class PizzaRequest(BaseModel):
    equipment: str
    style: str
    pizza_type: str
    fermentation: str


@app.post("/generate")
async def generate_pizza(req: PizzaRequest):
    """
    Generuje przepis na pizzę na podstawie wyborów użytkownika.
    """
    try:
        prompt = generate_pizza_prompt(req.equipment, req.style, req.pizza_type)

        response = client.responses.create(
            model="gpt-5-nano",
            input=prompt
        )

        return JSONResponse(content={
            "status": "success",
            "recipe": response.output_text
        })
    except Exception as e:
        return JSONResponse(content={"status": "error", "message": str(e)}, status_code=500)