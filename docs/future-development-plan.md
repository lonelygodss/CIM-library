# Future Development Plan

## Current State

This is a static Astro paper library for CIM compiler/IR-stack research.

- `src/content/papers/` contains 62 schema-valid Markdown paper entries.
- The raw-note migration milestone is complete; no raw long-form notes remain.
- The active metadata contract is descriptive. It does not include coverage scores, ranking scores, or `trajectory_IR_relevance`.
- `/` is the primary public atlas route; `/library/` renders the same atlas for compatibility.
- `/papers/[slug]/` renders individual long-form corpus notes.
- Axis C first-class objects and Axis D rewrite objects are normalized at render time from `src/data/taxonomy.json` vocabulary, without adding new required frontmatter fields.
- The atlas supports both Axis A x Axis B and normalized Axis C x Axis D layouts.
- The current atlas/detail-page base is good enough for the next phase; future work should shift toward cluster analysis and visualization rather than more minor atlas polish.
- Keep the site static and suitable for personal hosting. Do not add PDF hosting, backend services, or a database unless the project direction changes.

Keep these checks green while changing UI or content:

```bash
npm run qa
npm run validate
npm run check
npm run build
```

Latest known good baseline:

- `npm run validate`: `Validated 62 paper metadata file(s).`
- `npm run qa`: 62 files, 62 structured, 0 raw files; source/provenance coverage is now reported as informational audit output.
- `npm run check`: `0 errors, 0 warnings, 0 hints`.
- `npm run build`: 64 static pages.

## Completed Focus -- Atlas Core

The main `/library/` atlas focus is now substantially done.

Implemented:

- large Axis A x Axis B graph as the first main section on `/library/`;
- deterministic node spreading for dense cells;
- hover/focus summaries and click-to-select behavior;
- filtered paper picker and reset controls;
- selected-paper right panel focused on Axis C first-class objects and Axis D rewrite objects;
- selected-paper Axis A x Axis B coverage shown directly on the atlas as a non-scoring background cloud;
- short taxonomy explanation after the graph;
- responsive controls and mobile horizontal graph scroll;
- paper detail page CSS improvements for long notes, tables, code blocks, and mobile wrapping.

## Completed Focus -- Detail Pages and Atlas Scoping, First Pass

Implemented:

- render-time Axis C/D normalization using `src/data/taxonomy.json` object and rewrite vocabularies;
- separate Axis C and Axis D atlas filters;
- atlas layout switch between Axis A x Axis B and normalized Axis C x Axis D;
- URL state for `layout=cd`, `c=`, `d=`, exact scoped cells through `cx=` / `cy=`, plus existing `tech=` and `workload=`;
- detail-page normalized Axis C/D chips and context chips that link back into scoped atlas views;
- atlas selected-paper card split from hover preview, so click pins a paper while hover previews the active object/rewrite cloud;
- responsive atlas profiles with larger nodes and tighter labels for A/B and C/D views;
- expandable object/rewrite/context clouds for long metadata lists;
- dense-cell summary under the atlas with one-click exact scoping for the plotted cell.

Do not rebuild the atlas from scratch. Future atlas work should be incremental and should use current frontmatter plus `src/data/taxonomy.json` as source of truth.

## Completed Focus -- Detail-Page Provenance, First Pass

Implemented:

- detail-page provenance strip summarizing paper-source presence, artifact-link presence, artifact status, and last-checked date;
- hero source actions generated from existing `links.paper`, `links.artifact`, `links.docs`, `links.code`, and `artifact.url` metadata;
- richer source cards with source role labels, short descriptions, and hostnames;
- explanatory source note clarifying that artifact status and checked date come from the recorded corpus pass rather than live monitoring;
- responsive source/provenance layout with single-column mobile behavior and no horizontal overflow in checked viewports.

This pass did not add new schema fields. It surfaces the current descriptive frontmatter more clearly.

## Completed Focus -- Provenance QA, First Pass

Implemented:

- `npm run qa` now reports source/provenance coverage for `links.paper`, `links.artifact`, `artifact.url`, `links.docs`, and `links.code`;
- missing paper-source links are listed as informational audit items;
- missing artifact `last_checked` dates are checked separately from artifact URL coverage;
- artifact URLs recorded only under `artifact.url` are surfaced so the frontmatter can be normalized intentionally;
- disagreements between `links.artifact` and `artifact.url` are reported;
- entries with no recorded source links are listed.

Current mechanical audit reading:

- `links.paper` is now populated for 61/62 entries after high-confidence backfill from checked body citations and source records.
- `links.artifact` is now populated for 38/62 entries and aligned with the existing `artifact.url` coverage.
- `pim-eda.md` is the only remaining entry without `links.paper`; it is a suite/toolchain entry composed from several related papers, so leave it blank unless a canonical suite paper is identified.
- no entries currently lack all frontmatter source links.
- `artifact.last_checked` is complete across the current corpus.
- artifact status and artifact URL fields currently have no contradiction according to the QA script.
- artifact URL-only entries and `links.artifact` / `artifact.url` disagreements are currently zero.

## Completed Focus -- Audit Pass From Next-Session Steps 1-5

This pass closed the previous restart prompt's first five tasks.

- Axis C/D normalization was spot-checked across macro-generator, mapper/compiler, simulator, runtime, benchmark, suite, and mapper-family entries.
- Axis C instruction-stream matching was tightened so `bit_stream` / `bit stream` terms stay under numeric-format categories instead of falsely matching instruction streams.
- `pim-eda.md` provenance was rechecked against the umbrella PIM-Toolchain repository, ICT CAS project page, and Xiaoming Chen profile. No standalone canonical suite paper was identified, so `links.paper` remains intentionally blank.
- `links.artifact` and `artifact.url` remain aligned. QA reports zero artifact URL-only entries and zero artifact link/url disagreements.
- Rendered-note Markdown was audited for formulas, tables, and code blocks. A dependency-free rehype formatter now styles TeX-style inline/display formulas without changing corpus Markdown.
- Raw technology/workload terms were audited. They remain descriptive but noisy, so controlled vocabularies should wait until there is a concrete browsing problem to solve.

## Completed Focus -- Cleanup and Handoff

This iteration also cleaned up context for future work:

- removed stale handoff-file references from the restart path and README;
- removed redundant math-formatting scaffolding, leaving a single rehype-based formatter;
- condensed `docs/next-session-prompt.md` into a current-state restart prompt instead of a long historical changelog;
- updated `AGENTS.md` so it reflects the completed raw-note migration and current atlas architecture.

## Next Focus -- Cluster Analysis and Visualization

The next product milestone should make the corpus useful as a map of research clusters, not only as a paper-by-paper atlas. The existing close-group behavior is a good base; future work should explain why papers sit near each other, what stack object or workflow binds them, and which families of work form recognizable lines of research.

Likely direction:

1. Add a new cluster-focused page, likely a static route such as `/clusters/`, rather than overloading the current atlas.
2. Derive clusters from existing descriptive metadata first: Axis A/B, normalized Axis C/D, technology, workloads, artifacts, baselines, notes, and source links.
3. Provide cluster cards or panels that name the binding theme, list representative papers, show shared first-class objects/rewrite objects, and link back into scoped atlas views.
4. Add a vague academic working-group layer where evidence supports it: repeated author groups, lab/project names, repository owners, or visible publication families. This should describe broad working groups that produced clusters of works and occasional cross-group cooperation.
5. Avoid a detailed affiliation map, author connection graph, or fine-grained collaboration network. The goal is orientation, not bibliometric authority.
6. Keep the implementation static and inspectable. Prefer hand-authored or lightly derived cluster metadata over opaque automatic clustering until the desired view is clearer.

Open design questions for the next session:

- Should cluster metadata live in a new `src/data/clusters.json`, in frontmatter, or as derived data from existing entries?
- Should academic working groups be manually curated labels, inferred from `authors_or_group`, or introduced only as optional cluster annotations?
- Should the first version be a list/card view, a graph, or a hybrid with cards plus a compact visualization?
- How much evidence should be shown for a cluster assignment without making the page feel like a citation audit?

The atlas should remain descriptive. Do not introduce coverage, quality, ranking, or relevance scores.

Keep changes schema-compatible unless there is a clear reason to update `src/content.config.ts`.

## Content QA

Content QA is mostly green, but keep these checks in mind during edits:

- preserve the 62-entry corpus unless intentionally adding/removing papers;
- keep slugs unique and filename-aligned;
- keep Axis A/B values within `src/data/taxonomy.json`;
- keep generated-note artifacts out of rendered notes;
- keep artifact URLs, years, venues, and reproducibility labels evidence-based;
- do not invent publication facts or artifact behavior.

Use `scripts/promote-raw-note.mjs` only for future imported raw notes. The regular development path should not need raw-note migration instructions.

## Research Extensions

Later research-facing improvements:

- explicit source provenance fields for paper, artifact, docs, and checked date if cluster/group views need stronger evidence display;
- cluster pages for families such as ONNX-to-ISA stacks, UPMEM runtime stacks, macro generators, simulator/cost-model frameworks, PIM EDA/PIMCOMP/PIMSYN/PIMSIM-related work, and SRAM/digital-CIM compiler lines;
- vague academic working-group annotations for recognizable families of work, kept intentionally coarse and evidence-based;
- controlled vocabulary for `integration_roles`;
- tag pages or Axis A/B detail pages only if they support cluster navigation.

## Non-Goals

- Do not add PDF hosting.
- Do not add backend services or a database.
- Do not weaken the content schema to accommodate malformed notes.
- Do not introduce quality scores, coverage scores, ranking scores, or `trajectory_IR_relevance`.
- Do not automatically rewrite scholarly prose unless explicitly requested.
