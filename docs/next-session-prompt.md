# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

Read AGENTS.md and docs/active-context.md first. Then use docs/README.md to choose any task-specific context. Do not bulk-read archives, paper-note harnesses, website-integration notes, or legacy docs unless the task needs them.

Current default state:
- Static Astro CIM compiler/IR paper library inside a personal website shell.
- 62 schema-valid paper entries; no raw corpus notes remain.
- Stable routes: /, /projects/, /projects/cim-library/, /library/, /clusters/, /papers/[slug]/.
- /library/ and /papers/[slug]/ must remain stable.
- src/data/clusters.json is the hand-authored cluster source, separate from paper frontmatter.
- /clusters/ is the current cluster and coarse working-group route.
- The cluster layer currently has 7 cluster hypotheses and 13 deeper investigation cards, but cluster investigation is paused while the manifest/visualization layer is refined.
- Active focus doc: docs/focus/manifest-visualization-refinement.md.
- Manifest schema is currently 0.2.0 with route inventory, public view descriptors, and compact cluster-layer stats.
- CIM Library local navigator is implemented in src/components/CimLibraryNav.astro and should stay aligned with the global navigator while remaining lower hierarchy.
- Paused cluster focus can be resumed from docs/focus/cluster-analysis-working-groups.md.
- Working-group labels must remain coarse and evidence-based; LLM-serving and full-stack-boundary cards are comparison sets, not lineage claims.
- Do not add coverage scores, ranking scores, quality scores, or trajectory_IR_relevance.

Session scope:
- Prefer one coherent batch over a tiny single edit when the user says to proceed.
- For manifest/visualization work, a reasonable batch can include manifest audit, exporter/contract updates, one route or project-summary visual refinement, CIM Library local navigator cleanup, docs updates, and smoke checks.
- For cluster work, first read docs/focus/cluster-analysis-working-groups.md; a reasonable batch can include 2-4 related investigation updates, the necessary source checks, data edits, docs count/status updates, and route smoke checks.
- For website/docs/paper work, a reasonable batch can include all files needed for one complete user-visible slice, plus the matching context updates.
- Stop early only when evidence is missing, a claim would become too speculative, or the next step needs a new product/research decision.

Good next steps depend on the requested focus:
- Active manifest/visualization work: read docs/focus/manifest-visualization-refinement.md, then audit scripts/export-atlas-manifest.mjs, public/cim-library.manifest.json, scripts/check-website-contract.mjs, src/components/TaxonomyAtlas.astro, src/pages/library.astro, src/pages/clusters/index.astro, and src/pages/projects/cim-library/index.astro as needed.
- Cluster work: resume from docs/focus/cluster-analysis-working-groups.md before editing src/data/clusters.json.
- Paper work: read docs/corpus-note-harness.md and docs/metadata-template.md only then.
- Website work: read docs/website-integration/README.md only then.
- Docs work: read docs/iteration-docs-playbook.md and docs/focus/README.md.

After substantial edits, run:
npm run qa
npm run validate
npm run export:atlas
npm run contract:website
npm run check
npm run build

Report changed files, context/docs decisions, evidence limits, and verification results.
```
