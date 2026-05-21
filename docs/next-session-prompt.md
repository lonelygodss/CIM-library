# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

This is a static Astro CIM compiler/IR paper library. Read AGENTS.md first, then CODEX_HANDOFF.md, docs/future-development-plan.md, docs/corpus-note-harness.md, and docs/metadata-template.md.

Current state:
- src/content/papers contains 62 schema-valid Markdown paper entries.
- The raw-note migration milestone is complete; no raw corpus notes remain.
- The active schema is descriptive. Do not add coverage scores, ranking scores, or trajectory_IR_relevance.
- / is the primary public atlas entry and renders the atlas directly; /library/ still renders the same atlas.
- /papers/[slug]/ renders individual long-form paper notes.
- npm run validate, npm run check, and npm run build are currently green.

Recently completed:
- Restored missing section 10 final-takeaway bullets for AccelCIM, AdaP-CIM, ARCTIC, ARES, and AutoDCIM from ../CIM-stack-corpus/notes/.
- Reworked navigation:
  - global fixed nav only shows CIM Library;
  - page-local Atlas/Taxonomy links remain on the main page;
  - smooth scrolling was removed, so anchor navigation jumps directly.
- Reworked the paper detail page:
  - compact, low-key title card;
  - taxonomy/object overview above the note;
  - left note outline is compact, independently scrollable, and uses expandable groups only when subsections exist;
  - right metadata panel remains independently scrollable;
  - note body is the visual focus.
- Improved atlas presentation:
  - unselected nodes are visually lighter;
  - zero-match filter states no longer carry a stale selected paper in the URL or detail panel.
- Started the combined detail-page / atlas-scoping iteration:
  - split the old combined technology/workload filter into separate Technology and Workload selectors;
  - URL state now uses tech= and workload=;
  - old target=technology:... and target=workload:... links are still hydrated and normalized.
- Updated docs/future-development-plan.md so the next focus is one combined “Detail Pages and Atlas Scoping” milestone.

Next focus:
Treat detail-page improvement and atlas scoping as one connected workflow. The detail page is where users inspect evidence and vocabulary; the atlas is where that vocabulary becomes navigable.

Good next steps:
1. Normalize Axis C first-class objects and Axis D rewrite objects into controlled vocabulary fields, without weakening the current schema.
2. Use those normalized Axis C/D fields on both detail pages and atlas filtering.
3. Add an atlas layout switch between the current Axis A x Axis B view and a normalized Axis C x Axis D view.
4. Improve source/provenance affordances on detail pages if they help public trust.
5. Audit rendered note content for Markdown display edge cases, formula/math notation, escaped symbols, and table/code rendering.
6. Keep improving mobile behavior for atlas/detail transitions, long titles, tables, code blocks, and metadata panels.

Implementation guidance:
- Use current frontmatter and src/data/taxonomy.json as source of truth.
- Keep the public metadata contract descriptive.
- Keep legacy files intact unless explicitly asked to archive or rewrite them.
- Prefer incremental changes over rebuilding the atlas.
- Do not weaken src/content.config.ts.
- Re-run npm run validate, npm run check, and npm run build after edits.

Report:
- What detail-page or atlas-scoping changes were made;
- Browser viewport checks if UI changed;
- validate/check/build results;
- Remaining follow-up items.
```
