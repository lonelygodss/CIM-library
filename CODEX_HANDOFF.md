# Codex Handoff

## Project

Static Astro paper library for CIM compiler/IR-stack research.

- Paper metadata lives in `src/content/papers/*.md` frontmatter.
- Taxonomy vocabulary lives in `src/data/taxonomy.json`.
- Atlas route: `/library/`.
- Paper route: `/papers/[slug]/`.
- Keep the site static. Do not add PDF hosting, backend services, or a database.
- Do not reintroduce coverage scores, ranking scores, or `trajectory_IR_relevance`.

## Current State

- 62 paper notes are migrated and schema-valid.
- No raw long-form corpus notes remain in `src/content/papers/`.
- `/library/` atlas core is substantially done.
- Current atlas behavior:
  - large Axis A x Axis B graph;
  - deterministic node spreading;
  - hover/focus summaries;
  - click and picker selection;
  - filters and reset controls;
  - selected-paper Axis A x Axis B coverage cloud rendered on the atlas background;
  - right panel prioritizes Axis C first-class objects and Axis D rewrite objects;
  - responsive layout and mobile graph scroll.
- Paper detail pages have initial CSS improvements for long notes, tables, code blocks, and mobile wrapping.

Latest known checks:

```bash
npm run validate
npm run check
npm run build
```

All were green after the latest atlas coverage-cloud work.

## Next Work

Primary focus: improve individual paper detail pages.

- Make long notes easier to read and scan.
- Improve metadata panels and Axis C / Axis D presentation.
- Add source/provenance affordances if they improve public trust.
- Keep mobile behavior robust for long titles, tables, code blocks, and sidebars.

Secondary focus: improve atlas scoping/filtering after detail pages are clearer.

- Do not add raw string-search filters for Axis C and Axis D. First normalize Axis C first-class objects and Axis D rewrite objects into controlled vocabulary fields, then add an atlas layout switch between the current Axis A x Axis B view and a normalized Axis C x Axis D view.
- Normalize technology and workload metadata into separate controlled facets, then expose clean separate selectors.
- Consider selected-cell or dense-cluster scoped views.
- Consider preserving atlas state between `/library/` and paper detail pages.

## References

- `docs/future-development-plan.md`: current development plan.
- `docs/next-session-prompt.md`: restart prompt.
- `docs/corpus-note-harness.md`: use only when adding or substantially revising paper notes.
- `docs/metadata-template.md`: frontmatter shape.
- `src/content/legacy/*`: legacy source material. Keep intact unless explicitly asked otherwise.

## Guardrails

- Keep content QA green: `npm run qa`, `npm run validate`, `npm run check`, `npm run build`.
- Do not weaken `src/content.config.ts` to accommodate malformed notes.
- Do not invent paper facts, artifact links, licenses, venues, years, or reproducibility claims.
- Keep metadata descriptive, not evaluative.
