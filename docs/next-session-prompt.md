# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

This is a static Astro CIM compiler/IR paper library. Read AGENTS.md first, then CODEX_HANDOFF.md, docs/future-development-plan.md, docs/corpus-note-harness.md, docs/metadata-template.md, and docs/legacy-source-map.md.

Current state:
- src/content/papers contains 62 Markdown notes.
- 27 notes are structured Astro content entries:
  - accelcim.md
  - adap-cim.md
  - arctic.md
  - ares.md
  - autodcim.md
  - c4cam.md
  - cima-com.md
  - cimflow.md
  - cim-mlc.md
  - cim-mxu.md
  - cim-prune.md
  - cim-tuner.md
  - cimloop.md
  - ciminus.md
  - cinm.md
  - clear.md
  - cmswitch.md
  - comonm.md
  - count2multiply.md
  - dappa.md
  - declarative-memory-services.md
  - dypim.md
  - efficient-in-memory-acceleration-of-sparse-block-diagonal-llms.md
  - exploiting-the-memory-compute-coupling-feature-for-cim-accelerator-design-optimization.md
  - geniex.md
  - gibbon.md
  - turbo-charged-mapper.md
- 35 notes remain raw long-form corpus notes. They generally include "## 12. Suggested metadata entry" with a fenced YAML block.
- The active schema does not use coverage scores or trajectory-IR relevance metadata. Ignore obsolete generated fields such as coverage and trajectory_IR_relevance.
- During migration, remove generated "## 9. Relation to a value-trajectory CIM IR project" sections and renumber comparison/final-takeaway sections.
- The latest migrated batch was CMSwitch.md, CoMoNM.md, Count2Multiply.md, DaPPA.md, Declarative Memory Services.md, DyPIM.md, Efficient In-Memory Acceleration of Sparse Block Diagonal LLMs.md, Exploiting the Memory-Compute-Coupling Feature for CIM Accelerator Design Optimization.md, GENIEx.md, and Gibbon.md, normalized on disk to lowercase kebab-case filenames.
- npm run validate currently fails at HARMONI.md because remaining raw notes lack YAML frontmatter. Do not weaken the schema to hide this.
- npm run check currently fails at Hermes.md for the same remaining-raw-note reason. Astro's glob order can differ from the validator's sorted order. Do not run npm run build until check passes.

Task:
Continue the migration by converting the next small batch of raw notes into valid Astro content entries.

Recommended next batch:
- HARMONI.md
- HASTILY.md
- Hermes.md
- Hybrid PIM for attention-free LLM.md
- LearnCNM2Predic.md
- MIREDOW.md
- NAX.md
- NS-Cache.md
- NeuroSIM.md
- OpenACMv.md

Requirements:
1. Inventory raw vs structured files.
2. Run `node scripts/promote-raw-note.mjs --dry-run <files...>` and inspect planned lowercase filenames.
3. For each selected note, promote the YAML under "## 12. Suggested metadata entry" to frontmatter, preferably using `scripts/promote-raw-note.mjs`.
4. Inspect helper warnings. The helper blanks nonnumeric years, blanks non-HTTP(S) artifact URLs, and maps unsupported reproducibility labels to `unknown`; restore a schema-valid value only when checked evidence is already present in the note.
5. Normalize the filename to the schema-valid lowercase kebab-case slug. On case-insensitive filesystems, Git may report case-only renames as modifications until staging; trust the on-disk filename.
6. Remove the rendered section 12 from the public body after promoting it.
7. Remove obsolete generated value-trajectory IR project sections and renumber the remaining comparison/final-takeaway sections.
8. Preserve the remaining public corpus-note body unless malformed.
9. Fill missing schema fields conservatively and explicitly; do not invent research facts.
10. Run a targeted batch metadata check if global validation is expected to stop on the next raw note.
11. Run npm run validate after the batch.
12. If validation fails due to migrated batch files, fix the batch before continuing. If it fails on the next raw note, report that as the expected remaining migration blocker.
13. Run npm run check only if validation reaches the expected next-raw-note blocker or fully passes. Astro's glob order can differ from the validator's sorted order, so the check blocker may be a different remaining raw note. Run npm run build only if check passes.

Prefer scripts/promote-raw-note.mjs for this mechanical migration after inspecting representative raw notes. Use apply_patch for manual fixes. If the helper warnings are predictable, a 10-file batch is reasonable; otherwise split the batch at 5 files.

If you think it's stable enough, try to migrate all remaining notes in the next session.

Report:
- which files were migrated;
- any metadata fields filled conservatively;
- validation/check/build results;
- remaining raw-note count;
- recommended next batch.
```
