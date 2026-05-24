# Archived Iteration: Manifest and Visualization Refinement

Status: completed

Default-context policy: Do not read by default. Read when changing the static manifest contract, CIM Library local navigation, atlas selected-paper panel, project overview content, or the rationale for archiving the manifest/visualization focus.

## Completed Scope

This iteration refined the public manifest and visualization layer before resuming deeper cluster investigation.

- `public/cim-library.manifest.json` was extended to schema version `0.2.0`.
- The manifest now exposes route inventory, public view descriptors, taxonomy summaries, paper summaries, and compact cluster-layer stats.
- `npm run contract:website` validates the manifest against `docs/website-integration/schemas/atlas-manifest.schema.json` before bespoke route/count checks.
- `src/components/CimLibraryNav.astro` provides shared lower-hierarchy navigation across `/projects/cim-library/`, `/library/`, `/clusters/`, `/papers/`, and `/papers/[slug]/`.
- `/library/` uses an in-page section sidebar and a compact selected-paper reading bridge rather than a long metadata cloud.
- `/papers/` is a plain note index; `/papers/[slug]/` keeps the long-form note first, retains a right-side metadata/source/context panel, and moves detailed atlas frontmatter into a compact footnote.
- `/clusters/` is focus-first: a top focus map names each cluster binding object, and cluster panels group representative/supporting papers, evidence, working-group notes, and investigation notes.
- `/projects/cim-library/` now orients readers with the central corpus question, static public surfaces, and corpus-shape summaries.

## Decisions

- Keep cluster prose, uncertainty, and investigation details in `src/data/clusters.json`, not paper frontmatter.
- Keep the paper metadata contract descriptive. Do not add coverage scores, ranking scores, quality scores, or `trajectory_IR_relevance`.
- Extend the main CIM Library manifest rather than creating a separate cluster manifest for now.
- Treat cluster text/prose graphs as cluster-focus work. Current `object_flow` graph fields are structured public data; update `src/data/clusters.json`, the manifest exporter, the manifest schema, and `/clusters/` together when that field changes.
- Keep route-level navigation centralized in `CimLibraryNav`; page-specific anchors and contextual paper/source links remain local to pages.

## Handoff

The live focus can now return to cluster analysis and working-group content:

- Resume from `docs/focus/cluster-analysis-working-groups.md`.
- Prefer evidence-grounded text/prose graphs that explain object flow, lineage or boundary, and artifact relationships.
- Keep LLM-serving and full-stack-boundary cards as comparison sets unless source evidence supports lineage.

## Verification

Latest verification for the completed iteration:

```bash
npm run qa
npm run validate
npm run export:atlas
npm run contract:website
npm run check
npm run build
```

Browser smoke checks covered `/library/` desktop/mobile and `/projects/cim-library/` after the overview refinement.
