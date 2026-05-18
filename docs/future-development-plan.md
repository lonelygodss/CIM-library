# Future Development Plan

## Current State

The repository contains 62 Markdown paper notes in `src/content/papers/`, and all 62 are now valid Astro content entries with YAML frontmatter.

The raw-note migration milestone is complete:

- `npm run validate` passes with `Validated 62 paper metadata file(s).`
- `npm run check` passes with `0 errors, 0 warnings, 0 hints`.
- `npm run build` passes and builds 64 static pages into `dist/`.
- No raw long-form notes remain in `src/content/papers/`.

The migration helper `scripts/promote-raw-note.mjs` remains useful for any future imported notes. It promotes the fenced YAML block under `## 12. Suggested metadata entry`, strips obsolete generated migration-only sections, normalizes filenames to slugs, and conservatively coerces schema-sensitive fields.

Current product priority: make `/library/` a strong taxonomy atlas before refining individual paper detail pages. The legacy standalone HTML in `src/content/legacy/cim_compiler_ir_taxonomy_visualization.html` is the reference for core graph interaction: hover summary, click selection, and selected-paper right-panel visualization. The taxonomy explanation should be clear and easy to read, not copied as a fancy visual narrative from the draft.

## Milestone 1 -- Content QA

Status: substantially complete. Keep this milestone green while doing UI work.

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

## Milestone 2 -- Atlas Visualization First

Goal: make `/library/` the primary public experience: a useful, readable, visually strong taxonomy graph that helps a visitor inspect Axis A x Axis B placement before opening single-paper pages.

Use the legacy HTML as the reference for graph interaction behavior, not as a source of obsolete metadata fields or broad UI scope.

Priority fixes:

1. Improve graph sizing and layout so the Axis A x Axis B visualization is large, legible, and not cramped on desktop.
2. Implement node hover behavior: a floating summary box near the cursor with title/display name, year/venue when available, Axis A/B placement, and a short summary.
3. Implement node click behavior: clicking a paper selects it and updates the right panel.
4. Replace the legacy radar graph idea with an axis coverage cloud graph in the right panel, derived from active metadata: Axis A, Axis B, Axis C first-class objects, Axis D rewrite objects, and optionally technology/workload terms.
5. Keep taxonomy explanation simple: short text and readable axis definitions, not a large copied visual narrative from the legacy draft.
6. Keep keyboard accessibility and mobile layout in scope for the graph, hover/selection equivalent, right panel, and coverage cloud.
7. Treat search/filter controls, role-style matrix, and compact paper cards as optional follow-ups after the core graph interaction is high quality.
8. Verify with browser screenshots at desktop and mobile widths before calling this milestone complete.

Do not reintroduce legacy `coverage`, ranking, or `trajectory_IR_relevance` metadata. The coverage cloud is a derived visual summary of descriptive fields, not a numeric score or ranking.

Acceptance criteria:

- `/library/` makes the taxonomy graph the main object, not a small embedded widget.
- Hovering a node reliably shows a useful floating summary without overlap problems.
- Clicking a node reliably updates the selected-paper right panel.
- The right panel contains a readable axis coverage cloud for the selected paper.
- The layout is usable at common desktop widths and does not collapse into awkward oversized cards or undersized charts.
- `npm run validate`, `npm run check`, and `npm run build` pass after implementation.

Implementation quality bar:

- Source priority: use `src/content/legacy/cim_compiler_ir_taxonomy_visualization.html` for graph interaction, `src/content/legacy/CIM stack library compact.md` for short display labels when current frontmatter is too long, `src/data/taxonomy.json` for Axis A/B vocabulary and colors, and `src/content/papers/*.md` for active paper metadata.
- Hover box content: title/display name, year/venue if available, Axis A/B placement, and a short summary.
- Coverage cloud inputs: Axis A primary/secondary roles, Axis B styles, Axis C first-class objects, Axis D rewrite objects, and only optionally technology/workload terms.
- Coverage cloud presentation: distinguish role/style/object/rewrite categories with restrained color, grouping, or shape; limit or group long lists; never imply a numeric score.
- Accessibility: make graph nodes keyboard-selectable or provide an equivalent accessible selection mechanism.
- Responsive behavior: desktop should emphasize the graph plus right panel; mobile may use a scrollable graph region and stacked right panel.
- Verification: inspect `/library/` in browser screenshots at desktop and mobile widths; check nonblank graph rendering, legible labels, hover summary placement, click selection, right-panel cloud readability, and no overlapping text.

## Milestone 3 -- Paper Page Polish

Only after atlas visualization is substantially improved:

- improve individual paper page layout for long notes;
- tighten typography and spacing for corpus-note sections;
- add source/provenance affordances if useful;
- make paper metadata easier to scan on mobile;
- keep the site static and suitable for personal hosting.

## Milestone 4 -- Corpus Navigation Extensions

After the atlas and paper pages are stable:

- add tag pages if useful;
- add Axis A / Axis B detail pages if useful;
- consider a static search index;
- consider source provenance badges if they improve public trust.

## Milestone 5 -- Research Extensions

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
