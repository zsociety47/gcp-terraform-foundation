import type { TicketTier } from '@/types';

const LOW_INVENTORY_THRESHOLD = 50;

interface TicketTierCardProps {
  tier: TicketTier;
}

export function TicketTierCard({ tier }: TicketTierCardProps) {
  const isSoldOut = tier.remainingQuantity === 0;
  const isLowInventory =
    tier.remainingQuantity > 0 && tier.remainingQuantity <= LOW_INVENTORY_THRESHOLD;

  return (
    <article
      className="rounded-lg border border-surface-200 bg-white p-4 sm:p-5"
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

        <p className="text-xl font-bold text-surface-900">${tier.price.toFixed(2)}</p>
      </div>
    </article>
  );
}
