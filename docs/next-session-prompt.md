# Next Session Prompt

Use this prompt to start the next Codex session.

```text
We are in /Users/xiongzijian/coding/CIM-library.

Read AGENTS.md and docs/active-context.md first. Then use docs/README.md to choose task-specific context. Do not bulk-read archives, legacy docs, website-integration docs, or paper-note harnesses unless the task needs them.

Project status:
- Static Astro CIM compiler/IR paper library.
- 62 schema-valid paper entries.
- Stable routes: /, /projects/, /projects/cim-library/, /library/, /clusters/, /papers/, /papers/[slug]/.
- src/data/clusters.json is the hand-authored cluster/working-group source and stays separate from paper frontmatter.
- /clusters/ is the active cluster and working-group route.

Active focus:
- Cluster analysis and working-group content.
- Focus doc: docs/focus/cluster-analysis-working-groups.md.
- Current shape: 7 cluster hypotheses, 13 working-group investigation articles, 7 checked cluster analysis paragraphs.
- Current goal: deepen existing cluster/group notes with real paper/artifact analysis before adding new notes.
- Next priority: deepen the weakest existing working-group investigations and refine cluster object-flow/evidence only where new source checks sharpen the argument.

Method:
- Metadata is only a seed; final claims must come from paper notes, papers, official artifacts, docs, code, or visible execution/file boundaries.
- Cluster articles and working-group investigations are parallel lenses.
- Write prose-first article paragraphs, not metadata cards, tag clouds, folded blocks, duplicated investigation/article pairs, or list-heavy subsections.
- Keep group labels coarse and evidence-based.
- Do not add coverage scores, ranking scores, quality scores, trajectory_IR_relevance, backend services, databases, PDF hosting, or fine-grained collaboration graphs.
- Keep /library/ and /papers/[slug]/ stable.

For cluster work:
1. Read docs/focus/cluster-analysis-working-groups.md.
2. Choose one coherent evidence batch.
3. Read the relevant paper notes and official artifacts as needed.
4. Update src/data/clusters.json and any necessary focus/status docs.
5. Run verification.

After substantial edits, run:
npm run qa
npm run validate
npm run export:atlas
npm run contract:website
npm run check
npm run build

Report changed files, context decisions, evidence limits, and verification results.
```
