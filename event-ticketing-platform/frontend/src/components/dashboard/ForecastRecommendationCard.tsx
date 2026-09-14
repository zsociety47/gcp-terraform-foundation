import { useState } from 'react';

import type { ForecastRecommendation } from '@/types';

interface ForecastRecommendationCardProps {
  recommendation: ForecastRecommendation;
}

export function ForecastRecommendationCard({ recommendation }: ForecastRecommendationCardProps) {
  const [status, setStatus] = useState(recommendation.status);

  const confidencePercent = Math.round(recommendation.confidence * 100);

  return (
    <article
      className="rounded-xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-5 sm:p-6"
      aria-label="Forecasting agent recommendation"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm text-white">
            AI
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
              Forecasting Agent
            </p>
            <h3 className="text-base font-semibold text-surface-900">{recommendation.title}</h3>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800">
          {confidencePercent}% confidence
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-surface-800/80">{recommendation.description}</p>

      <div className="mt-4 grid gap-3 rounded-lg bg-white/80 p-3 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium text-surface-800/50">Current</p>
          <p className="text-lg font-bold text-surface-900">{recommendation.currentValue}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-surface-800/50">Suggested</p>
          <p className="text-lg font-bold text-brand-600">{recommendation.suggestedValue}</p>
        </div>
      </div>

      {status === 'pending' ? (
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => setStatus('applied')}
            className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Apply Recommendation
          </button>
          <button
            type="button"
            onClick={() => setStatus('dismissed')}
            className="flex-1 rounded-lg border border-surface-200 bg-white px-4 py-2.5 text-sm font-semibold text-surface-800 transition-colors hover:bg-surface-50 focus:outline-none focus:ring-2 focus:ring-surface-200 focus:ring-offset-2"
          >
            Dismiss
          </button>
        </div>
      ) : (
        <p
          className={`mt-4 text-sm font-medium ${
            status === 'applied' ? 'text-green-700' : 'text-surface-800/50'
          }`}
        >
          {status === 'applied' ? '✓ Recommendation applied' : 'Recommendation dismissed'}
        </p>
      )}
    </article>
  );
}
