from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.tools import get_cat_fact, calculate_expression

router = APIRouter(prefix="/tools", tags=["tools"])


@router.get("/cat-fact")
async def cat_fact():
    return await get_cat_fact()


class ExpressionRequest(BaseModel):
    expression: str


@router.post("/calculate")
def calculate(request: ExpressionRequest):
    try:
        result = calculate_expression(request.expression)
        return {"expression": request.expression, "result": result}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid expression: {str(e)}")
