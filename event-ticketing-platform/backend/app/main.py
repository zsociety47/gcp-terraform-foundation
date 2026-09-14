"""FastAPI application entry point."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import events, health, orders

app = FastAPI(
    title="TicketFlow API",
    description="Event ticket-selling platform API",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, tags=["health"])
app.include_router(events.router, prefix="/api/v1/events", tags=["events"])
app.include_router(orders.router, prefix="/api/v1/orders", tags=["orders"])
