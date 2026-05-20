# Codex handoff

## Goal

Finish this as a static Astro paper library. Do not add PDF hosting yet.

Root-level project instructions live in `AGENTS.md`. Use this handoff as a short status note; use `AGENTS.md` for ongoing agent behavior.

Current development plan lives in `docs/future-development-plan.md`. A ready-to-use restart prompt lives in `docs/next-session-prompt.md`.

## Design decisions already made

- Paper metadata source: Markdown frontmatter in `src/content/papers/*.md`.
- Taxonomy vocabulary source: `src/data/taxonomy.json`.
- Atlas route: `/library/`.
- Paper route: `/papers/[slug]/`.
- Visualization: `/library/` is now the primary public experience. The Astro atlas has a larger Axis A x Axis B graph, deterministic node spreading, hover/focus summaries, click-to-select behavior, a selected-paper right-panel metadata cloud, a filtered paper picker, and reset controls. The legacy standalone HTML remains useful as a behavioral reference, but do not reintroduce obsolete radar/coverage-score concepts.
- No coverage score, ranking score, or trajectory-IR relevance metadata in the active schema.
- Keep the site static and suitable for personal hosting.

## Current state

All 62 paper notes in `src/content/papers/` have been migrated into schema-valid Astro content entries. The previous raw-note migration blocker is resolved.

The `/library/` atlas milestone is substantially implemented:

- `src/components/TaxonomyAtlas.astro` owns the graph, filters, hover tooltip, selection state, paper picker, reset behavior, selected-paper panel, and axis coverage cloud.
- `src/styles/global.css` contains the atlas layout, tooltip, cloud, selected-panel, mobile, and taxonomy-explainer styling.
- `src/pages/library.astro` presents the interactive atlas before the supporting taxonomy explanation.
- Browser verification covered desktop and mobile widths: all 62 nodes render, hover summaries appear, click and picker selection update the right panel, reset restores all 62 papers, and the mobile graph uses horizontal scroll with stacked controls.

Latest verification after atlas updates:

- `npm run validate` passes: `Validated 62 paper metadata file(s).`
- `npm run check` passes: `0 errors, 0 warnings, 0 hints`.
- `npm run build` passes and builds 64 pages into `dist/`.

The final migration batch converted:

- `openc2.md`
- `opencimtc.md`
- `ouroboros.md`
- `papi.md`
- `pim-eda.md`
- `pim-hls.md`
- `pim-opt.md`
- `pim-tc.md`
- `pimacc.md`
- `pimcomp.md`
- `pimsim-nn.md`
- `pimsyn-nn.md`
- `pimeva.md`
- `pimsynth.md`
- `puma.md`
- `polyhedral-based-compilation-framework-for-in-memoryneural-network-accelerators.md`
- `prim.md`
- `rescim.md`
- `reconfigurable-dataflow-cim-accelerator-for-multi-scale-vision-transformer.md`
- `sega-dcim.md`
- `sherlock.md`
- `simplepim.md`
- `sparsep.md`
- `syndcim.md`
- `unindp.md`

Several artifact URLs and conservative metadata values were manually normalized when the note already contained checked evidence. Examples include OpenCIMTC, PIM-EDA, PIM-Opt, PIMACC, PIMCOMP, PIMSIM-NN, PIMSYN-NN, PrIM, and PUMA.

On macOS-style case-insensitive filesystems, Git may show case-only filename normalizations as modifications under the original tracked names until staging. The on-disk lowercase kebab-case filenames are authoritative.

## What to finish next

1. Keep content QA green with `npm run qa`, `npm run validate`, `npm run check`, and `npm run build`.
2. Do one final atlas QA/polish pass before moving to paper pages:
   - refine dense node clusters if a low-risk zoom, cell-focus, or selected-cell affordance is warranted;
   - verify keyboard tab order and focus tooltip behavior;
   - consider a compact visible hint for horizontal graph scrolling on mobile;
   - check right-panel cloud readability for papers with sparse metadata and very long titles.
3. After atlas QA is acceptable, move to Milestone 3: individual paper page polish.
4. Do not reintroduce coverage scores, ranking scores, or `trajectory_IR_relevance` as active metadata. The axis coverage cloud is a derived visual summary, not a score.

Use `docs/corpus-note-harness.md` when generating full public notes. Use `docs/legacy-source-map.md` when recovering original overview text or compact-source material from draft artifacts.

## Frontmatter contract

Required fields:

```yaml
slug: lowercase-kebab-case
title: Paper title
summary: public one-paragraph summary
axis_A:
  primary: A1|A2|A3|A4|A5|A6
  secondary: []
axis_B: [B1]
```

Keep arrays inline where possible. The Astro schema is the strict source of truth; `scripts/validate-library.mjs` is a fast preflight check.

Obsolete generated fields such as `coverage` and `trajectory_IR_relevance` should stay out of migrated entries.

## Future imports

For any future raw generated note:

1. Run `node scripts/promote-raw-note.mjs --dry-run <files...>` first.
2. Promote the note with `scripts/promote-raw-note.mjs` only after inspecting planned filenames and warnings.
3. Restore a schema-valid year, URL, or reproducibility label only when official source material or checked note evidence supports it.
4. Run `npm run validate`, then `npm run check`, then `npm run build`.
