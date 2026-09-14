"""Event ORM model."""

from sqlalchemy import String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin, generate_uuid


class Event(Base, TimestampMixin):
    __tablename__ = "events"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    date: Mapped[str] = mapped_column(String(10), nullable=False, index=True)
    time: Mapped[str] = mapped_column(String(50), nullable=False)
    location: Mapped[str] = mapped_column(String(255), nullable=False)
    venue: Mapped[str] = mapped_column(String(255), nullable=False)
    hero_image_url: Mapped[str] = mapped_column(String(512), nullable=False, default="")
    organizer_id: Mapped[str] = mapped_column(String(36), nullable=False, index=True)

    ticket_tiers: Mapped[list["TicketTier"]] = relationship(  # noqa: F821
        back_populates="event",
        cascade="all, delete-orphan",
    )
