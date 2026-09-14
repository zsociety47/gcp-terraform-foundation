import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="TicketFlow home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            TF
          </span>
          <span className="text-lg font-semibold text-surface-900">TicketFlow</span>
        </Link>
      </div>
    </header>
  );
}
