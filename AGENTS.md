# AGENTS.md — news-image-20261121-entry

Entry for make.fun bounty news-image-20261121 ("Sum up 21 November's world news in one image").
$100 escrowed, 50 places (1st $20, 2nd $12, 3rd $6, 4th-10th $2, 11th-50th $1.20). Ends Mon 23 Nov 2026 00:00 UTC (03:00 EAT). At most 10 submissions/day, 20 total; last submission before deadline is final.

## What this repo is
- `entry.png` — the finished front page: 1024x1024, at most 1 MiB, 21 stories, every one happened or was first reported on Saturday 21 November 2026 (verified against live sources; see the build notes in ~/workspace/news-image-20261121-work/, not in this repo).
- `main.ts` — the program the grader runs. It copies `entry.png` to `MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). Node 22, standard library only, no network, deterministic: grader runs it twice and both runs must write identical bytes.
- `LICENSE` — MIT.

## Format to follow (same proven format as the 20 Nov entry)
Dense newspaper front page, 1024x1024, like ~/workspace/news-image-20261120-work/infographic.html and world-news-infographic-20nov.png:
- Masthead: "Saturday 21 November 2026", "21 STORIES • 5 CONTINENTS", "ALL FROM SATURDAY"
- Top 3 stories as large photo panels (generate 3-4 real photo-style panels for the top stories)
- Next 8 stories as tiles (4 across, 2 rows)
- Final 10 stories in an "Also" grid, plus a small map/world box if it fits
- Every story must be dated 21 Nov 2026 in its live source. Stories from 20 Nov or earlier do NOT count, even if still in the news on the 21st. Drop any story you cannot verify to 21 Nov and replace it. Keep a rejected list in the work dir.
- Cover politics, markets/business, tech/science, climate, sport, culture and regional news across continents — not just one region.

## Rules for working here
- Do NOT change `entry.png` or the story list without re-verifying every changed story against a live source dated 21 November 2026.
- STANDING RULE (Ryan, 10:41 EAT 21 Nov 2026): submit the moment the entry is ready, WITHOUT a separate per-entry go-ahead. Entry fee is $0 here, so no fee approval is needed. Report the submission ID and claim to the main chat the moment it lands.
- If you revise `main.ts`, keep it deterministic: keep the copy exact (no re-encoding, no timestamps in the output).
- Run the entrypoint exactly as the grader does before finishing: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`, then confirm `out/entry.png` is 1024x1024 and under 1 MiB, and run it twice and confirm identical bytes.
- The kit lives at `~/workspace/news-image-20261121-kit/news-image-20261121-kit`; run its checks from inside that kit directory with `node cli/makefun.mjs check --repo <this repo>`.
- This bounty is escrowed: submissions must be signed with --keypair ~/.makefun/keypairs/https_make.fun.json (do NOT submit in this build — the parent will submit).
- GitHub repo must be https://github.com/godanaaa/news-image-20261121-entry, created after the competition opens, with freshness.json as the ONLY file in the root commit, then the other files in later commits. Set the repo About (website https://make.fun/bounty/news-image-20261121, topics makefun, ai-agents, bounties, growth) before submitting — the parent will do the submit, but prepare the repo so it passes repo_about.
- Do NOT copy entry.png, main.ts or infographic.html byte-identically from the 20 Nov entry. Write main.ts fresh and build a new image for 21 Nov news.
