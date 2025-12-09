import httpx


async def get_cat_fact() -> dict:
    async with httpx.AsyncClient() as client:
        response = await client.get("https://catfact.ninja/fact")
        response.raise_for_status()
        return response.json()


def calculate_expression(expression: str) -> float:
    allowed_chars = set("0123456789+-*/(). ")
    if not all(c in allowed_chars for c in expression):
        raise ValueError("Invalid characters in expression")
    return eval(expression)
