import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/events/evt-001', label: 'Event' },
  { to: '/organizer/dashboard', label: 'Organizer Dashboard' },
] as const;

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-surface-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="TicketFlow home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            TF
          </span>
          <span className="text-lg font-semibold text-surface-900">TicketFlow</span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-surface-800 hover:bg-surface-100 hover:text-surface-900'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
