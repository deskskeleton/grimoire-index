# The Grimoire Index

A reference catalog of magic systems in fiction — searchable, filterable across six independent taxonomy facets, and structured for easy contribution.

## Stack

- **Astro 5** with content collections (Zod schema-validated MDX)
- **React** islands for interactive filtering and comparison
- **Tailwind CSS 4** for styling
- **Pagefind** for static full-text search (built into the production build)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/ + Pagefind index
npm run preview  # serve the production build locally
```

## Adding a new magic system

Drop a new MDX file in `src/content/systems/<slug>.mdx`. The frontmatter must satisfy the schema in `src/content.config.ts`. All taxonomy tag values must come from `src/lib/taxonomy.ts` — the build will fail loudly on typos. Use one of the existing pilot entries as a template.

## Taxonomy

Six independent facets:

1. **Systematization** — hard / rational / soft / aesthetic
2. **Source of Power** — innate, learned, divine, contractual, artifact, environmental, consumable, emotional, technological
3. **Cost Structure** — physical, resource, moral, knowledge, reciprocal, social, temporal, unpredictable, costless
4. **Scope of Effect** — twelve scope categories from elemental to communication
5. **Narrative Function** — six story-role categories
6. **Practitioner Demographics** — who can use it within the fictional world

Most facets are multi-valued; systematization and practitioner demographics are single-valued.

## Editorial policy

See [`/about`](src/pages/about.astro) on the live site. Short version: original analytical writing only, mechanism over mythology, encyclopedic tone.

## Deploy

Vercel-ready. Push to a GitHub repo, import on Vercel, no config needed beyond the default Astro preset.
