import { useState } from 'react';

import { CheckoutSummary } from '@/components/event/CheckoutSummary';
import { EventHero } from '@/components/event/EventHero';
import { TicketTierCard } from '@/components/event/TicketTierCard';
import { PageLayout } from '@/components/layout/PageLayout';
import { MOCK_EVENT, MOCK_TICKET_TIERS } from '@/data/mockData';
import type { CartItem } from '@/types';

export function EventPage() {
  const [cart, setCart] = useState<CartItem[]>(
    MOCK_TICKET_TIERS.map((tier) => ({ tierId: tier.id, quantity: 0 })),
  );

  const handleQuantityChange = (tierId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.tierId === tierId ? { ...item, quantity } : item)),
    );
  };

  return (
    <PageLayout>
      <EventHero event={MOCK_EVENT} />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section aria-label="About this event">
              <h2 className="text-xl font-semibold text-surface-900">About This Event</h2>
              <p className="mt-3 leading-relaxed text-surface-800/80">{MOCK_EVENT.description}</p>
            </section>

            <section className="mt-10" aria-label="Ticket tiers">
              <h2 className="text-xl font-semibold text-surface-900">Select Tickets</h2>
              <div className="mt-4 space-y-3">
                {MOCK_TICKET_TIERS.map((tier) => {
                  const cartItem = cart.find((c) => c.tierId === tier.id);
                  return (
                    <TicketTierCard
                      key={tier.id}
                      tier={tier}
                      quantity={cartItem?.quantity ?? 0}
                      onQuantityChange={handleQuantityChange}
                    />
                  );
                })}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <CheckoutSummary tiers={MOCK_TICKET_TIERS} cart={cart} eventId={MOCK_EVENT.id} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
