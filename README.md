# Paper Library Draft

Static Astro scaffold for a CIM compiler/IR paper corpus.

## Mental model

```text
Paper library
├── taxonomy vocabulary in src/data/taxonomy.json
├── one Markdown file per paper in src/content/papers/
├── one atlas page at /library/
└── static hosting on a personal website
```

Paper metadata lives in each Markdown file's YAML frontmatter. The Markdown body is the long public corpus note.

## Important paths

```text
src/content/papers/          paper notes with structured frontmatter
src/data/taxonomy.json       Axis A/B vocabulary and supporting terms
src/pages/library.astro      atlas route
src/pages/papers/[slug].astro dynamic paper route
src/components/TaxonomyAtlas.astro interactive atlas + selected-paper panel
scripts/validate-library.mjs frontmatter/reference checks
scripts/scaffold-paper.mjs   create a new paper stub
AGENTS.md                    project instructions for future Codex runs
docs/corpus-note-harness.md  paper-note conversion harness
docs/legacy-source-map.md    where to recover legacy atlas/source details
CODEX_HANDOFF.md             concise implementation notes
```

## Run locally

```bash
npm install
npm run validate
npm run dev
```

Build for static hosting:

```bash
npm run build
```

## Add papers

1. Put one `.md` file in `src/content/papers/`.
2. Keep the YAML frontmatter fields in the sample files.
3. Put the complete paper note below the frontmatter.
4. Run `npm run validate` before committing.

Create a blank stub:

```bash
npm run new:paper -- cim-mlc "CIM-MLC"
```

For full note conversion, use `docs/corpus-note-harness.md`. Legacy seed material is intentionally preserved in `src/content/legacy/`; `docs/legacy-source-map.md` explains which file to consult for compact notes, original overview text, and old atlas behavior.

If raw notes have just been imported, use `docs/future-development-plan.md` before running full build checks. Raw notes must be promoted to frontmatter-backed content entries before `npm run validate` can pass.

## Visualization behavior

The atlas uses the existing draft's Axis A × Axis B dot-grid idea. The selected-paper panel shows summary metadata, Axis B styles, first-class objects, rewrite objects, and a link to the full note. The active schema does not use coverage scores or ranking metrics.
