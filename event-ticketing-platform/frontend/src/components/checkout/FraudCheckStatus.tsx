import type { FraudCheckResult } from '@/types';

const STATUS_CONFIG = {
  pending: {
    label: 'Checking for suspicious activity…',
    icon: '⏳',
    bgClass: 'bg-amber-50 border-amber-200',
    textClass: 'text-amber-800',
    dotClass: 'bg-amber-400 animate-pulse',
  },
  cleared: {
    label: 'Purchase verified — no issues detected',
    icon: '✓',
    bgClass: 'bg-green-50 border-green-200',
    textClass: 'text-green-800',
    dotClass: 'bg-green-500',
  },
  flagged: {
    label: 'Order flagged for review',
    icon: '⚠',
    bgClass: 'bg-amber-50 border-amber-300',
    textClass: 'text-amber-900',
    dotClass: 'bg-amber-500',
  },
  blocked: {
    label: 'Order blocked — suspicious activity detected',
    icon: '✕',
    bgClass: 'bg-red-50 border-red-200',
    textClass: 'text-red-800',
    dotClass: 'bg-red-500',
  },
} as const;

interface FraudCheckStatusProps {
  result: FraudCheckResult;
}

export function FraudCheckStatus({ result }: FraudCheckStatusProps) {
  const config = STATUS_CONFIG[result.status];

  return (
    <div
      className={`rounded-lg border p-4 ${config.bgClass}`}
      role="status"
      aria-live="polite"
      aria-label="Fraud and scalping check status"
    >
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${config.dotClass}`} />
        <div>
          <p className={`text-sm font-semibold ${config.textClass}`}>
            Fraud / Scalping Check — {config.label}
          </p>
          {result.status === 'pending' && (
            <p className="mt-1 text-xs text-amber-700/70">
              Our fraud detection agent is screening this order for bulk buying and bot activity.
            </p>
          )}
          {result.reason && (
            <p className="mt-1 text-xs opacity-80">{result.reason}</p>
          )}
          {result.checkedAt && (
            <p className="mt-1 text-xs opacity-60">
              Checked at {new Date(result.checkedAt).toLocaleTimeString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
