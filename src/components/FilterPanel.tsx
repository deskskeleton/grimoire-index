import { useMemo, useState } from 'react';
import { FACETS, FACET_KEYS, label, type FacetKey } from '../lib/taxonomy';

export interface SystemEntry {
  slug: string;
  name: string;
  sourceWorks: string[];
  summary: string;
  medium: string[];
  systematization: string;
  sourceOfPower: string[];
  costStructure: string[];
  scopeOfEffect: string[];
  narrativeFunction: string[];
  practitionerDemographics: string;
  activationConduit: string[];
  reversibility: string[];
  detectability: string;
  scaleRange: string[];
}

type Selection = Record<FacetKey, Set<string>>;

const emptySelection = (): Selection =>
  FACET_KEYS.reduce((acc, k) => {
    acc[k] = new Set();
    return acc;
  }, {} as Selection);

function matches(entry: SystemEntry, selection: Selection, query: string): boolean {
  if (query) {
    const q = query.toLowerCase();
    const haystack = [entry.name, entry.summary, ...entry.sourceWorks].join(' ').toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  for (const key of FACET_KEYS) {
    const selected = selection[key];
    if (selected.size === 0) continue;
    const value = (entry as any)[key];
    if (Array.isArray(value)) {
      const has = value.some((v: string) => selected.has(v));
      if (!has) return false;
    } else {
      if (!selected.has(value)) return false;
    }
  }
  return true;
}

export default function FilterPanel({ entries }: { entries: SystemEntry[] }) {
  const [selection, setSelection] = useState<Selection>(emptySelection);
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => entries.filter((e) => matches(e, selection, query)),
    [entries, selection, query]
  );

  const toggle = (facet: FacetKey, value: string) => {
    setSelection((prev) => {
      const next = { ...prev };
      const set = new Set(prev[facet]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      next[facet] = set;
      return next;
    });
  };

  const clearAll = () => {
    setSelection(emptySelection());
    setQuery('');
  };

  const totalSelected = FACET_KEYS.reduce((n, k) => n + selection[k].size, 0);

  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-8">
      <aside className="font-sans text-sm">
        <div className="mb-4">
          <input
            type="search"
            placeholder="Search name, summary, source..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border border-[var(--color-rule)] dark:border-[var(--color-rule-dark)] rounded bg-transparent"
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Filters</span>
          {(totalSelected > 0 || query) && (
            <button onClick={clearAll} className="text-xs underline text-[var(--color-accent)]">
              Clear all
            </button>
          )}
        </div>
        {FACET_KEYS.map((key) => {
          const facet = FACETS[key];
          return (
            <details key={key} className="mb-4 border-b border-[var(--color-rule)] dark:border-[var(--color-rule-dark)] pb-3" open>
              <summary className="cursor-pointer font-semibold text-sm py-1 select-none">
                {facet.name}
                {selection[key].size > 0 && (
                  <span className="ml-1 text-xs text-[var(--color-accent)]">({selection[key].size})</span>
                )}
              </summary>
              <div className="mt-2 space-y-1">
                {facet.values.map((value) => (
                  <label key={value} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selection[key].has(value)}
                      onChange={() => toggle(key, value)}
                    />
                    <span>{label(value)}</span>
                  </label>
                ))}
              </div>
            </details>
          );
        })}
      </aside>

      <section>
        <div className="mb-4 text-sm text-[var(--color-muted)] font-sans">
          {filtered.length} {filtered.length === 1 ? 'system' : 'systems'}
          {totalSelected > 0 || query ? ` (filtered from ${entries.length})` : ''}
        </div>
        {filtered.length === 0 ? (
          <p className="text-[var(--color-muted)]">No systems match your filters.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((e) => (
              <a
                key={e.slug}
                href={`/systems/${e.slug}`}
                className="block p-4 border border-[var(--color-rule)] dark:border-[var(--color-rule-dark)] rounded hover:border-[var(--color-accent)] !no-underline !text-inherit transition-colors"
              >
                <div className="flex justify-between items-baseline gap-3 mb-1">
                  <h3 className="text-base font-sans font-semibold">{e.name}</h3>
                  <span className="text-xs text-[var(--color-muted)] font-sans uppercase whitespace-nowrap">
                    {label(e.systematization)}
                  </span>
                </div>
                <div className="text-xs text-[var(--color-muted)] mb-2 font-sans">
                  {e.sourceWorks.join(' · ')}
                </div>
                <p className="text-sm leading-relaxed">{e.summary}</p>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
