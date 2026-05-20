# Future Development Plan

## Current State

The repository contains 62 Markdown paper notes in `src/content/papers/`, and all 62 are now valid Astro content entries with YAML frontmatter.

The raw-note migration milestone is complete:

- `npm run validate` passes with `Validated 62 paper metadata file(s).`
- `npm run check` passes with `0 errors, 0 warnings, 0 hints`.
- `npm run build` passes and builds 64 static pages into `dist/`.
- No raw long-form notes remain in `src/content/papers/`.

The migration helper `scripts/promote-raw-note.mjs` remains useful for any future imported notes. It promotes the fenced YAML block under `## 12. Suggested metadata entry`, strips obsolete generated migration-only sections, normalizes filenames to slugs, and conservatively coerces schema-sensitive fields.

Current product state: `/library/` has been promoted into the primary public experience. The Astro atlas now has large Axis A x Axis B graph rendering, deterministic node spreading, hover/focus summaries, click selection, a selected-paper right-panel axis coverage cloud, a filtered paper picker, reset controls, and mobile stacking with horizontal graph scroll. The legacy standalone HTML in `src/content/legacy/cim_compiler_ir_taxonomy_visualization.html` is now mostly a behavioral reference for any remaining graph-interaction refinements, not a source for obsolete metadata or explanatory copy.

Current product priority: complete a final atlas QA/polish pass, then move to individual paper detail page refinement. The taxonomy explanation should remain short and readable.

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

Status: substantially implemented. Keep this milestone green while doing any final polish.

Goal: make `/library/` the primary public experience: a useful, readable, visually strong taxonomy graph that helps a visitor inspect Axis A x Axis B placement before opening single-paper pages.

Use the legacy HTML as the reference for graph interaction behavior, not as a source of obsolete metadata fields or broad UI scope.

Implemented:

1. Graph sizing and layout are larger and desktop-forward.
2. Nodes expose hover/focus summaries with title/display name, year/venue when available, Axis A/B placement, and summary text.
3. Clicking graph nodes selects a paper and updates the right panel.
4. The right panel uses a derived metadata cloud for Axis A, Axis B, Axis C first-class objects, Axis D rewrite objects, and technology/workload terms. It does not imply a score.
5. Taxonomy explanation has been moved after the atlas and shortened into readable Axis A/B rows.
6. Keyboard/mobile selection has an equivalent path through the filtered paper picker.
7. Browser verification covered desktop and mobile widths; all 62 nodes rendered, hover summaries appeared, click and picker selection updated the panel, and reset restored the full result set.

Remaining polish candidates:

1. Dense node clusters may benefit from a low-risk zoom, cell-focus, or selected-cell affordance.
2. Keyboard tab order and focus tooltip behavior should get one more manual QA pass.
3. Mobile graph inspection is usable through horizontal scroll, but a small scroll affordance may make that clearer.
4. Right-panel cloud readability should be spot-checked on sparse-metadata papers and papers with very long titles.
5. Search/filter controls, role-style matrix, and compact paper cards remain optional follow-ups.

Do not reintroduce legacy `coverage`, ranking, or `trajectory_IR_relevance` metadata. The coverage cloud is a derived visual summary of descriptive fields, not a numeric score or ranking.

Acceptance criteria:

- `/library/` makes the taxonomy graph the main object, not a small embedded widget. Done.
- Hovering a node reliably shows a useful floating summary without overlap problems. Done in browser spot checks.
- Clicking a node reliably updates the selected-paper right panel. Done.
- The right panel contains a readable axis coverage cloud for the selected paper. Done.
- The layout is usable at common desktop widths and does not collapse into awkward oversized cards or undersized charts. Mostly done; keep checking edge cases.
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
