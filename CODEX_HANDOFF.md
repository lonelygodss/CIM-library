# Codex handoff

## Goal

Finish this as a static Astro paper library. Do not add PDF hosting yet.

Root-level project instructions now live in `AGENTS.md`. Use this handoff as a short status note; use `AGENTS.md` for ongoing agent behavior.

Current migration plan lives in `docs/future-development-plan.md`. A ready-to-use restart prompt lives in `docs/next-session-prompt.md`.

## Design decisions already made

- Paper metadata source: Markdown frontmatter in `src/content/papers/*.md`.
- Taxonomy vocabulary source: `src/data/taxonomy.json`.
- Atlas route: `/library/`.
- Paper route: `/papers/[slug]/`.
- Visualization: keep the Axis A × Axis B dot atlas and selected-paper metadata panel.
- No coverage score, ranking score, or trajectory-IR relevance metadata in the active schema.

## What to finish next

1. Convert raw notes in `src/content/papers/` into schema-valid Astro content entries.
2. Promote each note's `## 12. Suggested metadata entry` YAML into frontmatter.
3. Normalize filenames to lowercase kebab-case slugs.
4. Remove section 12 from rendered note bodies after promotion.
5. Remove generated value-trajectory IR project sections and ignore obsolete `trajectory_IR_relevance` fields.
6. Run `npm run validate`, `npm run check`, and `npm run build` after migration batches.
7. Improve the Markdown paper page layout only after all content compiles.
8. Optional: add tag/axis detail pages after the atlas is stable.

Use `docs/corpus-note-harness.md` when generating full public notes. Use `docs/legacy-source-map.md` when recovering original overview text or compact-source material from the draft artifacts.

As of the third migration batch, 17 notes are structured and 45 raw notes remain. The newly migrated files are `cima-com.md`, `cimloop.md`, `ciminus.md`, `cinm.md`, and `clear.md`. `npm run validate` is expected to fail until raw notes receive frontmatter; the current next raw blocker is `CMSwitch.md: missing YAML frontmatter block`. `npm run check` currently stops on another remaining raw note, `CoMoNM.md`, before a full Astro check can complete.

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

Obsolete generated fields such as `coverage` and `trajectory_IR_relevance` should be ignored during migration.

## Converting existing generated notes

Use the note's section 12 metadata block when present. If absent, extract from:

- section 1 classification table -> `axis_A`, `axis_B`, objects, rewrite objects, tags, baselines;
- section 2 public summary -> `summary`;
- section 8 artifact status -> `artifact` and `reproducibility_level`;
- section 10 final takeaway -> `takeaways`.

Do not try to parse the entire prose automatically before the schema is stable. Prefer a small manual adapter plus validation.

Refined batch workflow from the latest migration:

1. Run `node scripts/promote-raw-note.mjs --dry-run <files...>` first and inspect planned lowercase filenames.
2. Run the helper for the batch, then inspect warnings. The helper now blanks nonnumeric years, blanks non-HTTP(S) artifact URLs, and converts unsupported reproducibility labels to `unknown`; manually restore a schema-valid value only when the note already contains checked evidence.
3. Check the migrated files for frontmatter, absence of section 12, and absence of the generated value-trajectory section before running global validation.
4. If `npm run validate` stops at the next raw note, treat that as expected. Run `npm run check` only in that state or after full validation passes; Astro may stop on a different raw note because its glob order differs from the validator's sorted order.
5. Do not run `npm run build` until `npm run check` passes.

On the current macOS-style case-insensitive filesystem, Git may show case-only filename normalizations as modifications under the original tracked names until staging. The on-disk filenames are authoritative during migration.
