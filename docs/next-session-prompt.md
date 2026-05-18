# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

This is a static Astro CIM compiler/IR paper library. Read AGENTS.md first, then CODEX_HANDOFF.md, docs/future-development-plan.md, docs/legacy-source-map.md, docs/corpus-note-harness.md, and docs/metadata-template.md.

Current state:
- src/content/papers contains 62 Markdown notes.
- All 62 notes are structured Astro content entries with YAML frontmatter.
- No raw long-form corpus notes remain.
- The active schema does not use coverage scores or trajectory-IR relevance metadata. Do not reintroduce obsolete generated fields such as coverage or trajectory_IR_relevance.
- The raw-note migration milestone is complete.
- Content QA is substantially green: 62 structured files, no duplicate slugs/titles, no raw files, no lingering generated metadata sections, and no known typo-watch hits.
- npm run validate passes with "Validated 62 paper metadata file(s)."
- npm run check passes with "0 errors, 0 warnings, 0 hints."
- npm run build passes and builds 64 pages into dist/.

Product priority:
Prioritize the `/library/` taxonomy atlas graph before individual paper detail page refinement. The current Astro atlas has valid data plumbing, but its sizing, hover interaction, click selection, and right-panel visualization need to reach the quality of the legacy standalone HTML draft.

Task:
Improve the `/library/` atlas experience using docs/future-development-plan.md.

Reference:
- Use src/content/legacy/cim_compiler_ir_taxonomy_visualization.html as the benchmark for graph interaction behavior: node hover summary, node click selection, and selected-paper right-panel visualization.
- Use current frontmatter and src/data/taxonomy.json as the source of truth.
- Do not copy the legacy taxonomy explanation wholesale. The taxonomy explanation in Astro should be clear, short, and easy to read.
- Replace the legacy radar graph with an axis coverage cloud graph derived from active descriptive metadata.

Recommended implementation pass:
1. Inspect src/components/TaxonomyAtlas.astro, src/pages/library.astro, src/styles/global.css, docs/future-development-plan.md, and the legacy HTML.
2. Improve atlas sizing and layout so the Axis A x Axis B visualization is large, legible, and useful on desktop.
3. Implement node hover behavior: a floating summary box near the cursor with title/display name, year/venue when available, Axis A/B placement, and a short summary.
4. Implement node click behavior: clicking a paper selects it and updates the right panel.
5. Replace the legacy radar graph with a right-panel axis coverage cloud graph for the selected paper. It should show Axis A, Axis B, Axis C first-class objects, Axis D rewrite objects, and optionally technology/workload terms without implying a score.
6. Keep taxonomy explanation simple and readable. Avoid adding broad matrix/list/filter functionality until the core graph interaction is high quality.
7. Keep paper detail page polish deferred unless it is needed for the atlas flow.
8. Do not weaken src/content.config.ts and do not add coverage/ranking/trajectory_IR_relevance fields.
9. Run npm run validate, npm run check, and npm run build.
10. Use browser screenshots at desktop and mobile widths to verify graph sizing, nonblank rendering, hover summary placement, click selection, right-panel cloud readability, and no overlapping text.

Report:
- Atlas visualization changes and files changed;
- legacy graph behaviors recovered or intentionally skipped;
- browser viewport checks and build/check results;
- remaining atlas shortcomings before paper-page polish.
```
