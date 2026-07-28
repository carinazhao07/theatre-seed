export function SeedDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-2 ${className}`} aria-hidden>
      <span className="h-px w-10 bg-mint/60" />
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-mint/50 seed-ripple" />
        <span className="h-1.5 w-1.5 rounded-full bg-mid-green" />
      </span>
      <span className="h-px w-10 bg-mint/60" />
    </div>
  );
}
