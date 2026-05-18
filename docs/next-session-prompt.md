# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

This is a static Astro CIM compiler/IR paper library. Read AGENTS.md first, then CODEX_HANDOFF.md, docs/future-development-plan.md, docs/corpus-note-harness.md, docs/metadata-template.md, and docs/legacy-source-map.md.

Current state:
- src/content/papers contains 62 Markdown notes.
- 12 notes are structured Astro content entries:
  - accelcim.md
  - adap-cim.md
  - arctic.md
  - ares.md
  - autodcim.md
  - c4cam.md
  - cimflow.md
  - cim-mlc.md
  - cim-mxu.md
  - cim-prune.md
  - cim-tuner.md
  - turbo-charged-mapper.md
- 50 notes remain raw long-form corpus notes. They generally include "## 12. Suggested metadata entry" with a fenced YAML block.
- The active schema does not use coverage scores or trajectory-IR relevance metadata. Ignore obsolete generated fields such as coverage and trajectory_IR_relevance.
- During migration, remove generated "## 9. Relation to a value-trajectory CIM IR project" sections and renumber comparison/final-takeaway sections.
- The latest migrated batch was C4CAM.md, CIM-MLC.md, CIM-MXU.md, CIM-Prune.md, and CIM-Tuner.md, normalized on disk to lowercase kebab-case filenames.
- npm run validate currently fails at CIMA_COM.md because remaining raw notes lack YAML frontmatter. Do not weaken the schema to hide this.
- npm run check currently fails at CIMLoop.md for the same remaining-raw-note reason. Do not run npm run build until check passes.

Task:
Continue the migration by converting the next small batch of raw notes into valid Astro content entries.

Recommended next batch:
- CIMA_COM.md
- CIMLoop.md
- CIMinus.md
- CINM.md
- CLEAR.md

Requirements:
1. Inventory raw vs structured files.
2. For each selected note, promote the YAML under "## 12. Suggested metadata entry" to frontmatter.
3. Normalize the filename to the schema-valid lowercase kebab-case slug.
4. Remove the rendered section 12 from the public body after promoting it.
5. Remove obsolete generated value-trajectory IR project sections and renumber the remaining comparison/final-takeaway sections.
6. Preserve the remaining public corpus-note body unless malformed.
7. Fill missing schema fields conservatively and explicitly; do not invent research facts.
8. Run npm run validate after the batch.
9. If validation fails due to migrated batch files, fix the batch before continuing. If it fails on the next raw note, report that as the expected remaining migration blocker.
10. Run npm run check only if validation reaches the same expected next-raw-note blocker or fully passes. Run npm run build only if check passes.
11. Update the context and I'll start a new session with prompts provided by you with the updated context.

Prefer scripts/promote-raw-note.mjs for this mechanical migration after inspecting representative raw notes. Use apply_patch for manual fixes.

Report:
- which files were migrated;
- any metadata fields filled conservatively;
- validation/check/build results;
- remaining raw-note count;
- recommended next batch.
```
