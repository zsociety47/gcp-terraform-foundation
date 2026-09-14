"""Order/checkout API routes — stubbed for Day 0."""

from fastapi import APIRouter, status

from app.schemas.order import OrderCreate, OrderItemResponse, OrderResponse

router = APIRouter()


@router.post("/", response_model=OrderResponse, status_code=status.HTTP_201_CREATED)
async def create_order(payload: OrderCreate) -> OrderResponse:
    # Stub — will include inventory locking (SELECT FOR UPDATE) and Pub/Sub in later days
    total = sum(item.quantity * 65.0 for item in payload.items)
    return OrderResponse(
        id="ord-stub-001",
        event_id=payload.event_id,
        buyer_name=payload.buyer_name,
        buyer_email=str(payload.buyer_email),
        total_amount=total,
        status="pending",
        items=[
            OrderItemResponse(
                tier_id=item.tier_id,
                tier_name="General Admission",
                quantity=item.quantity,
                unit_price=65.0,
            )
            for item in payload.items
        ],
    )
