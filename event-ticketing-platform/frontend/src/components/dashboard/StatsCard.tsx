interface StatsCardProps {
  label: string;
  value: string;
  sublabel?: string;
}

export function StatsCard({ label, value, sublabel }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-surface-200 bg-white p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-surface-800/50">{label}</p>
      <p className="mt-1 text-2xl font-bold text-surface-900">{value}</p>
      {sublabel && <p className="mt-1 text-xs text-surface-800/50">{sublabel}</p>}
    </div>
  );
}
