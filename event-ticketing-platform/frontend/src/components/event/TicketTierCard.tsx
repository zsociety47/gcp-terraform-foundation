import type { TicketTier } from '@/types';

const LOW_INVENTORY_THRESHOLD = 50;

interface TicketTierCardProps {
  tier: TicketTier;
  quantity: number;
  onQuantityChange: (tierId: string, quantity: number) => void;
}

export function TicketTierCard({ tier, quantity, onQuantityChange }: TicketTierCardProps) {
  const isSoldOut = tier.remainingQuantity === 0;
  const isLowInventory = tier.remainingQuantity > 0 && tier.remainingQuantity <= LOW_INVENTORY_THRESHOLD;
  const maxSelectable = Math.min(tier.remainingQuantity, 10);

  return (
    <article
      className={`rounded-lg border p-4 transition-shadow sm:p-5 ${
        quantity > 0
          ? 'border-brand-300 bg-brand-50/50 shadow-sm'
          : 'border-surface-200 bg-white hover:shadow-sm'
      }`}
      aria-label={`${tier.name} ticket tier`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-surface-900">{tier.name}</h3>
            {isLowInventory && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                Low inventory
              </span>
            )}
            {isSoldOut && (
              <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                Sold out
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-surface-800/70">{tier.description}</p>
          <p className="mt-2 text-sm text-surface-800/50">
            {tier.remainingQuantity.toLocaleString()} of {tier.totalQuantity.toLocaleString()}{' '}
            remaining
          </p>
        </div>

        <div className="flex items-center gap-4 sm:flex-col sm:items-end">
          <p className="text-xl font-bold text-surface-900">${tier.price.toFixed(2)}</p>

          {!isSoldOut && (
            <div className="flex items-center gap-2">
              <label htmlFor={`qty-${tier.id}`} className="sr-only">
                Quantity for {tier.name}
              </label>
              <button
                type="button"
                onClick={() => onQuantityChange(tier.id, Math.max(0, quantity - 1))}
                disabled={quantity === 0}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-surface-200 bg-white text-surface-900 transition-colors hover:bg-surface-100 disabled:opacity-40"
                aria-label={`Decrease ${tier.name} quantity`}
              >
                −
              </button>
              <input
                id={`qty-${tier.id}`}
                type="number"
                min={0}
                max={maxSelectable}
                value={quantity}
                onChange={(e) => {
                  const val = Math.min(maxSelectable, Math.max(0, parseInt(e.target.value, 10) || 0));
                  onQuantityChange(tier.id, val);
                }}
                className="h-9 w-12 rounded-md border border-surface-200 text-center text-sm font-medium"
                aria-label={`${tier.name} quantity`}
              />
              <button
                type="button"
                onClick={() => onQuantityChange(tier.id, Math.min(maxSelectable, quantity + 1))}
                disabled={quantity >= maxSelectable}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-surface-200 bg-white text-surface-900 transition-colors hover:bg-surface-100 disabled:opacity-40"
                aria-label={`Increase ${tier.name} quantity`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
