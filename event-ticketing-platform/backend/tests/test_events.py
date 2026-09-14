"""Event API tests."""

from httpx import ASGITransport, AsyncClient

from app.main import app


async def test_get_event_success() -> None:
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/api/v1/events/evt-001")
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Neon Nights Music Festival 2026"
    assert len(data["ticket_tiers"]) == 3


async def test_get_event_not_found() -> None:
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/api/v1/events/nonexistent")
    assert response.status_code == 404
