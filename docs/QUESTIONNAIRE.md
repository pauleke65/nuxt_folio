# Site questionnaire

Most of the research site is still demo content from the prototype. This questionnaire collects the real information, so the site can say only true things about you and your work.

## How to use it (Paul)

1. Start a Claude Code session on this repository and say: **"Run the questionnaire in docs/QUESTIONNAIRE.md."**
2. Answer by typing or voice, as loosely as you like. Claude asks follow-ups and turns your answers into site copy.
3. Skip anything. "Not sure", "later" and "keep it private" are all fine answers.
4. After each section, Claude shows you the exact changes to the site and commits them only after you say yes.
5. You don't have to finish in one sitting. Claude can see which sections are done from the site itself and from the commits.

Start with the **★ questions** if you're short on time: they are the ones the site needs before launch. Part 0 is the four open questions from the redesign.

---

## Instructions for Claude (the interviewer)

Read these before asking anything.

**Running the interview**
- Go one part at a time, three to five questions per message. Ask in plain, friendly language; don't paste the question IDs at Paul.
- Each question quotes what the site says now, where relevant. Show that wording and ask whether it's true, rather than asking from a blank page.
- Follow up on vague answers. Ask for dates, numbers, names, links and one concrete example. "I led the team" → "How many people, for how long, and what did you decide that someone else wouldn't have?"
- Never invent or embellish. If an answer is missing, leave the existing neutral copy, or hide the item with `draft: true`. Say which you did.
- Keep Paul's voice: first person, short plain sentences, British spelling (programme, behaviour, modelling), no hype words. Read the current pages first to match the tone.

**Privacy (the repository is public)**
- Before writing any answer into the site, ask: is this something Paul wants public? Check whenever an answer touches clients, money, health, family, faith, location or anything said "off the record".
- **Never write prediction entries anywhere in this repository before January 2027**, not even as drafts or notes. That means the claim, the probability, the deadline or the mechanism of a specific prediction. If Paul starts sharing one, stop him gently and say it belongs in his private ledger. Counts ("I've logged 14") are fine if he's happy to publish them.
- Don't commit the raw transcript or a file of answers. Answers go straight into the site's files. If Paul wants a full record of his answers, offer to save one somewhere private (Google Drive or a Claude doc), not in this repo.
- Client work: confirm each company and project can be named, and that numbers (users, revenue, funding) are publishable.

**Turning answers into changes**
- `CONTENT.md` explains where everything lives. Each question below ends with **→ where the answer goes**.
- After each part:
  1. Propose the edits as a short list: file, then old → new.
  2. Wait for a yes, then apply them.
  3. Run `yarn check:content`, then commit with a message like "About: real years and learning layers".
  4. For page code (`pages/*.vue`), keep the classes and markup; change only the words.
- If an answer changes the design itself (a photo, a new section, a removed page), note it as a design change and ask before building it.
- At the end, list anything still unanswered so Paul can come back to it.

---

## Part 0 · The four open questions ★

These came out of the redesign and block launch.

- **0.1 ★ Years.** The old site said nine years of engineering, 2017 to 2026. The oldest project listed is 2021. When did you start: first code, first paid work, first full-time engineering role? What number do you want the site to use, and what counts?
  → About H1 ("I spent years building systems"), Fieldwork intro, Achievements range ("2021 to 2026"), essay E-05's title
- **0.2 ★ Which content is real?** Go through the demo models (M-01 to M-12), experiments (S-01 to S-05) and essays (E-05 to E-09) one by one. For each one: real, partly real, or invented? Then: keep, rewrite, or remove? If you'd rather keep invented ones up, should they be labelled as samples?
  → `content/models/`, `content/experiments/`, `content/essays/` (delete, or `draft: true`)
- **0.3 ★ Links.**
  - What are the real URLs for each project? BLIA, Agrolinking, Sustineri, MEST/RegWand, AMTAP, WSTC (Play Store), Menji (Play Store) and the SEC write-up.
  - Is `linkedin.com/in/paul-imoke-010a941bb/` your current LinkedIn?
  → `content/fieldwork.yml` (`linkHref`), `components/site/SiteFooter.vue`
- **0.4 ★ Certificates.** Do you want a certificates section? If yes: which ones, issuer, year, and a link or file for each.
  → new section (design change), or stays out

---

## Part 1 · Identity and contact ★

- **1.1 ★** The site uses "Paul Imoke" throughout. Is that the name you want? Any title, middle name or initials?
  → header, page titles
- **1.2 ★** The bio line on About reads: "futurist. systems engineering. building infra one step at a time." Keep it exactly, including the lower case? Or rewrite it?
  → About
- **1.3 ★** Where are you based, and do you want the city or country on the site?
  → About, possibly footer
- **1.4 ★** The footer email is pauleke65@gmail.com. Is that the address you want public, or do you want a domain address (e.g. paul@paulimoke.com)?
  → footer
- **1.5 ★** Social links: X `@iampeke65`, GitHub `pauleke65`, LinkedIn. Add any others (Substack, YouTube, Bluesky, Scholar, ORCID)? Remove any?
  → footer, About
- **1.6** Do you have a CV (PDF) that should be downloadable? Is it current? Should recruiters see it?
  → Fieldwork "For recruiters" box
- **1.7** The footer says: "Open to research collaboration, data access and commissioned systems analysis." Is that true and current? What kinds of collaboration do you want? Who do you most want to hear from? Is there anything you don't want to be contacted about?
  → footer, About
- **1.8** The Fieldwork page says: "For recruiters: Engineering by exception. Research collaboration first." Is that your actual stance? Are you open to engineering work right now? Full-time, contract or advisory? Remote only?
  → Fieldwork
- **1.9** Do you want a photo of yourself anywhere? (The approved design has none, so adding one is a design change.)
- **1.10** The domain: will this research site replace the portfolio at paulimoke.com, or live somewhere else (e.g. a subdomain)?

---

## Part 2 · The big picture: what this site is ★

- **2.1 ★** In one sentence, what do you do now? Say it the way you'd say it to a stranger at dinner.
  → home intro, page descriptions, social share text
- **2.2 ★** The home headline is: "I work out how systems actually behave, then publish predictions I can be wrong about." Is that accurate today? Is publishing predictions really central to what you do, or is it a smaller part?
  → home hero
- **2.3 ★** The home intro says: "Cities, energy, money, institutions. Different domains, same parts: actors, stocks, flows, information, incentives and delay. I map each system the same nine ways, test the map against history, and log what I expect it to do next." What's true here, what's aspirational, and what's wrong?
  → home hero
- **2.4** Who is the site for? Rank them: future collaborators, funders or grant bodies, employers or recruiters, readers who want to learn, your own record-keeping, others.
- **2.5** What should a first-time visitor do after reading? Follow on X, email you, read an essay, subscribe, something else?
  → home links, footer
- **2.6** Why "systems research" rather than "systems thinking", "complexity", "policy" or "futures"? Is "futurist" (from your bio) a word you want on the site?
- **2.7 ★** The method is the loop on the home page: observe (Fieldwork) → model → predict (Ledger) → test (Experiments) → explain (Essays). Is that how you actually work? Is any step missing, or out of order?
  → home loop diagram
- **2.8** The nine lenses on the Models page are: Actors, Resources, Information, Incentives, Feedback, Constraints, Bottlenecks, Failure modes, Leverage points. Are these your nine? Where did they come from (Meadows, your own synthesis, a course)? Would you rename or reorder any?
  → Models page
- **2.9** What does success look like in one year? And in ten?
- **2.10** "One system gets the next decade." Is that the plan? How and when will you decide which one?
  → About

---

## Part 3 · The shift from building to studying (About) ★

- **3.1 ★** The About H1 is: "I spent years building systems. Now I study them." Keep it once the number of years is settled? Or with the number in ("I spent nine years…")?
  → About
- **3.2 ★** First paragraph today: "Lead engineer across seven companies in four countries: a property marketplace, agricultural traceability on Stellar, a court and trial management system, a mobile bank, four products at an accelerator…"
  - Is "seven companies in four countries" accurate? Which companies and which countries?
  - Is "lead engineer" accurate for all of them?
  → About, Fieldwork intro
- **3.3 ★** What actually made you change direction? Was there a moment, a project or a failure where you realised you cared more about the system than the code? Tell the story, with details.
  → About (paragraph 1 or 2), possibly essay E-05
- **3.4 ★** The site says: "A six-month intensive, ninety to a hundred and twenty minutes a day, six days a week." When did it start? When does it end? Which month are you in now? What happens after the six months?
  → About, home "Currently"
- **3.5** "I still ship software. It is no longer the point." True? What software are you still shipping, and for whom (your own studio, clients, employers)?
  → About
- **3.6** "I am not picking one field yet. More evidence first." What evidence are you waiting for? What would make you pick?
  → About
- **3.7** Is there anything about your background (education, where you grew up, languages, earlier interests) that explains why systems pull at you? How much of that do you want public?
- **3.8** Faith appears in your learning layers ("Theology: order, purpose, and what a system is for"). How do you want it represented: openly, briefly, or not at all? What does it actually change in how you study systems?
  → About learning layers

---

## Part 4 · The daily practice (About) ★

The About page shows a bar: 30 min studying, 45 min modelling, 15 min in the prediction ledger, and the rest writing.

- **4.1 ★** Is that split real? What does a normal session look like, start to finish?
  → About "The daily practice"
- **4.2** What time of day, and where? Do you track the hours? If you do, how many have you logged so far?
- **4.3** What tools do you use for each part? For example:
  - for modelling: Python, NetLogo, Mesa, Vensim, Stella, Insight Maker, a spreadsheet, pen and paper?
  - for notes: Obsidian, Notion, paper?
  → About, possibly a new "Tools" line
- **4.4** Which days are off, and what happens on them?
- **4.5** What part of the practice is hardest to keep, and what have you changed about it so far?

---

## Part 5 · Systems you keep coming back to (About)

The About page lists five candidates with a "pull" rating:
1. Cities, and how people move through them — strongest
2. Energy: who gets power, and who pays for it — strongest
3. How money reaches people who need it — maybe
4. How organisations decide things — maybe
5. Education, and what it actually produces — maybe

- **5.1 ★** Is this list right? Add, remove, reword, re-rank?
  → About "Systems I keep coming back to"
- **5.2** For each one you keep: why does it pull at you? Is there a personal experience behind it (a commute, a power cut, a loan, a school)?
- **5.3** Which one have you returned to most without being asked, since you started?
- **5.4** Is there a system you're deliberately avoiding, and why?

---

## Part 6 · What you're learning, and why (About) ★

The About page lists eight layers, in order:

| # | Layer | Topics |
| --- | --- | --- |
| 1 | Foundation | Systems thinking |
| 2 | Mathematics | Probability, statistics, modelling |
| 3 | Dynamics | Control theory, dynamical systems |
| 4 | Behaviour | Psychology, economics, game theory |
| 5 | Networks | Network science |
| 6 | Complexity | Complex adaptive systems |
| 7 | Theology | Order, purpose, and what a system is for |
| 8 | Reality | History, politics, biology, technology |

- **6.1 ★** Is this your real curriculum and order? What would you change?
  → About "What I'm learning, in order"
- **6.2 ★** Which layer are you on now? Which are done, in progress, or not started?
  → About (could show progress), home "Currently"
- **6.3 ★** For each layer, why is it there? What question does it help you answer that the layer before can't?
  → About (short), essays (long)
- **6.4 ★** For each layer, what are you actually using: books, courses, papers, people? Titles and authors, with status (done, reading, next).
  → About, home "Currently" cards
- **6.5** The home page says you're reading Donella Meadows's *Thinking in Systems*. True? Where are you in it? What has stuck?
  → `content/now.yml`
- **6.6** Do you have mentors, a study group, or people you check your models with?
- **6.7** What have you found hardest so far, and what was easier than you expected?
- **6.8** What's the one idea from your learning so far that changed how you see a system you used to build?
  → essay candidate

---

## Part 7 · Currently: this month's desk (home page) ★

There are six cards on the home page today:
- Model M-12 *Internet infrastructure and resilience*, in progress
- Study: *Delay and oscillation*, exploring
- Book: *Thinking in Systems*, reading
- Ledger: *Calibration, not cleverness*, logging
- Experiments: *Two runs waiting on their predictions*
- Next model: *Informal credit*

The About page repeats four "currently exploring" items: Delay and oscillation; Historical backtests; Calibration, not cleverness; Theology and order.

- **7.1 ★** What is really on your desk this month? For each item: what it is, its status (in progress, reading, exploring, waiting, next), one line on what you're doing with it, and where it links.
  → `content/now.yml`, About "Currently exploring"
- **7.2** "I'm overconfident above 80%." Is that something you've measured, or a guess? (Only the habit, not specific predictions.)
- **7.3** Are there really two experiment runs waiting on predictions? If not, what should that card say?
  → `content/now.yml`, Experiments page facts
- **7.4** Is "Informal credit" really the next model? Why that one?
  → `content/now.yml`, Models page
- **7.5** "Last month it was network science." True? What did you get out of it?
  → About
- **7.6** How often will you update this section, realistically: monthly, every two weeks? It says "Changes monthly".

---

## Part 8 · Models ★

First do question 0.2 for each model. Then, for every model that's real or in progress, go through 8.1 to 8.12. Ask one model at a time. For anything not done yet, "I haven't worked that out yet" is a fine answer; that model shows "Full write-up not published yet."

- **8.1 ★** ID, title, domain, era (contemporary or historical), and the year or period it's about.
  → `content/models/M-xx.yml`
- **8.2 ★** One line: what's the system, and what's the surprising part?
  → `blurb`
- **8.3 ★** Status and record. Is it built, in progress or backtested? How many experiments and essays came out of it? You can include a count of logged predictions only if you're happy to publish the number.
  → `meta`
- **8.4** The question you were trying to answer, and why you picked this system.
  → `detail.lede`
- **8.5** Structure. The main stocks (things that accumulate), the flows that change them, and the feedback loops, each one reinforcing or balancing. Describe them in words; Claude can sketch a causal loop diagram from that. Which loop dominates?
  → `detail.facts` (Pattern), diagram (design work)
- **8.6** Actors: who are the four to six main actors, and what does each one actually optimise for?
  → `detail.actors`
- **8.7** Resources, information and constraints. What is scarce? Who knows what, and when? What's the binding constraint? What caps throughput?
  → `detail.facts`
- **8.8** Delays: where are they, and how long are they?
- **8.9** Failure modes: how does this system break?
- **8.10** Leverage points, ranked LOW, MEDIUM, HIGH and EXTREME. What would you change, and why?
  → `detail.leverage`
- **8.11 ★** Falsifier: what observation would prove the model wrong?
  → `detail.falsifier`
- **8.12** Sources and data: where do your numbers come from, and how good are they? Revision history: versions and dates, with what changed each time.
  → `detail.revisions`, `detail.facts` (Revised)
- **8.13** Any new models that aren't on the list yet?

---

## Part 9 · Experiments

First do question 0.2 for each run. Then, for every real run:

- **9.1** ID, title, date, method (agent-based, Monte Carlo, system dynamics, historical backtest, field test), and how many runs or sims.
  → `content/experiments/S-xx.yml`
- **9.2** The question it tested, and which model it tests.
  → `lede`, `relatedModel`
- **9.3** Assumptions, as five label → value pairs (population, rates, time window…).
  → `rows`
- **9.4** The result in numbers (three key stats), and the one-line finding.
  → `stats`, `summary`, `headline`
- **9.5** Would a bar chart show the result better? If so: the bars and their values.
  → `chart`
- **9.6** The core mechanism as code. Can you share real code, or a simplified version? Is the full code public anywhere (e.g. a GitHub repo to link)?
  → `code`
- **9.7** What the run changed in your thinking, including "nothing".
  → `finding`
- **9.8** What it produced: model revisions, essays, a count of predictions logged.
  → `produced`
- **9.9** Any experiments in progress, or planned, that aren't listed?

---

## Part 10 · Essays

First do question 0.2 for each essay. Then:

- **10.1** For each real essay: title, date, read time, kind (post-mortem, general, historical, personal), related model, and a one- or two-sentence standfirst.
  → `content/essays/E-xx.md`
- **10.2** The full text. Paste it, or point to where it lives (a Google Doc, Substack, Notes). Claude formats it as Markdown and picks a pull quote for you to approve.
- **10.3** Does it revise a past prediction? Describe it only in general terms; the entry itself stays private until January 2027.
  → `revises`
- **10.4** Where did the idea come from: read, model, apply or challenge?
  → `lineage`
- **10.5** What essays are half-written or planned? List titles and one-line ideas. Should any go up as drafts on previews only?
- **10.6** E-05, "Nine years inside systems I could not name", is personal. Is that a real essay you want to write? (It also depends on 0.1.)
- **10.7** The old site has a blog (on Hygraph) at `/blog`. Should those posts move into Essays? Stay where they are? Be retired?
- **10.8** Do you publish anywhere else (Substack, Medium, LinkedIn, X threads)? Should essays be cross-posted, or link out?
- **10.9** How often do you realistically want to publish?

---

## Part 11 · Fieldwork: the engineering record ★

The site lists nine projects. For **each** project, confirm or correct 11.1 to 11.7. Quote the current description back to Paul.

- **11.1 ★** Name, as it should appear. Can the client or company be named publicly?
  → `content/fieldwork.yml`
- **11.2 ★** Period, start and end. Is it ongoing?
  → `period`
- **11.3 ★** Your exact role, and where: city or country, remote or on site.
  → `role` ("Role · Place")
- **11.4 ★** What you built, in two to four sentences: the system, the hard part, and the result. Use numbers if they're publishable (users, time saved, funding, uptime).
  → `description`
- **11.5** Team size, and what you owned versus shared.
- **11.6** The system lesson: what did building it teach you about how systems behave? This links Fieldwork to the research.
  → `description`, home "Fieldwork" line (`short`)
- **11.7** The link: URL and label. Is the product still live?
  → `linkHref`, `linkLabel`
- **11.8 ★** Are there projects missing, especially from before 2021 if your career starts earlier? Freelance work, open source, your own studio or agency, teaching?
- **11.9** Which six projects should appear on the home page, in what order?
  → `featured`, `short`
- **11.10 ★** Achievements. Verify each one, and add any that are missing (awards, grants, hackathons, talks, publications, open-source milestones):
  - HNG i8 top finalist (2023)
  - Technology Lead at MEST Africa (2023)
  - $20,000 Stellar Development Foundation grant (2026)
  - led distributed teams across Nigeria, Ghana, Dubai and the USA (2021–26)
  - SEC Nigeria monitoring automation (2021)
  → `achievements`
- **11.11** "Seven companies and four countries": recount them with the final list.
  → Fieldwork intro, About

---

## Part 12 · The ledger (process only, no predictions here) ★

> Claude: don't record or write any specific prediction from this part into the repository. Process and counts only.

- **12.1 ★** The site says the ledger opens in **January 2027**. Is there an exact date? Is it still the plan?
  → Ledger page, footer, model and experiment sidebars
- **12.2 ★** Where do you keep predictions privately until then? Is that place timestamped, so the record is provable later (e.g. a private repo, signed and dated notes)?
- **12.3** Are the four rules on the Ledger page your actual rules?
  1. Logged before the outcome is known.
  2. Every call has a mechanism, a probability and a deadline.
  3. Nothing is edited after the fact.
  4. The wrong ones stay up, with the reason attached.

  → Ledger page
- **12.4** Every entry has six parts: claim, mechanism, probability, deadline, falsifier and sources. Right?
  → Ledger page
- **12.5** Roughly how many predictions have you logged so far? Can that number be public?
- **12.6** When the ledger opens: how should it work on the site (one page per prediction, or a list), and how will you announce it? The page says "I'll say so on X the day it opens."
- **12.7** Do you want to be notified, or reminded, before January to prepare the opening?

---

## Part 13 · Voice and style

- **13.1** Three words for how the site should sound. Three words it must never sound like.
- **13.2** Any words or phrases you never want used? (e.g. "passionate", "leverage" as a verb, "thought leader")
- **13.3** British or American spelling? The site currently uses British.
- **13.4** Em dashes: some of the data files use them and the design avoids them. Which do you prefer?
- **13.5** Writers or sites whose voice you admire? Links help.

---

## Part 14 · The rest of the site

- **14.1** The legacy pages (`/work`, `/blog`, `/certificates`, the old portfolio home): keep, redirect into the research site, or retire?
- **14.2** Newsletter: the old site had a newsletter popup. Do you have a list? Should the research site offer a subscribe link, and where (footer, essay pages)?
- **14.3** Analytics: do you want visitor numbers? Which tool, if any? (It needs a privacy-friendly choice, and is a small build.)
- **14.4** The social share image and description: what should a link to the site show on X or LinkedIn?
- **14.5** Should any page or section be added that isn't there? Reading list, talks, a "now" page, uses or tools?
- **14.6** Is there anything on the site now that you dislike, or that feels untrue?

---

## Part 15 · Wrap-up

- **15.1** Anything important about you or your work that none of these questions reached?
- **15.2** Anything that must never appear on the site?
- **15.3** Who should read the site before it launches (a friend, a mentor), and what should they check?
- **15.4** When do you want to launch, and what has to be true by then?

Claude: finish by listing every question still unanswered or marked "later", grouped by part, so Paul can pick up there next time.
