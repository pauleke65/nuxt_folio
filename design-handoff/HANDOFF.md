# Handoff: new design for the research site

**For:** Claude Code, working in `pauleke65/nuxt_folio`
**From:** the design session with Paul, 1 Oct 2026
**Goal:** rebuild the research site to the approved design, open a PR, and get a Netlify deploy preview Paul can test.

The design is finished and approved. Your job is to port it, not to redesign it.

---

## 1. What is in this folder

| Path | What it is |
| --- | --- |
| `site.css` | The complete stylesheet. Drop-in. Every rule is scoped under `.r`. |
| `pages/*.html` | Ten standalone reference pages. Open them in a browser. They are the source of truth for markup, class names and copy. |
| `screenshots/*.png` | Each page at 1440px (`-desktop`) and 390px (`-phone`). Compare your build against these. |
| `HANDOFF.md` | This file. |

The reference pages link `../site.css`, so the CSS has one source.

---

## 2. The approved look (locked, do not change)

- **Type:** Bricolage Grotesque for headings, UI and labels. Source Serif 4 for text. JetBrains Mono for code blocks only.
- **Colour:** black and white with one accent.
  - Ink `#111111`, Body `#333333`, Grey `#5E5E5E`, Hairline `#E6E6E6`, Paper `#FFFFFF`, Hover `#F7F7F7`
  - Accent "Ink blue" `#0D2291`. Accent only: links, status, kickers, diagram signs, the second clause of a headline, the winning bar in a chart. Never a background.
- **Layout:** 1200px max width, side padding `clamp(16px, 4vw, 48px)`, one breakpoint at `max-width: 760px`.
- **Surface:** hairline rules. No shadows, no rounded corners, no gradients, no animation.
- **Icons:** inline feather-style SVG strokes. No emoji, no icon font.

Do not convert the CSS to Tailwind utilities. Use `site.css` as it is.

---

## 3. Repo facts (checked 1 Oct 2026)

- Nuxt 3, `ssr: false`. `yarn generate` outputs `dist/`. Netlify builds it (`netlify.toml`), with an SPA catch-all redirect.
- **The repo is public.**
- Branches:
  - `main`: the legacy portfolio.
  - `research-site-redesign`: the current research site, the design Paul wants replaced. It has an open PR. This is your starting point because it already has the routes and the data.
- On `research-site-redesign`:
  - Data lives in `data/research/*.js` (`models`, `experiments`, `essays`, `predictions`, `projects`).
  - Layout is `layouts/research.vue`. Nav and footer are in `components/research/`.
  - The theme is `assets/css/research-theme.css`, scoped under `.research-page`, and the pages use a lot of inline styles.
- Tailwind and `@tailwindcss/typography` are installed. Legacy pages (`/work`, `/blog`, `/posts/[post_slug]`, `/project/[project_slug]`, `/certificates`) use them. Leave those pages alone.
- `site.css` was tested with Tailwind's preflight and the typography `.prose` rule loaded first. It renders identically. Long-form text uses the class `copy`, not `prose`, for that reason.

### Important: most of the content is starter content

The comments at the top of `data/research/models.js`, `experiments.js`, `essays.js` and `predictions.js` say the content is demo content carried over from an earlier prototype. Only `projects.js` (projects and achievements) is marked real.

Keep rendering from those files. Do not invent more. Say so plainly in the PR description, because a public research site should not show a track record that is not real. See the open questions in section 10.

---

## 4. Branch and PR

```bash
git fetch origin
git checkout -b site-design-v2 origin/research-site-redesign
```

- Open the PR against `main`, the same way the existing research PR is set up, so Netlify builds a deploy preview.
- If no preview appears, check which base the existing PR uses and match it.
- Do not merge. Paul tests the preview first.
- Keep this `design-handoff/` folder on the branch while you work. Remove it, or move it under `docs/`, before merge.
- Never commit secrets. `.env` stays out of git.

Suggested PR title: `Research site: new design, black and white with Ink blue`

---

## 5. Global setup

1. **Fonts.** In `nuxt.config.js`, replace the Newsreader + JetBrains Mono stylesheet link with:

   ```
   https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=JetBrains+Mono:wght@400;500&display=swap
   ```

2. **CSS.** Copy `design-handoff/site.css` to `assets/css/site.css`. Add it to the `css` array after `tailwind.css`. Remove `research-theme.css` from the array and delete the file once nothing uses `.research-page` or the `.rs-*` classes.

3. **Head.** Title `Paul Imoke — Systems research`. Replace every "Paul I." with "Paul Imoke".

4. **Layout.** `layouts/research.vue` becomes:

   ```vue
   <template>
     <div class="r">
       <SiteHeader />
       <slot />
       <SiteFooter />
     </div>
   </template>
   ```

   `.r` is the design root. It carries every variable and resets `line-height` and `font-size`, so nothing leaks in from Tailwind.

5. **Header** (`header.hd.w` in any reference page).
   - Logo mark is the feather `rotate-cw` icon plus "Paul Imoke".
   - Links: Models, Experiments, Essays, Fieldwork, About, Ledger. Ledger carries the small tag `<em>Jan</em>`.
   - Active link gets class `on`. Model and experiment detail pages light up their parent.
   - Phone: `.nav` hides and the `.menu` button shows. The open menu is not drawn. Build it as a full-width list of the six links under the header, UI font at 18px, a hairline between rows. Close it on route change.

6. **Footer** (`footer.ft`). The contact line, the email as a `mailto:`, then X (`https://x.com/iampeke65`), GitHub (`https://github.com/pauleke65`) and LinkedIn. Reuse the LinkedIn URL already in the repo. No name or wordmark in the footer. Paul asked for that.

---

## 6. Page map

| Design page | Reference | Route | Nuxt file | Data |
| --- | --- | --- | --- | --- |
| Home | `home.html` | `/` | `pages/index.vue` | Hero is static. "Currently" from a new `data/research/now.js`. Models grid from `MODELS`. Latest from the existing `latestWork` list. Fieldwork from `PROJECTS`. |
| Models | `models.html` | `/models` | `pages/models/index.vue` | `MODELS`, `DOMAINS` |
| Model | `model-m07.html` | `/models/[id]` | `pages/models/[id].vue` | `MODEL_DETAILS` |
| Experiments | `experiments.html` | `/experiments` | `pages/experiments/index.vue` | `EXPERIMENTS` |
| Experiment | `experiment-s05.html` | `/experiments/[id]` | new `pages/experiments/[id].vue` | `EXPERIMENTS` |
| Essays | `essays.html` | `/essays` | `pages/essays/index.vue` | `ESSAYS` |
| Essay | `essay-e09.html` | `/essays/[id]` | `pages/essays/[id].vue` | `ESSAY_BODIES` |
| Fieldwork | `fieldwork.html` | `/fieldwork` | new `pages/fieldwork.vue` | `PROJECTS`, `ACHIEVEMENTS` |
| About | `about.html` | `/about` | `pages/about/index.vue` | Static |
| Ledger | `ledger.html` | `/ledger` | new `pages/ledger.vue` | None. Static. |

Redirects to add:

- `/projects` to `/fieldwork`
- `/predictions` to `/ledger`
- `/experiments?exp=S-04` style links to `/experiments/S-04`

`definePageMeta({ redirect: '/fieldwork' })` on a stub page is enough for the first two.

---

## 7. Page notes

### Home
- Hero left: kicker, H1 with the second clause in a `<span>` (that is what turns it blue), intro, three links.
- Hero right: `figure.loop`, the method loop. It is one inline SVG. Each step is an `<a>`: Fieldwork, Models, Ledger, Experiments, Essays. Wire them to the routes. Keep the SVG as a component (`LoopDiagram.vue`).
- "Currently": six cards. Create `data/research/now.js` from the six cards in `home.html` (icon, status, hollow or filled dot, type, title, text, foot, link). On phone the row becomes a scroll-snap carousel. The CSS already does it.
- Models grid: eight tiles in this order: M-07, M-06, M-11, M-10, M-05, M-03, M-09, M-01. On phone only the first four show. The CSS already does it.
- "Latest": use the five rows in `home.html`. The existing `latestWork` list in `pages/index.vue` shows a prediction id (`P-19`). Replace it.
- "Fieldwork": six projects in two columns.

### Models
- `ol.nine` is the strip of nine lenses. Static.
- Filters: All, Contemporary, Historical map to `era` (`now`, `past`). "All domains" is a dropdown over `DOMAINS`. Show the live count ("12 shown").
- The grid has class `grid all` so all twelve tiles show on phone.
- A `meta` of `IN PROGRESS` renders as a hollow status dot (`.st` with `i.o`), not as plain text.

### Model page
- The causal-loop diagram is specific to M-07. Make it a component (`DiagramM07.vue`). It has two SVGs: `svg.svg.dk` for desktop and `svg.svg.m` for phone. CSS swaps them.
- Add `facts` to `MODEL_DETAILS['M-07']`: Pattern, Binding constraint, Throughput cap, Revised. Values are in the reference page.
- Leverage tiers map to bars: LOW 1, MEDIUM 2, HIGH 3, EXTREME 4.
- Models with no detail entry: render the page head with the blurb and one line, "Full write-up not published yet."
- Sidebar "Produced" must not link to prediction entries. It says: "Logged privately. The ledger opens January 2027."

### Experiments
- Each row needs two things the data does not have yet. Add them to `EXPERIMENTS`:
  - `summary`: the one-line finding
  - `headline: { value, label }`: the big number on the right
- Values, from the reference page:

  | id | summary | headline |
  | --- | --- | --- |
  | S-05 | Peak pricing moves the most people, but by speeding up boarding rather than cutting demand. | `+10%`, Throughput, peak fare against flat |
  | S-04 | A bridge round thins the left tail and leaves the median almost untouched. | `13.4 mo`, Median runway |
  | S-03 | Split the population in two and the peak moves by the eleven days I got wrong. | `11 days`, Peak shift at low coupling |
  | S-02 | The loop reproduces the shape of the bubble and misses the timing, all of it in the delay term. | `8 months`, Timing error on the peak |
  | S-01 | none | none |

- The last row ("Two more runs are unpublished until their predictions resolve.") is static.

### Experiment page
- Sections: Assumptions (`rows`), Result, Mechanism in code (`code`), What the run changed (`finding`).
- The existing `bars` array is a decorative histogram. The design draws the three `stats` as real horizontal bars from a zero baseline. Add `chart: { title, unit, max, bars: [{ label, value, display, win }] }`. For S-05: Flat 268, Distance 241, Peak 295 (win), max 320.
- Only S-05 is drawn. For S-01 to S-04 use the same template. If an experiment has no `chart`, show its `stats` as a fact list instead.
- Code block keywords (`for`, `in`) are wrapped in `<i>` to turn them blue. Optional.
- Sidebar "Produced": drop `P-34` and say "1 prediction. Logged privately. The ledger opens January 2027."

### Essays
- Sort newest first. The design order is E-08, E-09, E-07, E-06, E-05. The current `date` strings do not sort, so add an ISO date or an `order` field.
- Replace the free-text `tag` and `tag2` with `kind` (Post-mortem, General, Historical, Personal) and `model` (for example `M-05`).
- The first row gets class `lead` for the larger title.
- Filters: All, Post-mortems, Historical, Personal.

### Essay page
- Body paragraphs go in `article.copy`. The last paragraph of E-09 is the pull quote (`p.pull`).
- The "Predicted +20% / Actual +4%" figure is specific to E-09. Make it an optional `figure` field.
- Sidebar "Revises": no link to a ledger entry. Use the wording in the reference page.
- Essays with no body: head plus dek plus "Full essay not published yet."

### Fieldwork
- Split `role` on ` · ` into role and place.
- Drop the `↗` from `linkLabel`. The arrow is the inline SVG `.xi`.
- Sort `ACHIEVEMENTS` newest first.
- No certificates section. The current site shows a placeholder there. Leave it out.
- Many `linkHref` values are `#`. Hide the link when it is `#`.

### About
- Static. H1, bio line, three paragraphs, the daily practice figure, the five systems, the eight learning layers, the four "currently exploring" items.

### Ledger
- Static. It explains the ledger and shows a sealed specimen entry with redaction bars. The calibration chart is intentionally empty.
- **No prediction entry may appear anywhere on the site before January 2027.** That is a decision Paul made.
- Remove the old `/predictions` page content and the homepage scoreboard. Do not import `data/research/predictions.js` anywhere. It is demo content. Delete it from the branch.
- Real ledger entries must never be committed to this repo before January. It is public.

---

## 8. Copy decisions (follow these exactly)

1. The name on the site is **Paul Imoke**.
2. Bio line: `futurist. systems engineering. building infra one step at a time.`
3. No "Month 04 of 06", no scoreboard, no "13 of 21 right". Anything about predictions says the ledger opens January 2027.
4. About H1 is "I spent years building systems. Now I study them." The number of years is left out on purpose. See section 10.
5. Fieldwork H1 is "The systems I built before I studied them".
6. Nav labels are Models, Experiments, Essays, Fieldwork, About, Ledger.
7. Where the reference HTML and a data file differ slightly in wording, the data file wins, except for the items in this list and in section 7.

---

## 9. Components (suggested)

Put them in `components/site/`. Keep the class names from `site.css`. Do not use `<style scoped>` for these classes.

- `SiteHeader.vue`, `SiteFooter.vue`
- `PageHead.vue`: kicker, title, standfirst, and a slot for the fact list on the right (`section.ph`)
- `FactList.vue` (`dl.facts`)
- `ModelTile.vue` (`a.tile`), `NowCard.vue` (`a.card`)
- `LoopDiagram.vue` (home hero), `DiagramM07.vue`
- `BarChart.vue` (`figure.fig.chart`)
- `SidebarBlock.vue` (`div.sb`), `PrevNext.vue` (`nav.pn`)

Icons used, all feather: `rotate-cw`, `activity`, `book-open`, `target`, `bar-chart-2`, `arrow-right-circle`, `chevron-down`, `arrow-up-right`, `arrow-right`. The paths are inline in the reference pages.

---

## 10. Open questions for Paul

Ask him. Do not guess.

1. **Years.** The current site says nine years of engineering, 2017 to 2026. The oldest project listed is 2021. Which number is right? It affects the About H1 and the Fieldwork intro.
2. **Starter content.** Which models, experiments and essays are real? Should the site launch with the rest removed, or kept and labelled as samples?
3. **Links.** Most project links are `#`. What are the real URLs? What is the LinkedIn URL?
4. **Certificates.** Is there a list, or does the section stay out?

---

## 11. QA before you open the PR

- [ ] `yarn generate` passes.
- [ ] Every route in section 6 matches its screenshot at 1440px and 390px.
- [ ] No horizontal scroll at 390px. The "Currently" carousel and code blocks scroll inside themselves. That is expected.
- [ ] Header active state is right on every page. The phone menu opens and closes.
- [ ] Filters on Models and Essays work and the count updates.
- [ ] `/projects` and `/predictions` redirect.
- [ ] No prediction entries, scoreboard or "Paul I." left anywhere. Search the build for `P-34`, `Brier`, `Paul I.` and `Month 04`.
- [ ] Legacy routes still render: `/work`, `/blog`.
- [ ] No secrets committed.

Reference heights with the reference copy, for a quick check. Real data text will move these a little.

| Page | 1440px | 390px |
| --- | --- | --- |
| Home | 3736 | 5010 |
| Models | 2085 | 4697 |
| Model M-07 | 3022 | 4155 |
| Experiments | 1811 | 2562 |
| Experiment S-05 | 2526 | 3519 |
| Essays | 1799 | 2500 |
| Essay E-09 | 2095 | 2895 |
| Fieldwork | 4083 | 5920 |
| About | 2640 | 4295 |
| Ledger | 1821 | 2804 |

---

## 12. Suggested order of work

1. Global setup: fonts, `site.css`, layout, header, footer. Commit.
2. Home. Commit.
3. Models and the model page. Commit.
4. Experiments and the experiment page. Commit.
5. Essays and the essay page. Commit.
6. Fieldwork, About, Ledger, redirects. Commit.
7. Remove `research-theme.css`, the predictions page and its data. Run the QA list.
8. Open the PR. Put the open questions from section 10 in the description.
