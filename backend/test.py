import requests

url = "http://127.0.0.1:8000/generate"

data = {
    "equipment": "oven",
    "style": "napoletana",
    "pizza_type": "margherita",
    "fermentation": "6h"  # <--- kluczowy, żeby backend nie zwracał błędu
}

response = requests.post(url, json=data)

print(response.status_code)
print(response.json())