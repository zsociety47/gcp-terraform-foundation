import type { Event, TicketTier } from '@/types';

export const MOCK_EVENT: Event = {
  id: 'evt-001',
  title: 'Neon Nights Music Festival 2026',
  description:
    'Three stages, twelve hours of live electronic and indie music under the stars. ' +
    'Featuring headliners Aurora Pulse and The Midnight Collective, plus local opener sets, ' +
    'food trucks, and an immersive light installation.',
  date: '2026-10-17',
  time: '4:00 PM – 4:00 AM',
  location: 'Austin, TX',
  venue: 'Zilker Park — Great Lawn',
  heroImageUrl:
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop',
  organizerId: 'org-001',
};

export const MOCK_TICKET_TIERS: TicketTier[] = [
  {
    id: 'tier-early',
    eventId: 'evt-001',
    name: 'Early Bird',
    description: 'Limited first-release pricing. General admission.',
    price: 45,
    totalQuantity: 500,
    remainingQuantity: 127,
  },
  {
    id: 'tier-ga',
    eventId: 'evt-001',
    name: 'General Admission',
    description: 'Full festival access to all stages.',
    price: 65,
    totalQuantity: 2000,
    remainingQuantity: 843,
  },
  {
    id: 'tier-vip',
    eventId: 'evt-001',
    name: 'VIP Experience',
    description: 'Premium viewing area, complimentary drinks, exclusive lounge access.',
    price: 150,
    totalQuantity: 200,
    remainingQuantity: 31,
  },
];
