# Future Development Plan

## Current State

The repository currently contains 62 Markdown paper notes in `src/content/papers/`.

- 12 files are already valid Astro content entries with YAML frontmatter:
  - `accelcim.md`
  - `adap-cim.md`
  - `arctic.md`
  - `ares.md`
  - `autodcim.md`
  - `c4cam.md`
  - `cimflow.md`
  - `cim-mlc.md`
  - `cim-mxu.md`
  - `cim-prune.md`
  - `cim-tuner.md`
  - `turbo-charged-mapper.md`
- 50 files are raw long-form corpus notes without YAML frontmatter.
- The raw notes are valuable source material and should be preserved. Most follow the long corpus-note harness and include `## 12. Suggested metadata entry` with a fenced YAML block near the end.
- `npm run validate` currently fails on the next raw note, because Astro content entries require frontmatter.

The next development milestone is to convert the 50 remaining raw notes into schema-valid Astro paper entries without weakening the schema.

## Milestone 1 -- Normalize Raw Notes Into Content Entries

Goal: every file in `src/content/papers/` has valid frontmatter matching `src/content.config.ts`, a lowercase kebab-case filename, and a body that renders as a public corpus note.

Recommended workflow:

1. Inventory files into `structured` vs `raw`.
2. For each raw file, locate `## 12. Suggested metadata entry`.
3. Promote that fenced YAML block to frontmatter.
4. Normalize the filename to the `slug` value.
5. Remove the rendered `## 12. Suggested metadata entry` section from the public body after promoting it.
6. Remove obsolete generated `## 9. Relation to a value-trajectory CIM IR project` sections, then renumber comparison/final-takeaway sections.
7. Preserve the remaining public note body unless a section is malformed.
8. Fill missing schema fields conservatively with `unknown`, `[]`, or `null`.
9. Run `npm run validate`.
10. Run `npm run check`.
11. Run `npm run build`.

Do this in small batches. A good first batch is 5-10 files, then validate before continuing.

## Milestone 2 -- Harden Migration Tooling

After one manual batch proves the rules, add a local migration helper script.

Suggested script: `scripts/promote-raw-note.mjs`

Responsibilities:

- read one raw Markdown file;
- extract the fenced YAML block under `## 12. Suggested metadata entry`;
- validate required keys are present;
- normalize `slug`;
- prepend frontmatter;
- strip section 12 from the body;
- strip obsolete value-trajectory IR project sections and ignore `trajectory_IR_relevance`;
- write to `src/content/papers/<slug>.md`;
- refuse to overwrite unrelated files;
- optionally delete or archive the old raw filename after a successful rename.

Keep this script conservative. It should fail loudly when metadata is ambiguous instead of inventing values.

## Milestone 3 -- Content QA

Once all entries validate:

- scan for duplicate slugs and title collisions;
- scan for typo-like names such as `LearnCNM2Predic`, `MIREDOW`, `CIM-Prune`, `OpenACMv`, and `PIMeva`;
- compare the final corpus count against the legacy atlas count of 62 records;
- check that all Axis A and Axis B values are from `src/data/taxonomy.json`;
- verify links and artifact status for high-priority entries only.

## Milestone 4 -- UI and Corpus Navigation

Only after content compiles:

- improve individual paper page layout for long notes;
- add tag pages if useful;
- add Axis A / Axis B detail pages if useful;
- add a migration-status page or source provenance badges if the public site needs them;
- consider adding search index generation for static hosting.

## Milestone 5 -- Research Extensions

Future research-facing improvements:

- add explicit source provenance fields for paper, artifact, docs, and checked date;
- add a controlled vocabulary for `integration_roles`;
- add comparison pages for clusters such as ONNX-to-ISA stacks, UPMEM runtime stacks, macro generators, and simulator/cost-model frameworks.

## Non-Goals For Now

- Do not add PDF hosting.
- Do not add a database or backend service.
- Do not weaken the content schema to accept raw notes permanently.
- Do not introduce a quality score or ranking model.
- Do not add coverage scores or trajectory-IR relevance metadata unless the project direction changes.
- Do not automatically rewrite scholarly prose unless the user explicitly asks for editorial cleanup.
