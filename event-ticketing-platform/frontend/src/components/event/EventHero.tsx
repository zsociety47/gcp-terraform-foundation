import type { Event } from '@/types';

interface EventHeroProps {
  event: Event;
}

export function EventHero({ event }: EventHeroProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section aria-label="Event details">
      <div className="relative h-56 overflow-hidden sm:h-72 md:h-80">
        <img
          src={event.heroImageUrl}
          alt={`${event.title} hero image`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950/70 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mt-16 relative rounded-xl bg-white p-6 shadow-lg sm:-mt-20 sm:p-8">
          <h1 className="text-2xl font-bold text-surface-900 sm:text-3xl md:text-4xl">
            {event.title}
          </h1>

          <dl className="mt-4 grid gap-3 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-surface-800/50">
                Date
              </dt>
              <dd className="mt-0.5 text-sm font-medium text-surface-900">{formattedDate}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-surface-800/50">
                Time
              </dt>
              <dd className="mt-0.5 text-sm font-medium text-surface-900">{event.time}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-surface-800/50">
                Location
              </dt>
              <dd className="mt-0.5 text-sm font-medium text-surface-900">
                {event.venue}, {event.location}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
