# Paper Library Draft

Static Astro scaffold for a CIM compiler/IR paper corpus.

## Mental model

```text
Paper library
├── taxonomy vocabulary in src/data/taxonomy.json
├── one Markdown file per paper in src/content/papers/
├── public atlas pages at / and /library/
└── static hosting on a personal website
```

Paper metadata lives in each Markdown file's YAML frontmatter. The Markdown body is the long public corpus note.

## Important paths

```text
src/content/papers/          paper notes with structured frontmatter
src/data/taxonomy.json       Axis A/B plus object/rewrite vocabulary
src/pages/index.astro        primary atlas route
src/pages/library.astro      compatibility atlas route
src/pages/papers/[slug].astro dynamic paper route
src/components/TaxonomyAtlas.astro interactive atlas + selected-paper panel
src/lib/axisNormalization.ts render-time Axis C/D normalization
src/lib/rehypeMathDelimiters.mjs note math display cleanup
scripts/validate-library.mjs frontmatter/reference checks
scripts/scaffold-paper.mjs   create a new paper stub
AGENTS.md                    project instructions for future Codex runs
docs/corpus-note-harness.md  paper-note conversion harness
docs/legacy-source-map.md    where to recover legacy atlas/source details
docs/next-session-prompt.md  concise restart context
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

If raw notes are imported in the future, use `docs/future-development-plan.md` before running full build checks. Raw notes must be promoted to frontmatter-backed content entries before `npm run validate` can pass.

## Visualization behavior

The atlas supports Axis A x Axis B and normalized Axis C x Axis D views. The selected-paper panel and paper detail pages expose summary metadata, provenance, normalized object/rewrite categories, context facets, and links into scoped atlas views. The active schema does not use coverage scores or ranking metrics.

The next planned visualization direction is a separate cluster-analysis layer: clusters of related works, coarse working-group labels where evidence supports them, and links back into scoped atlas/detail views. This should stay static and descriptive, not a detailed author-affiliation network.
