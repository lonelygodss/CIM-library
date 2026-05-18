# Future Development Plan

## Current State

The repository contains 62 Markdown paper notes in `src/content/papers/`, and all 62 are now valid Astro content entries with YAML frontmatter.

The raw-note migration milestone is complete:

- `npm run validate` passes with `Validated 62 paper metadata file(s).`
- `npm run check` passes with `0 errors, 0 warnings, 0 hints`.
- `npm run build` passes and builds 64 static pages into `dist/`.
- No raw long-form notes remain in `src/content/papers/`.

The migration helper `scripts/promote-raw-note.mjs` remains useful for any future imported notes. It promotes the fenced YAML block under `## 12. Suggested metadata entry`, strips obsolete generated migration-only sections, normalizes filenames to slugs, and conservatively coerces schema-sensitive fields.

## Milestone 1 -- Content QA

Goal: make the now-structured corpus consistent, readable, and trustworthy without changing the descriptive metadata contract.

Recommended checks:

1. Scan for duplicate slugs and title collisions.
2. Compare the final corpus count against the legacy atlas count of 62 records.
3. Check typo-like titles and names such as `LearnCNM2Predic`, `MIREDOW`, `CIM-Prune`, `OpenACMv`, `PIMeva`, and the long `In-MemoryNeural` filename.
4. Verify all Axis A and Axis B values are from `src/data/taxonomy.json`.
5. Spot-check high-priority paper and artifact URLs.
6. Review entries whose migration helper blanked nonnumeric years, blanked non-HTTP(S) artifact values, or mapped unsupported reproducibility labels to `unknown`.
7. Search for lingering generated-note artifacts such as `Suggested metadata entry`, `trajectory_IR_relevance`, and value-trajectory project prose.
8. Run `npm run validate`, `npm run check`, and `npm run build` after QA edits.

Keep QA changes small and evidence-based. Do not invent missing publication facts or artifact links.

## Milestone 2 -- Paper Page Polish

Only after content QA:

- improve individual paper page layout for long notes;
- tighten typography and spacing for corpus-note sections;
- add source/provenance affordances if useful;
- make paper metadata easier to scan on mobile;
- keep the site static and suitable for personal hosting.

## Milestone 3 -- Atlas and Corpus Navigation

After the paper pages are stable:

- refine `src/components/TaxonomyAtlas.astro` interactions and selected-paper panel behavior;
- add tag pages if useful;
- add Axis A / Axis B detail pages if useful;
- consider a static search index;
- consider source provenance badges if they improve public trust.

## Milestone 4 -- Research Extensions

Future research-facing improvements:

- add explicit source provenance fields for paper, artifact, docs, and checked date;
- add a controlled vocabulary for `integration_roles`;
- add comparison pages for clusters such as ONNX-to-ISA stacks, UPMEM runtime stacks, macro generators, and simulator/cost-model frameworks.

## Migration Helper Notes

For future imports, use this workflow:

1. Create a stub with `npm run new:paper -- <slug> "<Paper Title>"`, or import a raw long-form note that contains `## 12. Suggested metadata entry`.
2. Run `node scripts/promote-raw-note.mjs --dry-run <files...>` and inspect planned filenames and warnings.
3. Promote with `scripts/promote-raw-note.mjs` when the dry-run looks correct.
4. Restore schema-valid values only when checked evidence is already present in the note or official source material.
5. Run `npm run validate`.

The helper should remain conservative. It should fail loudly when metadata is ambiguous instead of inventing values.

## Non-Goals For Now

- Do not add PDF hosting.
- Do not add a database or backend service.
- Do not weaken the content schema.
- Do not introduce a quality score or ranking model.
- Do not add coverage scores or trajectory-IR relevance metadata unless the project direction changes.
- Do not automatically rewrite scholarly prose unless the user explicitly asks for editorial cleanup.
