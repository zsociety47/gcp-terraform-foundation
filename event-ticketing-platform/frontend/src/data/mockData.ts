import type {
  DashboardStats,
  Event,
  ForecastRecommendation,
  FraudCheckResult,
  NotificationItem,
  TicketTier,
} from '@/types';

export const MOCK_EVENT: Event = {
  id: 'evt-001',
  title: 'Neon Nights Music Festival 2026',
  description:
    'Three stages, twelve hours of live electronic and indie music under the stars. ' +
    'Featuring headliners Aurora Pulse and The Midnight Collective, plus local opener sets, ' +
    'food trucks, and an immersive light installation. All ages welcome until 10 PM; 21+ after.',
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

export const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalTicketsSold: 1699,
  totalRevenue: 98420,
  conversionRate: 4.2,
  averageOrderValue: 57.9,
};

export const MOCK_FORECAST_RECOMMENDATION: ForecastRecommendation = {
  id: 'rec-001',
  eventId: 'evt-001',
  type: 'price_increase',
  title: 'Raise Early Bird price — high sellout risk',
  description:
    'Sales velocity is 2.3× the forecast for this point in the lifecycle. ' +
    'Early Bird tier will sell out in ~4 days at current pace. ' +
    'A $10 increase is projected to extend availability by 6 days while adding ~$3,200 revenue.',
  suggestedAction: 'Increase Early Bird price from $45 to $55',
  currentValue: '$45',
  suggestedValue: '$55',
  confidence: 0.87,
  selloutRisk: 'high',
  createdAt: '2026-09-13T18:30:00Z',
  status: 'pending',
};

export const MOCK_FRAUD_CHECK_PENDING: FraudCheckResult = {
  status: 'pending',
  confidence: 0,
  reason: null,
  checkedAt: null,
};

export const MOCK_FRAUD_CHECK_CLEARED: FraudCheckResult = {
  status: 'cleared',
  confidence: 0.12,
  reason: null,
  checkedAt: '2026-09-13T19:01:23Z',
};

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-001',
    type: 'sale',
    message: '12 tickets sold in the last hour — above average pace',
    timestamp: '2026-09-13T19:00:00Z',
    read: false,
  },
  {
    id: 'notif-002',
    type: 'sellout_warning',
    message: 'VIP Experience tier at 84% capacity — sellout projected in 3 days',
    timestamp: '2026-09-13T17:45:00Z',
    read: false,
  },
  {
    id: 'notif-003',
    type: 'forecast',
    message: 'Forecasting agent generated a price recommendation for Early Bird tier',
    timestamp: '2026-09-13T18:30:00Z',
    read: true,
  },
  {
    id: 'notif-004',
    type: 'fraud_alert',
    message: 'Order #4821 flagged for review — 8 tickets in single transaction',
    timestamp: '2026-09-13T16:20:00Z',
    read: true,
  },
];
