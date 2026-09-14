"""Order API schemas."""

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class OrderItemCreate(BaseModel):
    tier_id: str
    quantity: int = Field(ge=1, le=10)


class OrderCreate(BaseModel):
    event_id: str
    buyer_name: str = Field(min_length=1, max_length=255)
    buyer_email: EmailStr
    items: list[OrderItemCreate] = Field(min_length=1)


class OrderItemResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    tier_id: str
    tier_name: str
    quantity: int
    unit_price: float


class OrderResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    event_id: str
    buyer_name: str
    buyer_email: str
    total_amount: float
    status: str
    items: list[OrderItemResponse] = []
