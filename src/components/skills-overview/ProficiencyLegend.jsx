const PROFICIENCY_BUCKETS = [
  { min: 81, cls: 'bg-green-700', label: '81% - 100%' },
  { min: 61, cls: 'bg-green-600', label: '61% - 80%' },
  { min: 41, cls: 'bg-green-500', label: '41% - 60%' },
  { min: 21, cls: 'bg-green-400', label: '21% - 40%' },
  { min: 1, cls: 'bg-green-300', label: '1% - 20%' },
  { min: 0, cls: 'bg-gray-300', label: '0%' }
];

export const ProficiencyLegend = () => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
    {PROFICIENCY_BUCKETS.map((bucket) => (
      <div key={bucket.label} className="flex items-center gap-2 border-1 border-[var(--light-500)] px-1 py-2 text justify-center rounded-[8px] bg-white">
        <div className={`flex-[0_0_12px] w-[12px] h-[12px] rounded-full shadow-sm ${bucket.cls}`} />
        <span className="text-xs text-muted-foreground font-semibold text-[10px]">{bucket.label}</span>
      </div>
    ))}
  </div>
);
