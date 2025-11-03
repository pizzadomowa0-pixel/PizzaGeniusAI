def generate_pizza_prompt(equipment: str, style: str, pizza_type: str, fermentation: str ) -> str:
    """
    Generuje prompt dla AI na podstawie wyborów użytkownika.
    """
    prompt = f"""
Jesteś włoskim mistrzem pizzy. Użytkownik wybrał:

🍕 Rodzaj pizzy: {pizza_type}
🔥 Sprzęt: {equipment}
🎨 Styl: {style}
   Fermentacja: {fermentation}

Na podstawie tych danych przygotuj kompletny przepis na pizzę w języku polskim. Zawsze proponuj małą ilość drożdży w cieście i długi czas dojrzewania. Do sosu pomidorowego proponuj tylko dobrej jakości pomidory w puszce. sos pomidorowy to wyłącznie pomidory + sól. Mozzarella najlepiej "fior di latte" jeżeli niedostępna to w kulce(ale uprzednio dobrze odsączona. Pieczenie zawsze w najwyższej tempreaturze. Zawsze w formacie JSON:

{{
  "intro": "krótkie wprowadzenie (2 zdania)",
  "ingredients": ["lista składników z ilościami."],
  "steps": ["krok po kroku jak zrobić ciasto i piec. porcja gotowej kulki na pizze powinna miec 280g."],
  "baking_tips": "porady dotyczące pieczenia w wybranym sprzęcie. Jeżeli użytkownik wybrał piekarnik z blachą to powiedz, że nagrzewamy na maxa piekarnik z blachą w środku. Jeżeli mamy łopatę do pizzy to wtedy zsuwamy pizze na rozgrzaną blachę. Jeżeli nie mamy łopaty to ostrożnie wyjmujemy blachę i wkładami pizze rozciągnietą na papierze do pieczenia. wtedy pod koniec pieczenia wyciągamy papier",
  "expert_tip": "jeden ciekawy sekret od eksperta. Dodaj, że rozciągamy kulke od środka w kierunku brzegów, aby wypchnąć w brzegi powietrze."
}}
"""
    return prompt