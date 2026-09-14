import type { NotificationItem } from '@/types';

const TYPE_ICONS: Record<NotificationItem['type'], string> = {
  sale: '💰',
  sellout_warning: '⚡',
  fraud_alert: '🛡️',
  forecast: '📊',
  system: 'ℹ️',
};

interface NotificationsFeedProps {
  notifications: NotificationItem[];
}

export function NotificationsFeed({ notifications }: NotificationsFeedProps) {
  return (
    <section className="rounded-xl border border-surface-200 bg-white p-5" aria-label="Recent notifications">
      <h3 className="text-sm font-semibold text-surface-900">Recent Notifications</h3>

      <ul className="mt-4 space-y-3">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={`flex gap-3 rounded-lg p-3 text-sm ${
              notif.read ? 'bg-surface-50' : 'bg-brand-50/50'
            }`}
          >
            <span className="text-base" aria-hidden="true">
              {TYPE_ICONS[notif.type]}
            </span>
            <div className="flex-1">
              <p className={notif.read ? 'text-surface-800/70' : 'font-medium text-surface-900'}>
                {notif.message}
              </p>
              <time
                className="mt-0.5 block text-xs text-surface-800/40"
                dateTime={notif.timestamp}
              >
                {new Date(notif.timestamp).toLocaleString()}
              </time>
            </div>
            {!notif.read && (
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-label="Unread" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
