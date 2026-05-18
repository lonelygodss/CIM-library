# Future Development Plan

## Current State

The repository currently contains 62 Markdown paper notes in `src/content/papers/`.

- 27 files are already valid Astro content entries with YAML frontmatter:
  - `accelcim.md`
  - `adap-cim.md`
  - `arctic.md`
  - `ares.md`
  - `autodcim.md`
  - `c4cam.md`
  - `cima-com.md`
  - `cimflow.md`
  - `cim-mlc.md`
  - `cim-mxu.md`
  - `cim-prune.md`
  - `cim-tuner.md`
  - `ciminus.md`
  - `cimloop.md`
  - `cinm.md`
  - `clear.md`
  - `cmswitch.md`
  - `comonm.md`
  - `count2multiply.md`
  - `dappa.md`
  - `declarative-memory-services.md`
  - `dypim.md`
  - `efficient-in-memory-acceleration-of-sparse-block-diagonal-llms.md`
  - `exploiting-the-memory-compute-coupling-feature-for-cim-accelerator-design-optimization.md`
  - `geniex.md`
  - `gibbon.md`
  - `turbo-charged-mapper.md`
- 35 files are raw long-form corpus notes without YAML frontmatter.
- The raw notes are valuable source material and should be preserved. Most follow the long corpus-note harness and include `## 12. Suggested metadata entry` with a fenced YAML block near the end.
- `npm run validate` currently fails on the next raw note, because Astro content entries require frontmatter.

The next development milestone is to convert the 35 remaining raw notes into schema-valid Astro paper entries without weakening the schema.

## Milestone 1 -- Normalize Raw Notes Into Content Entries

Goal: every file in `src/content/papers/` has valid frontmatter matching `src/content.config.ts`, a lowercase kebab-case filename, and a body that renders as a public corpus note.

Recommended workflow:

1. Inventory files into `structured` vs `raw`.
2. For each raw file, locate `## 12. Suggested metadata entry`.
3. Run `node scripts/promote-raw-note.mjs --dry-run <files...>` and inspect the planned filenames before writing.
4. Promote that fenced YAML block to frontmatter with `scripts/promote-raw-note.mjs`.
5. Normalize the filename to the schema-valid lowercase kebab-case slug.
6. Inspect helper warnings. The helper conservatively blanks nonnumeric years, blanks non-URL artifact fields, and maps unsupported reproducibility labels to `unknown`; replace those only when the note already contains a checked, schema-valid fact.
7. On case-insensitive filesystems, Git may show case-only renames as modifications under the old tracked names until staging. Trust the on-disk filenames, then use Git's rename-aware staging later.
8. Remove the rendered `## 12. Suggested metadata entry` section from the public body after promoting it.
9. Remove obsolete generated `## 9. Relation to a value-trajectory CIM IR project` sections, then renumber comparison/final-takeaway sections.
10. Preserve the remaining public note body unless a section is malformed.
11. Fill missing schema fields conservatively with `unknown`, `[]`, or `null`.
12. Run a targeted batch metadata check if global validation is still expected to stop on the next raw note.
13. Run `npm run validate`.
14. Run `npm run check` only if validation reaches the expected next raw-note blocker or fully passes. Astro's content glob order can surface a different remaining raw note than the sorted validator.
15. Run `npm run build` only when `npm run check` passes.

Do this in small batches. A good batch size is 5 files while the helper is still being refined, or 8-10 files after dry-run and warning patterns are predictable.

Batch-local verification snippet:

```bash
node - <migrated-files...> <<'NODE'
const fs = require('fs');
const path = require('path');
const taxonomy = JSON.parse(fs.readFileSync('src/data/taxonomy.json', 'utf8'));
const familyCodes = new Set(Object.keys(taxonomy.families));
const middleCodes = new Set(Object.keys(taxonomy.middles));
const files = process.argv.slice(2);
function frontmatter(markdown, file) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`${file}: missing YAML frontmatter block`);
  return match[1];
}
function getScalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') : '';
}
function getBlock(fm, key) {
  const match = fm.match(new RegExp(`^${key}:\\n([\\s\\S]*?)(?=^[A-Za-z0-9_]+:|\\Z)`, 'm'));
  return match ? match[1] : '';
}
function getInlineList(fm, key) {
  const match = fm.match(new RegExp(`^${key}:\\s*\\[(.*?)\\]`, 'm'));
  return match ? match[1].split(',').map((x) => x.trim()).filter(Boolean) : [];
}
for (const file of files) {
  const fm = frontmatter(fs.readFileSync(path.join('src/content/papers', file), 'utf8'), file);
  for (const key of ['slug', 'title', 'summary', 'axis_A', 'axis_B']) {
    if (!new RegExp(`^${key}:`, 'm').test(fm)) throw new Error(`${file}: missing required key ${key}`);
  }
  const slug = getScalar(fm, 'slug');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`${file}: invalid slug ${slug}`);
  const primary = getBlock(fm, 'axis_A').match(/^\\s+primary:\\s*(A\\d)/m)?.[1];
  if (!familyCodes.has(primary)) throw new Error(`${file}: invalid axis_A.primary`);
  for (const code of getInlineList(fm, 'axis_B')) {
    if (!middleCodes.has(code)) throw new Error(`${file}: invalid axis_B ${code}`);
  }
  console.log(`${file}: ok`);
}
NODE
```

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
- conservatively coerce schema-sensitive fields: `year` must be blank or an integer, `artifact.url` must be blank or an HTTP(S) URL, and `reproducibility_level` must be one of `high`, `medium`, `low`, or `unknown`;
- print warnings for any conservative coercion so the batch owner can decide whether checked evidence supports a manual replacement;
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
