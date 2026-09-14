import type { CartItem, TicketTier } from '@/types';

interface OrderSummaryProps {
  tiers: TicketTier[];
  cart: CartItem[];
  total: number;
}

export function OrderSummary({ tiers, cart, total }: OrderSummaryProps) {
  const tierMap = new Map(tiers.map((t) => [t.id, t]));

  return (
    <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-surface-800/50">
        Order Summary
      </h3>
      <ul className="mt-3 space-y-2">
        {cart
          .filter((item) => item.quantity > 0)
          .map((item) => {
            const tier = tierMap.get(item.tierId);
            if (!tier) return null;
            return (
              <li key={item.tierId} className="flex justify-between text-sm">
                <span>
                  {item.quantity}× {tier.name}
                </span>
                <span className="font-medium">${(tier.price * item.quantity).toFixed(2)}</span>
              </li>
            );
          })}
      </ul>
      <div className="mt-4 flex justify-between border-t border-surface-200 pt-3">
        <span className="font-semibold">Total</span>
        <span className="text-lg font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
