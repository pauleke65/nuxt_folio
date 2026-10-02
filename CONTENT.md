# Editing the research site

Everything you write on the site lives in `content/` as plain text files: one file per model, experiment and essay, and three small files for the home page and Fieldwork. You can change them three ways. Each one ends the same way: a commit on GitHub, then Netlify rebuilds the site in a minute or two.

| Way | Good for |
| --- | --- |
| **The editor at `/admin`** | Day-to-day writing and fixes, from any browser, phone included. Forms, a Markdown editor, image upload. |
| **GitHub's web editor** | A quick typo fix: open the file on github.com, press the pencil, commit. |
| **Locally, or by asking Claude** | Bigger changes, new page types, anything in the page layouts. |

Most content is still demo content. To replace it with the real thing, work through [`docs/QUESTIONNAIRE.md`](docs/QUESTIONNAIRE.md) with Claude: it interviews you and turns your answers into these files.

Because every change is a commit, the repository's history is a public, timestamped record of what changed and when. That is what backs the footer line "Nothing here is edited after the fact".

## Signing in to `/admin`

Use **Sign In with GitHub**. It needs a one-time setup (about five minutes), because GitHub sign-in has to go through a small service that holds a secret. Netlify provides that service for free.

### One-time setup

1. **Create a GitHub OAuth app.**
   1. On GitHub, go to **Settings → Developer settings → OAuth Apps → New OAuth App** (https://github.com/settings/applications/new). Fill in:
      - **Application name:** `Paul Imoke site editor` (anything works)
      - **Homepage URL:** `https://paulimoke.com`
      - **Authorization callback URL:** `https://api.netlify.com/auth/done` (exactly this)
   2. Press **Register application**.
   3. Copy the **Client ID**. Then press **Generate a new client secret** and copy the secret; GitHub shows it only once.
2. **Give it to Netlify.**
   1. Open https://app.netlify.com/projects/paulimoke/configuration/security#oauth (**Project configuration → Security → OAuth**).
   2. Under **Authentication providers**, choose **Install provider → GitHub**.
   3. Paste the Client ID and the secret, then save.
3. **Sign in.** Open `/admin`, press **Sign In with GitHub**, and approve the app once. After that, the button signs you straight in, and the browser stays signed in until you sign out.

It works the same on paulimoke.com, on deploy previews and on `localhost`: `public/admin/config.yml` names the Netlify site (`site_domain: paulimoke.netlify.app`).

**Who can edit?** Anyone can press the button, but saving needs write access to `pauleke65/nuxt_folio`. A stranger who signs in can't change anything. To cut off a device, revoke the app's access under GitHub **Settings → Applications → Authorized OAuth Apps**.

**Fallback:** **Sign In Using Access Token** still works. Make a fine-grained token at **Settings → Developer settings → Personal access tokens → Fine-grained tokens**. Limit it to `pauleke65/nuxt_folio`, with **Contents: Read and write**, and paste it in.

### Where `/admin` saves

- On the **live site**, it saves to `main`, and the live site rebuilds.
- On a **deploy preview** (a pull request), it saves to that pull request's branch, and only the preview rebuilds. That makes a preview a safe place to try things out.

## What lives where

| On the site | File | Notes |
| --- | --- | --- |
| Essays list and essay pages | `content/essays/E-09.md` | Frontmatter at the top, essay in Markdown below. |
| Models list and model pages | `content/models/M-07.yml` | `detail` is the full write-up. Leave it off to show "Full write-up not published yet." |
| Experiments list and run pages | `content/experiments/S-05.yml` | Add `chart` to draw bars; without it, `stats` shows as a fact list. |
| Home "Currently" cards | `content/now.yml` | |
| Home model tiles, and their order | `content/home.yml` | Eight look best. Phones show the first four. |
| Home "Latest" rows | Built automatically | The five newest essays, runs and model revisions, by date. A model joins the list when you set its `updated` date. |
| Fieldwork projects and achievements | `content/fieldwork.yml` | A `linkHref` of `#` (or empty) hides the link. `featured: 1–6` puts a project on the home page. |

These parts are written into the page code rather than `content/`; ask Claude or edit `pages/`:
- the About page
- the Ledger page
- the home hero
- page intros
- the M-07 diagram (`components/site/DiagramM07.vue`).

## Common jobs

**Publish an essay.**
1. In `/admin`, go to **Essays → New Essay**.
2. Give it the next ID (`E-10`), a title, a date, a kind and a standfirst.
3. Write the body in the Markdown field. Headings, lists, links, quotes, code and images all work.
4. For a pull quote, put the line in **Pull quote**. It is set large after the body.
5. Tick **Draft** first if you want to see it on a deploy preview before it goes live.

**Revise a model.** Edit the model and update its kicker (`Model · Transit · v4`) and its **Revised** fact. Add a line at the top of **Revisions**, then set **Last revised** and **Latest list wording** so it appears on the home page.

**Add a run.** Use the next ID (`S-06`), and fill in **Assumptions**, **Results**, **Mechanism, in code** and **What the run changed**. Add a **Result chart** if a bar chart tells it better than a fact list.

**Change the home page.** Edit the cards under **Home & Fieldwork → Currently**. To change which models show on the home page and in what order, use **Home page models**.

## Drafts

`draft: true` (the **Draft** box) hides an entry from the live site. It still shows when you run `yarn dev` and on Netlify deploy previews. The repository is public, though, so a draft is readable on GitHub. Don't put anything in a draft you wouldn't publish.

## If a build fails

Every build first runs `yarn check:content`, which reads `content/` and stops the build on problems such as:
- a missing title or date, or an impossible date
- two entries with the same ID
- an essay or run pointing at a model that doesn't exist
- an unknown leverage tier.

The live site stays on its last good version. The Netlify deploy log shows a plain list, for example:

```
Content check failed (1):
  - content/essays/E-10.md: model M-99 does not exist
```

Fix that file (in `/admin` or on GitHub) and the next commit rebuilds. You can run the same check locally with `yarn check:content`.

## The ledger

Prediction entries stay private until the ledger opens in **January 2027**, and this repository is public. Real entries must never be committed here before then, not even as drafts. The build refuses a `content/ledger/` folder before that date. The "Produced" and "Revises" fields name predictions only in general terms ("Logged privately. The ledger opens January 2027.").

## Images

Images uploaded in `/admin` go to `public/uploads/` and are served from `/uploads/…`. Keep them reasonably small (under 500 KB). They sit in the repository forever.
