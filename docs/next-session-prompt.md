# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

This is a static Astro CIM compiler/IR paper library. Read AGENTS.md first, then CODEX_HANDOFF.md, docs/future-development-plan.md, docs/corpus-note-harness.md, docs/metadata-template.md, and docs/legacy-source-map.md.

Current state:
- src/content/papers contains 62 Markdown notes.
- All 62 notes are now structured Astro content entries with YAML frontmatter.
- No raw long-form corpus notes remain.
- The active schema does not use coverage scores or trajectory-IR relevance metadata. Do not reintroduce obsolete generated fields such as coverage or trajectory_IR_relevance.
- The raw-note migration milestone is complete.
- npm run validate passes with "Validated 62 paper metadata file(s)."
- npm run check passes with "0 errors, 0 warnings, 0 hints."
- npm run build passes and builds 64 pages into dist/.
- On case-insensitive filesystems, Git may show case-only filename normalizations as modifications under old tracked names until staging; trust the on-disk lowercase kebab-case filenames.

Task:
Continue from migration into content QA and context hardening.

Recommended QA pass:
1. Inventory the corpus and confirm there are 62 structured files and 0 raw files.
2. Scan for duplicate slugs and duplicate or near-duplicate titles.
3. Scan for lingering generated artifacts such as "Suggested metadata entry", trajectory_IR_relevance, and value-trajectory project prose.
4. Check typo-like paper names and filenames, especially LearnCNM2Predic, MIREDOW, CIM-Prune, OpenACMv, PIMeva, and polyhedral-based-compilation-framework-for-in-memoryneural-network-accelerators.md.
5. Review entries with conservative migration values such as year: null, blank artifact.url, or reproducibility_level: unknown.
6. Spot-check high-priority artifact URLs before changing them. Use official paper/artifact sources first.
7. Keep edits evidence-based and small. Do not invent publication facts, artifact links, or rankings.
8. Run npm run validate after metadata edits.
9. Run npm run check after validation passes.
10. Run npm run build only after check passes.

Possible next implementation task:
- Add or improve a small local QA script that reports duplicate slugs, duplicate titles, null years, unknown reproducibility levels, blank artifact URLs, and lingering generated-note markers.
- Keep this as a diagnostic helper; do not weaken src/content.config.ts.

Report:
- QA findings and files changed;
- any conservative fields reviewed or corrected;
- validation/check/build results;
- recommended next content or UI milestone.
```
