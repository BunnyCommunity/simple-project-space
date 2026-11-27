export function Globe({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none">
      <circle cx="100" cy="100" r="78" className="stroke-current" strokeWidth="2" />
      {[0, 30, 60].map((r) => (
        <ellipse key={r} cx="100" cy="100" rx={78 - r} ry="78" className="stroke-current" strokeWidth="1.2" opacity="0.7" />
      ))}
      {[-52, -26, 0, 26, 52].map((y) => {
        const w = Math.sqrt(78 * 78 - y * y);
        return <line key={y} x1={100 - w} x2={100 + w} y1={100 + y} y2={100 + y} className="stroke-current" strokeWidth="1.2" opacity="0.7" />;
      })}
      <line x1="100" y1="22" x2="100" y2="178" className="stroke-current" strokeWidth="1.2" />
      <path d="M30 150 C 20 110, 25 60, 60 32 M170 150 C 180 110, 175 60, 140 32" className="stroke-gold" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
