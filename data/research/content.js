// Loads content/ at build time and hands the pages plain objects.
// Edit the files in content/ (or use /admin); nothing here needs touching.
import MarkdownIt from 'markdown-it'
import { buildContent } from '~/lib/content.mjs'

const glob = {
  models: import.meta.glob('../../content/models/*.yml', { query: '?raw', import: 'default', eager: true }),
  experiments: import.meta.glob('../../content/experiments/*.yml', { query: '?raw', import: 'default', eager: true }),
  essays: import.meta.glob('../../content/essays/*.md', { query: '?raw', import: 'default', eager: true }),
  single: import.meta.glob('../../content/*.yml', { query: '?raw', import: 'default', eager: true }),
}
const single = (name) => glob.single[`../../content/${name}.yml`] ?? ''

// Drafts show in `yarn dev` and on Netlify deploy previews, never in production.
/* global __SHOW_DRAFTS__ */
const showDrafts = typeof __SHOW_DRAFTS__ !== 'undefined' && __SHOW_DRAFTS__

const { content, errors } = buildContent({
  models: glob.models,
  experiments: glob.experiments,
  essays: glob.essays,
  now: single('now'),
  fieldwork: single('fieldwork'),
  home: single('home'),
}, { showDrafts })

// The build already refuses bad content (scripts/check-content.mjs); this is for `yarn dev`.
if (errors.length && import.meta.dev) console.warn('[content]\n' + errors.join('\n'))

// Essays are written in Markdown. Raw HTML is off, so a body can't inject markup.
const md = new MarkdownIt({ html: false, linkify: true, typographer: true })

export default content
export const essayBodies = Object.fromEntries(content.essays
  .filter((e) => e.body || e.pull)
  .map((e) => [e.id, { html: e.body ? md.render(e.body) : '', pull: e.pull, figure: e.figure, revises: e.revises, lineage: e.lineage }]))
