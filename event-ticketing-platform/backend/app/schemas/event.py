"""Event API schemas."""

from pydantic import BaseModel, ConfigDict


class TicketTierResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    event_id: str
    name: str
    description: str
    price: float
    total_quantity: int
    remaining_quantity: int


class EventResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    title: str
    description: str
    date: str
    time: str
    location: str
    venue: str
    hero_image_url: str
    organizer_id: str
    ticket_tiers: list[TicketTierResponse] = []


class EventCreate(BaseModel):
    title: str
    description: str
    date: str
    time: str
    location: str
    venue: str
    hero_image_url: str = ""
    organizer_id: str
