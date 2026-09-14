import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FraudCheckStatus } from '@/components/checkout/FraudCheckStatus';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { PageLayout } from '@/components/layout/PageLayout';
import {
  MOCK_EVENT,
  MOCK_FRAUD_CHECK_CLEARED,
  MOCK_FRAUD_CHECK_PENDING,
  MOCK_TICKET_TIERS,
} from '@/data/mockData';
import type { CartItem, FraudCheckResult } from '@/types';

interface CheckoutLocationState {
  cart: CartItem[];
  total: number;
}

const FRAUD_CHECK_DELAY_MS = 2500;

export function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CheckoutLocationState | null;

  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [fraudCheck, setFraudCheck] = useState<FraudCheckResult>(MOCK_FRAUD_CHECK_PENDING);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!state?.cart) {
      navigate(`/events/${MOCK_EVENT.id}`, { replace: true });
    }
  }, [state, navigate]);

  if (!state?.cart) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFraudCheck(MOCK_FRAUD_CHECK_PENDING);

    setTimeout(() => {
      setFraudCheck(MOCK_FRAUD_CHECK_CLEARED);
      setIsSubmitting(false);
    }, FRAUD_CHECK_DELAY_MS);
  };

  const canSubmit =
    buyerName.trim() !== '' &&
    buyerEmail.trim() !== '' &&
    cardNumber.replace(/\s/g, '').length >= 15 &&
    !isSubmitting &&
    fraudCheck.status !== 'blocked';

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <Link
            to={`/events/${MOCK_EVENT.id}`}
            className="text-brand-600 hover:text-brand-700"
          >
            ← Back to {MOCK_EVENT.title}
          </Link>
        </nav>

        <h1 className="text-2xl font-bold text-surface-900 sm:text-3xl">Checkout</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-3">
            <section className="rounded-xl border border-surface-200 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-surface-900">Buyer Information</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="buyer-name" className="block text-sm font-medium text-surface-800">
                    Full Name
                  </label>
                  <input
                    id="buyer-name"
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-surface-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="buyer-email" className="block text-sm font-medium text-surface-800">
                    Email
                  </label>
                  <input
                    id="buyer-email"
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-surface-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
                    autoComplete="email"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-surface-200 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-surface-900">Payment</h2>
              <div className="mt-4">
                <label htmlFor="card-number" className="block text-sm font-medium text-surface-800">
                  Card Number
                </label>
                <input
                  id="card-number"
                  type="text"
                  inputMode="numeric"
                  required
                  placeholder="4242 4242 4242 4242"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-surface-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
                  autoComplete="cc-number"
                />
                <p className="mt-2 text-xs text-surface-800/50">
                  Demo only — no real payment is processed.
                </p>
              </div>
            </section>

            <FraudCheckStatus result={fraudCheck} />

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Processing…' : `Pay $${state.total.toFixed(2)}`}
            </button>
          </form>

          <div className="lg:col-span-2">
            <OrderSummary tiers={MOCK_TICKET_TIERS} cart={state.cart} total={state.total} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
