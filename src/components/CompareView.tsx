import { useEffect, useState } from 'react';
import { FACETS, FACET_KEYS, label } from '../lib/taxonomy';
import type { SystemEntry } from './FilterPanel';

interface FullEntry extends SystemEntry {
  creator: string;
  yearIntroduced: number;
}

export default function CompareView({ entries }: { entries: FullEntry[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('s');
    if (s) setSelected(s.split(',').filter(Boolean));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (selected.length > 0) params.set('s', selected.join(','));
    else params.delete('s');
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [selected]);

  const chosen = selected
    .map((slug) => entries.find((e) => e.slug === slug))
    .filter((e): e is FullEntry => Boolean(e));

  const toggle = (slug: string) => {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  return (
    <div>
      <div className="mb-8">
        <div className="font-sans text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Pick systems to compare</div>
        <div className="flex flex-wrap gap-2">
          {entries.map((e) => {
            const active = selected.includes(e.slug);
            return (
              <button
                key={e.slug}
                onClick={() => toggle(e.slug)}
                className={`px-3 py-1.5 text-sm font-sans border rounded transition-colors ${
                  active
                    ? 'bg-[var(--color-accent)] text-[var(--color-parchment)] border-[var(--color-accent)]'
                    : 'border-[var(--color-rule)] dark:border-[var(--color-rule-dark)] hover:border-[var(--color-accent)]'
                }`}
              >
                {e.name}
              </button>
            );
          })}
        </div>
      </div>

      {chosen.length === 0 ? (
        <p className="text-[var(--color-muted)]">Select two or more systems above.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-rule)] dark:border-[var(--color-rule-dark)]">
                <th className="text-left py-3 pr-4 font-sans text-xs uppercase tracking-wider text-[var(--color-muted)]">Field</th>
                {chosen.map((s) => (
                  <th key={s.slug} className="text-left py-3 px-4 font-sans">
                    <a href={`/systems/${s.slug}`}>{s.name}</a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Row label="Source" cells={chosen.map((s) => s.sourceWorks.join(', '))} />
              <Row label="Creator" cells={chosen.map((s) => s.creator)} />
              <Row label="Year" cells={chosen.map((s) => String(s.yearIntroduced))} />
              <Row label="Summary" cells={chosen.map((s) => s.summary)} />
              {FACET_KEYS.map((key) => (
                <Row
                  key={key}
                  label={FACETS[key].name}
                  cells={chosen.map((s) => {
                    const v = (s as any)[key];
                    const arr: string[] = Array.isArray(v) ? v : [v];
                    return arr.map(label).join(', ');
                  })}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Row({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr className="border-b border-[var(--color-rule)] dark:border-[var(--color-rule-dark)]">
      <td className="py-3 pr-4 font-sans text-[var(--color-muted)] align-top whitespace-nowrap">{label}</td>
      {cells.map((c, i) => (
        <td key={i} className="py-3 px-4 align-top leading-relaxed">{c}</td>
      ))}
    </tr>
  );
}
