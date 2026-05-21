# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

This is a static Astro CIM compiler/IR paper library. Read AGENTS.md first, then CODEX_HANDOFF.md, docs/future-development-plan.md, docs/corpus-note-harness.md, and docs/metadata-template.md.

Current state:
- src/content/papers contains 62 schema-valid Markdown paper entries.
- The raw-note migration milestone is complete; no raw corpus notes remain.
- The active schema is descriptive. Do not add coverage scores, ranking scores, or trajectory_IR_relevance.
- /library/ is the primary public atlas route.
- /papers/[slug]/ renders individual long-form paper notes.
- npm run validate, npm run check, and npm run build were last known green.

Completed focus:
- The /library/ atlas core is substantially done:
  - large Axis A x Axis B graph;
  - deterministic node spreading;
  - hover/focus summaries;
  - click and picker selection;
  - reset and basic filters;
  - selected-paper Axis A x Axis B coverage cloud rendered on the atlas background;
  - right panel prioritizes Axis C first-class objects and Axis D rewrite objects;
  - short taxonomy explanation after the graph;
  - responsive layout and mobile graph scroll.
- Do not rebuild the atlas from scratch.

Next focus:
1. Improve individual paper detail pages:
   - better long-note reading layout;
   - easier metadata scanning;
   - clearer Axis C / Axis D presentation;
   - source/provenance affordances if useful;
   - robust mobile layout for long titles, tables, code blocks, and sidebars.
2. Then improve detail-driven atlas scoping/filtering:
   - future data refinement: normalize Axis C first-class objects and Axis D rewrite objects into controlled vocabularies, then add an atlas layout switch between the current Axis A x Axis B view and a normalized Axis C x Axis D view;
   - normalize technology and workload metadata into separate clean controlled facets before adding dedicated selectors;
   - selected-cell or scoped-cluster views if they help dense areas;
   - preserve atlas state when navigating between atlas and detail pages if practical.

Implementation guidance:
- Use current frontmatter and src/data/taxonomy.json as source of truth.
- Keep the public metadata contract descriptive.
- Keep legacy files intact unless explicitly asked to archive or rewrite them.
- Avoid broad new functionality unless it clearly helps detail-page reading or atlas scoping.
- Do not weaken src/content.config.ts.
- Re-run npm run validate, npm run check, and npm run build after edits.

Report:
- What detail-page or atlas-scoping changes were made;
- Browser viewport checks if UI changed;
- validate/check/build results;
- Remaining follow-up items.
```
