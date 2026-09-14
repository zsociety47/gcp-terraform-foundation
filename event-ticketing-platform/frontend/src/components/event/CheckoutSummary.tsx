import { Link } from 'react-router-dom';

import type { CartItem, TicketTier } from '@/types';

interface CheckoutSummaryProps {
  tiers: TicketTier[];
  cart: CartItem[];
  eventId: string;
}

export function CheckoutSummary({ tiers, cart, eventId }: CheckoutSummaryProps) {
  const tierMap = new Map(tiers.map((t) => [t.id, t]));
  const lineItems = cart
    .filter((item) => item.quantity > 0)
    .map((item) => {
      const tier = tierMap.get(item.tierId);
      if (!tier) return null;
      return { tier, quantity: item.quantity, subtotal: tier.price * item.quantity };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const total = lineItems.reduce((sum, item) => sum + item.subtotal, 0);
  const totalTickets = lineItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside
      className="sticky top-20 rounded-xl border border-surface-200 bg-white p-5 shadow-sm"
      aria-label="Checkout summary"
    >
      <h2 className="text-lg font-semibold text-surface-900">Order Summary</h2>

      {lineItems.length === 0 ? (
        <p className="mt-4 text-sm text-surface-800/60">Select tickets to continue</p>
      ) : (
        <>
          <ul className="mt-4 space-y-3">
            {lineItems.map(({ tier, quantity, subtotal }) => (
              <li key={tier.id} className="flex justify-between text-sm">
                <span className="text-surface-800">
                  {quantity}× {tier.name}
                </span>
                <span className="font-medium text-surface-900">${subtotal.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-surface-200 pt-4">
            <div className="flex justify-between text-sm text-surface-800/70">
              <span>{totalTickets} ticket{totalTickets !== 1 ? 's' : ''}</span>
            </div>
            <div className="mt-1 flex justify-between">
              <span className="text-base font-semibold text-surface-900">Total</span>
              <span className="text-xl font-bold text-surface-900">${total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to={`/events/${eventId}/checkout`}
            state={{ cart, total }}
            className="mt-5 block w-full rounded-lg bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </aside>
  );
}
