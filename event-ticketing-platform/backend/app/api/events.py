"""Event CRUD API routes — stubbed for Day 0, wired to DB in Day 2+."""

from fastapi import APIRouter, HTTPException, status

from app.schemas.event import EventCreate, EventResponse, TicketTierResponse

router = APIRouter()

_STUB_EVENT = EventResponse(
    id="evt-001",
    title="Neon Nights Music Festival 2026",
    description="Three stages, twelve hours of live electronic and indie music under the stars.",
    date="2026-10-17",
    time="4:00 PM – 4:00 AM",
    location="Austin, TX",
    venue="Zilker Park — Great Lawn",
    hero_image_url="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop",
    organizer_id="org-001",
    ticket_tiers=[
        TicketTierResponse(
            id="tier-early",
            event_id="evt-001",
            name="Early Bird",
            description="Limited first-release pricing.",
            price=45.0,
            total_quantity=500,
            remaining_quantity=127,
        ),
        TicketTierResponse(
            id="tier-ga",
            event_id="evt-001",
            name="General Admission",
            description="Full festival access.",
            price=65.0,
            total_quantity=2000,
            remaining_quantity=843,
        ),
        TicketTierResponse(
            id="tier-vip",
            event_id="evt-001",
            name="VIP Experience",
            description="Premium viewing area, lounge access.",
            price=150.0,
            total_quantity=200,
            remaining_quantity=31,
        ),
    ],
)


@router.get("/{event_id}", response_model=EventResponse)
async def get_event(event_id: str) -> EventResponse:
    if event_id != _STUB_EVENT.id:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Event not found")
    return _STUB_EVENT


@router.post("/", response_model=EventResponse, status_code=status.HTTP_201_CREATED)
async def create_event(payload: EventCreate) -> EventResponse:
    # Stub — will persist to Cloud SQL in Day 2+
    return EventResponse(
        id="evt-new",
        ticket_tiers=[],
        **payload.model_dump(),
    )
