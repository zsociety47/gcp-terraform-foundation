type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

const RISK_CONFIG: Record<RiskLevel, { label: string; color: string; width: string }> = {
  low: { label: 'Low', color: 'bg-green-500', width: 'w-1/4' },
  medium: { label: 'Medium', color: 'bg-yellow-500', width: 'w-1/2' },
  high: { label: 'High', color: 'bg-orange-500', width: 'w-3/4' },
  critical: { label: 'Critical', color: 'bg-red-500', width: 'w-full' },
};

interface SelloutRiskIndicatorProps {
  risk: RiskLevel;
}

export function SelloutRiskIndicator({ risk }: SelloutRiskIndicatorProps) {
  const config = RISK_CONFIG[risk];

  return (
    <div className="rounded-xl border border-surface-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-surface-900">Sellout Risk</h3>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            risk === 'low'
              ? 'bg-green-100 text-green-800'
              : risk === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : risk === 'high'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-red-100 text-red-800'
          }`}
        >
          {config.label}
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-200">
        <div
          className={`h-full rounded-full transition-all ${config.color} ${config.width}`}
          role="meter"
          aria-valuenow={
            risk === 'low' ? 25 : risk === 'medium' ? 50 : risk === 'high' ? 75 : 100
          }
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Sellout risk: ${config.label}`}
        />
      </div>

      <p className="mt-2 text-xs text-surface-800/60">
        Based on current sales velocity and remaining inventory across all tiers.
      </p>
    </div>
  );
}
