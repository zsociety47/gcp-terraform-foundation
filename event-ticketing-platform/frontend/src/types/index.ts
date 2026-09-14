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

export type OrderStatus = 'pending' | 'confirmed' | 'cancelled' | 'refunded';

export interface Order {
  id: string;
  eventId: string;
  buyerName: string;
  buyerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}

export interface OrderItem {
  tierId: string;
  tierName: string;
  quantity: number;
  unitPrice: number;
}

export type FraudCheckStatus = 'pending' | 'cleared' | 'flagged' | 'blocked';

export interface FraudCheckResult {
  status: FraudCheckStatus;
  confidence: number;
  reason: string | null;
  checkedAt: string | null;
}

export type RecommendationType = 'price_increase' | 'price_decrease' | 'inventory_adjustment';

export interface ForecastRecommendation {
  id: string;
  eventId: string;
  type: RecommendationType;
  title: string;
  description: string;
  suggestedAction: string;
  currentValue: string;
  suggestedValue: string;
  confidence: number;
  selloutRisk: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  status: 'pending' | 'applied' | 'dismissed';
}

export interface DashboardStats {
  totalTicketsSold: number;
  totalRevenue: number;
  conversionRate: number;
  averageOrderValue: number;
}

export interface NotificationItem {
  id: string;
  type: 'sale' | 'sellout_warning' | 'fraud_alert' | 'forecast' | 'system';
  message: string;
  timestamp: string;
  read: boolean;
}

export interface CartItem {
  tierId: string;
  quantity: number;
}
