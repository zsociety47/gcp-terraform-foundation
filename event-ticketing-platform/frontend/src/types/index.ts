export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  heroImageUrl: string;
  organizerId: string;
}

export interface TicketTier {
  id: string;
  eventId: string;
  name: string;
  description: string;
  price: number;
  totalQuantity: number;
  remainingQuantity: number;
}
