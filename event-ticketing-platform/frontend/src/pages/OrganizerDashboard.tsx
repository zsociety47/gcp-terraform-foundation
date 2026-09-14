import { ForecastRecommendationCard } from '@/components/dashboard/ForecastRecommendationCard';
import { NotificationsFeed } from '@/components/dashboard/NotificationsFeed';
import { SelloutRiskIndicator } from '@/components/dashboard/SelloutRiskIndicator';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { PageLayout } from '@/components/layout/PageLayout';
import {
  MOCK_DASHBOARD_STATS,
  MOCK_EVENT,
  MOCK_FORECAST_RECOMMENDATION,
  MOCK_NOTIFICATIONS,
} from '@/data/mockData';

export function OrganizerDashboard() {
  const stats = MOCK_DASHBOARD_STATS;

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-brand-600">Organizer Dashboard</p>
            <h1 className="text-2xl font-bold text-surface-900 sm:text-3xl">{MOCK_EVENT.title}</h1>
          </div>
          <p className="text-sm text-surface-800/50">
            {new Date(MOCK_EVENT.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            label="Tickets Sold"
            value={stats.totalTicketsSold.toLocaleString()}
          />
          <StatsCard
            label="Total Revenue"
            value={`$${stats.totalRevenue.toLocaleString()}`}
          />
          <StatsCard
            label="Conversion Rate"
            value={`${stats.conversionRate}%`}
            sublabel="Page views → purchases"
          />
          <StatsCard
            label="Avg Order Value"
            value={`$${stats.averageOrderValue.toFixed(2)}`}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ForecastRecommendationCard recommendation={MOCK_FORECAST_RECOMMENDATION} />
            <SelloutRiskIndicator risk={MOCK_FORECAST_RECOMMENDATION.selloutRisk} />
          </div>
          <div className="lg:col-span-1">
            <NotificationsFeed notifications={MOCK_NOTIFICATIONS} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
