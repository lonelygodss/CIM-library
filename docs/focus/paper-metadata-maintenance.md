# Focus: Paper Metadata Maintenance

Status: paused / retrievable

Default-context policy: Do not read by default. Read when improving paper frontmatter, source links, publication venues, DOI links, or artifact provenance.

## Current Task Queue

- For papers whose recorded source is only arXiv, check whether a formal publication now exists.
- When found, update the paper entry with the formal venue, DOI or publisher page, and keep arXiv as supplementary source when useful.
- Prefer primary sources: publisher pages, conference proceedings, official DOI records, author pages, and official artifacts.
- Mark unresolved cases as `Unknown / not found in the checked sources` rather than guessing.

## Guardrails

- Do not weaken `src/content.config.ts`.
- Do not rewrite note prose unless the publication metadata affects a concrete statement.
- Do not replace a valid official artifact link with an aggregator.
- Run `npm run validate` after metadata edits; run the full website loop if route summaries or generated manifests change.
