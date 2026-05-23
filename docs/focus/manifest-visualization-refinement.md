# Focus: Manifest and Visualization Refinement

Status: active

Default-context policy: Read when refining static manifests, atlas or cluster visualization, website-facing project summaries, or route presentation for the CIM Library.

## Intent

Refine the public manifest and visualization layer before doing more cluster investigation. The goal is to make the library's static data surfaces and visual routes better organized, easier to inspect, and useful for future cluster work without changing the descriptive paper metadata contract.

## Current Surfaces

- Manifest exporter: `scripts/export-atlas-manifest.mjs`.
- Website-facing manifest: `public/cim-library.manifest.json`.
- Website contract check: `scripts/check-website-contract.mjs`.
- Project registry: `src/data/project-registry.json`.
- Full atlas route: `src/pages/library.astro`.
- Atlas visualization component: `src/components/TaxonomyAtlas.astro`.
- Cluster route: `src/pages/clusters/index.astro`.
- Cluster source: `src/data/clusters.json`.
- Website project page using manifest data: `src/pages/projects/cim-library/index.astro`.

## Initial Questions

- What should the manifest expose for downstream website/project modules beyond paper counts and Axis A/B summaries?
- Should cluster summaries be exported into the manifest, into a separate cluster manifest, or remain only in `src/data/clusters.json`?
- Which visualization refinements should happen in `/library/`, `/clusters/`, or both?
- Can the manifest encode route-level summaries and available views without adding scores or changing paper frontmatter?
- What shape would make future cluster pages or project cards easier to build while keeping the site static and inspectable?

## Guardrails

- Keep `/library/`, `/clusters/`, and `/papers/[slug]/` stable.
- Keep implementation static; do not add backend services or a database.
- Do not add coverage scores, ranking scores, quality scores, or `trajectory_IR_relevance`.
- Do not move cluster conclusions into paper frontmatter unless the public metadata contract intentionally changes.
- Use generated manifest data for website summaries where practical; avoid hand-copying counts across pages.
- Keep cluster and working-group labels coarse, tentative where evidence is weak, and traceable to papers/artifacts/authors/repositories.

## Likely Work Batches

1. Audit the current manifest schema and route consumers, then decide whether to extend `cim-library.manifest.json` or create a separate cluster/visualization manifest.
2. Add manifest fields that are stable, static, and useful for website/project summaries, such as route inventory, corpus stats, cluster counts, and view descriptors.
3. Refine `/clusters/` and/or `/library/` visualization affordances to use the manifest or data source more clearly.
4. Update website contract checks and docs so generated data stays in sync.
5. Run the full website loop after implementation.

## Verification

For docs-only focus setup, run:

```bash
npm run validate
```

After manifest, route, visualization, or contract edits, run:

```bash
npm run qa
npm run validate
npm run export:atlas
npm run contract:website
npm run check
npm run build
```

Use a browser smoke check for any rendered `/library/`, `/clusters/`, or project-page visual changes.
