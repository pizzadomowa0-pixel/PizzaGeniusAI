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


api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("❌ Brak klucza API! Ustaw OPENAI_API_KEY w środowisku Render lub w pliku .env")


client = OpenAI(api_key=api_key)


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
        prompt = generate_pizza_prompt(req.equipment, req.style, req.pizza_type, req.fermentation)

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that outputs JSON."},
                {"role": "user", "content": prompt}
            ],
            response_format={"type": "json_object"}
        )

        content = response.choices[0].message.content
        import json
        recipe_data = json.loads(content)

        return JSONResponse(content={
            "status": "success",
            "recipe": recipe_data
        })
    except Exception as e:
        print(f"Error generating pizza: {e}") # Simple logging
        return JSONResponse(content={"status": "error", "message": str(e)}, status_code=500)