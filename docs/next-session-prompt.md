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
- The `/library/` atlas milestone is substantially implemented:
  - the atlas is the first main section on `/library/`;
  - the Axis A x Axis B graph is larger and uses deterministic node spreading;
  - graph nodes support hover/focus summaries and click-to-select behavior;
  - the selected-paper panel has a descriptive axis coverage cloud derived from active metadata, not a score;
  - filters, filtered paper picker, and reset controls are wired;
  - taxonomy explanation is short and appears after the graph;
  - mobile uses stacked controls and horizontal graph scroll.
- npm run validate passes with "Validated 62 paper metadata file(s)."
- npm run check passes with "0 errors, 0 warnings, 0 hints."
- npm run build passes and builds 64 pages into dist/.

Product priority:
Do one final atlas QA/polish pass, then move to individual paper detail page refinement if the atlas remains solid. Keep the public metadata contract descriptive. Do not add coverage/ranking/trajectory_IR_relevance fields.

Task:
Continue from the current `/library/` atlas implementation using docs/future-development-plan.md. Focus on remaining polish and verification, not rebuilding the atlas from scratch.

Reference:
- Use src/content/legacy/cim_compiler_ir_taxonomy_visualization.html only as a behavioral reference for any remaining graph-interaction refinements.
- Use current frontmatter and src/data/taxonomy.json as the source of truth.
- Do not copy the legacy taxonomy explanation wholesale. The taxonomy explanation in Astro should be clear, short, and easy to read.
- Keep the derived axis coverage cloud descriptive. It must not imply numeric coverage, ranking, or relevance.

Recommended implementation pass:
1. Inspect src/components/TaxonomyAtlas.astro, src/pages/library.astro, src/styles/global.css, docs/future-development-plan.md, and CODEX_HANDOFF.md.
2. Run npm run validate, npm run check, and npm run build before or after any edits to confirm the baseline is still green.
3. Browser-test `/library/` at desktop and mobile widths:
   - all 62 nodes render;
   - hover/focus summary placement is sane;
   - click selection updates the right panel;
   - filtered paper picker selection updates the right panel;
   - reset restores all 62 nodes;
   - right-panel cloud is readable for dense and sparse metadata;
   - mobile graph horizontal scroll is understandable and controls do not overlap.
4. If needed, make small atlas polish changes:
   - add a subtle mobile horizontal-scroll affordance for the graph;
   - refine dense cluster interaction with a low-risk selected-cell or zoom affordance;
   - improve keyboard focus order or visible focus styling;
   - tighten selected-panel/cloud typography for long titles or sparse metadata.
5. Avoid broad new functionality unless it clearly improves the atlas flow. Role-style matrix, compact paper cards, tag pages, and search-index work are optional follow-ups.
6. If the atlas passes QA without substantial issues, start Milestone 3 paper page polish:
   - improve long-note reading layout;
   - tighten typography and metadata scanability;
   - keep the site static and schema unchanged.
7. Do not weaken src/content.config.ts and do not add coverage/ranking/trajectory_IR_relevance fields.
8. Re-run npm run validate, npm run check, and npm run build after edits.

Report:
- Whether atlas QA passed and what was changed;
- Browser viewport checks and build/check results;
- Any remaining atlas shortcomings;
- Whether paper-page polish was started and, if so, which files changed.
```
