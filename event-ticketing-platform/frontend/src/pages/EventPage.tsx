import { EventHero } from '@/components/event/EventHero';
import { TicketTierCard } from '@/components/event/TicketTierCard';
import { PageLayout } from '@/components/layout/PageLayout';
import { MOCK_EVENT, MOCK_TICKET_TIERS } from '@/data/mockData';

export function EventPage() {
  return (
    <PageLayout>
      <EventHero event={MOCK_EVENT} />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section aria-label="About this event">
          <h2 className="text-xl font-semibold text-surface-900">About This Event</h2>
          <p className="mt-3 leading-relaxed text-surface-800/80">{MOCK_EVENT.description}</p>
        </section>

        <section className="mt-10" aria-label="Ticket tiers">
          <h2 className="text-xl font-semibold text-surface-900">Ticket Tiers</h2>
          <div className="mt-4 space-y-3">
            {MOCK_TICKET_TIERS.map((tier) => (
              <TicketTierCard key={tier.id} tier={tier} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
