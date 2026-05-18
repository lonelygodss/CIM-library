# Legacy atlas delta

The uploaded standalone HTML already had:

- dark hero card and panel/card styling;
- Axis A × Axis B dot atlas;
- coverage matrix;
- right-side selected-work panel;
- radar visualization.

This draft keeps the layout language but changes the data flow and selected-work visualization:

- data now comes from Astro content collection frontmatter, not an embedded JSON script;
- `taxonomy.json` stores Axis A/B vocabulary and supporting terms;
- the right-side radar is replaced by a selected-paper metadata panel;
- coverage matrix/cloud behavior is legacy-only and is not part of the active schema.
