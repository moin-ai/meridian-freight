import { site } from "@/content/site";

/**
 * Overlapping flag badges of countries worked with, plus the total count.
 */
export function CountryBadges() {
  const shown = site.countries.slice(0, 8);
  const total = site.stats.find((s) => s.label === "Countries Served")?.value ?? 61;
  const more = Math.max(0, total - shown.length);

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {shown.map((c) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={c.code}
            src={`https://flagcdn.com/w40/${c.code}.png`}
            alt={c.name}
            title={c.name}
            width={28}
            height={28}
            loading="lazy"
            className="h-7 w-7 rounded-full object-cover ring-2 ring-white shadow-sm"
          />
        ))}
        {more > 0 && (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white ring-2 ring-white">
            +{more}
          </span>
        )}
      </div>
      <p className="text-sm leading-tight text-muted-foreground">
        <span className="font-semibold text-brand">{total}+ countries</span>
        <br />
        served worldwide
      </p>
    </div>
  );
}
