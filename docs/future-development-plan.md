# Future Development Plan

## Current State

This is a static Astro paper library for CIM compiler/IR-stack research.

- `src/content/papers/` contains 62 schema-valid Markdown paper entries.
- The raw-note migration milestone is complete; no raw long-form notes remain.
- The active metadata contract is descriptive. It does not include coverage scores, ranking scores, or `trajectory_IR_relevance`.
- `/library/` is the primary public atlas route.
- `/papers/[slug]/` renders individual long-form corpus notes.
- Keep the site static and suitable for personal hosting. Do not add PDF hosting, backend services, or a database unless the project direction changes.

Keep these checks green while changing UI or content:

```bash
npm run qa
npm run validate
npm run check
npm run build
```

Latest known good baseline:

- `npm run validate`: `Validated 62 paper metadata file(s).`
- `npm run check`: `0 errors, 0 warnings, 0 hints`.
- `npm run build`: 64 static pages.

## Completed Focus -- Atlas Core

The main `/library/` atlas focus is now substantially done.

Implemented:

- large Axis A x Axis B graph as the first main section on `/library/`;
- deterministic node spreading for dense cells;
- hover/focus summaries and click-to-select behavior;
- filtered paper picker and reset controls;
- selected-paper right panel focused on Axis C first-class objects and Axis D rewrite objects;
- selected-paper Axis A x Axis B coverage shown directly on the atlas as a non-scoring background cloud;
- short taxonomy explanation after the graph;
- responsive controls and mobile horizontal graph scroll;
- paper detail page CSS improvements for long notes, tables, code blocks, and mobile wrapping.

Do not rebuild the atlas from scratch. Future atlas work should be incremental and should use current frontmatter plus `src/data/taxonomy.json` as source of truth.

## Next Focus -- Paper Detail Pages

The next product milestone is individual paper detail page improvement. The goal is to make long corpus notes easier to read, scan, and use as evidence for atlas filtering.

Priority work:

1. Improve the long-note reading layout on `/papers/[slug]/`.
2. Make metadata easier to scan without duplicating the full note.
3. Surface Axis C and Axis D content clearly, since these are now the most useful detail-page anchors.
4. Add source/provenance affordances if they improve public trust.
5. Improve mobile behavior for long titles, tables, code blocks, and metadata panels.

Keep changes schema-compatible unless there is a clear reason to update `src/content.config.ts`.

## Next Focus -- Detail-Driven Atlas Scoping

After detail pages are more usable, improve atlas scoping and filtering using the same descriptive metadata.

Useful directions:

- normalize Axis C first-class objects and Axis D rewrite objects into controlled vocabulary fields, then add an atlas layout switch that can render either the current Axis A x Axis B view or a normalized Axis C x Axis D view;
- normalize technology and workload metadata into separate controlled facets, then expose clean, separate technology and workload selectors rather than relying on raw phrase search;
- scoped views for dense clusters or selected cells;
- detail-page back-links or query parameters that preserve atlas filter/selection context;
- compact paper lists/cards only when they help navigate filtered results;
- optional static search index after detail pages and metadata scanability are stable.

The atlas should remain descriptive. Do not introduce coverage, quality, ranking, or relevance scores.

## Content QA

Content QA is mostly green, but keep these checks in mind during edits:

- preserve the 62-entry corpus unless intentionally adding/removing papers;
- keep slugs unique and filename-aligned;
- keep Axis A/B values within `src/data/taxonomy.json`;
- keep generated-note artifacts out of rendered notes;
- keep artifact URLs, years, venues, and reproducibility labels evidence-based;
- do not invent publication facts or artifact behavior.

Use `scripts/promote-raw-note.mjs` only for future imported raw notes. The regular development path should not need raw-note migration instructions.

## Research Extensions

Later research-facing improvements:

- explicit source provenance fields for paper, artifact, docs, and checked date;
- controlled vocabulary for `integration_roles`;
- comparison pages for clusters such as ONNX-to-ISA stacks, UPMEM runtime stacks, macro generators, and simulator/cost-model frameworks;
- tag pages or Axis A/B detail pages if they prove useful after detail-page polish.

## Non-Goals

- Do not add PDF hosting.
- Do not add backend services or a database.
- Do not weaken the content schema to accommodate malformed notes.
- Do not introduce quality scores, coverage scores, ranking scores, or `trajectory_IR_relevance`.
- Do not automatically rewrite scholarly prose unless explicitly requested.
