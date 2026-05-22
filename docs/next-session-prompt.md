# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

This is a static Astro CIM compiler/IR paper library. Read AGENTS.md first, then docs/future-development-plan.md, docs/corpus-note-harness.md, and docs/metadata-template.md.

Current state:
- src/content/papers contains 62 schema-valid Markdown paper entries; no raw corpus notes remain.
- / is the primary public atlas entry; /library/ renders the same atlas for compatibility.
- /papers/[slug]/ renders individual long-form corpus notes.
- The public metadata contract is descriptive. Do not add coverage scores, ranking scores, or trajectory_IR_relevance.
- Axis C/D normalization is render-time only through src/lib/axisNormalization.ts and src/data/taxonomy.json; do not weaken src/content.config.ts.
- Detail pages include provenance/source affordances, normalized Axis C/D chips, context chips, note outline, scan metadata, and Markdown math display cleanup through src/lib/rehypeMathDelimiters.mjs.
- The current atlas/detail-page base is stable enough. Future work should shift toward cluster analysis and visualization rather than more minor refinements to completed views.
- npm run qa, npm run validate, npm run check, and npm run build are currently green.

Progress from the latest iteration:
- Completed the Axis C/D audit pass and tightened instruction-stream normalization so bit-stream terms no longer false-match instruction streams.
- Rechecked pim-eda provenance; no standalone canonical suite paper was found, so links.paper remains intentionally blank.
- Preserved links.artifact and artifact.url alignment; artifact URL-only entries and link/url disagreements remain at zero.
- Added dependency-free rehype formatting for TeX-style inline/display formulas.
- Audited raw technology/workload terms and deferred controlled vocabularies because the terms are useful but noisy.
- Removed stale handoff references and redundant math-formatting scaffolding.
- Updated docs/README/AGENTS context to reflect the completed migration and the next cluster-analysis direction.

New future goal:
- Build a cluster-analysis and visualization layer, likely as a new static page rather than more atlas polish.
- Explain clusters of works by shared stack objects, rewrite styles, technologies, workloads, artifacts, and source/provenance patterns.
- Add a coarse academic working-group layer where evidence supports it: repeated author groups, lab/project names, repository owners, or visible publication families.
- Do not build a detailed affiliation graph, author social network, or fine-grained collaboration map. The goal is vague orientation about working groups and occasional cooperation, not bibliometric authority.

Good next steps:
1. Discuss and choose the first cluster-page shape: card list, graph, or hybrid.
2. Decide where cluster metadata should live: new src/data/clusters.json, derived data, or optional annotations.
3. Decide whether academic working groups should be manually curated labels or inferred cautiously from authors_or_group and source/project evidence.
4. Prototype one or two high-confidence clusters before generalizing the visualization.
5. Keep existing atlas/detail-page maintenance incremental and secondary.

Implementation guidance:
- Use current frontmatter and src/data/taxonomy.json as source of truth.
- Keep the site static and schema-compatible unless there is a clear reason to change the schema.
- Keep cluster/group claims descriptive and evidence-based; mark uncertain groupings as tentative.
- Keep legacy files intact unless explicitly asked to archive or rewrite them.
- Re-run npm run qa, npm run validate, npm run check, and npm run build after edits.

Report:
- What cluster, visualization, provenance, or content changes were made;
- Browser viewport checks if UI changed;
- qa/validate/check/build results;
- Remaining follow-up items.
```
