// Reads the files in content/ and turns them into what the pages render.
// Pure: it takes raw file text, so the site (via import.meta.glob) and the
// build-time checker (scripts/check-content.mjs, via fs) share one parser
// and one set of rules.
import { parse } from 'yaml'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty']

export const ESSAY_KINDS = ['Post-mortem', 'General', 'Historical', 'Personal']
export const LEVERAGE_TIERS = ['LOW', 'MEDIUM', 'HIGH', 'EXTREME']
export const ICONS = ['rotate-cw', 'activity', 'book-open', 'target', 'bar-chart-2', 'arrow-right-circle']

/** "Twelve", "Five"… for counts in running copy. */
export const numberWord = (n) => WORDS[n] ?? String(n)

/** "2026-08-02" → "02 Aug". */
export const shortDate = (iso) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso ?? ''))
  return m ? `${m[3]} ${MONTHS[Number(m[2]) - 1]}` : ''
}

const isIso = (v) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v ?? ''))
  if (!m) return false
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]))
  return d.getUTCMonth() === +m[2] - 1 && d.getUTCDate() === +m[3]
}

/** Split "---\nyaml\n---\nbody" into { data, body }. */
export function parseFrontmatter(raw) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!m) return { data: {}, body: raw }
  return { data: parse(m[1]) ?? {}, body: m[2] }
}

const fileName = (path) => path.split('/').pop()
// YAML may give numbers where the pages expect text (year: 2026).
const str = (v) => (v === undefined || v === null ? v : String(v))
const strRows = (rows) => (rows ?? []).map((r) => ({ k: str(r.k), v: str(r.v) }))

/**
 * Build everything the site renders.
 * files: { models, experiments, essays: { [path]: rawText }, now, fieldwork, home: rawText }
 * Returns { content, errors }. Pages use content; the checker fails on errors.
 */
export function buildContent(files, { showDrafts = false } = {}) {
  const errors = []
  const err = (where, msg) => errors.push(`${where}: ${msg}`)
  const need = (where, obj, keys) => keys.forEach((k) => {
    if (obj[k] === undefined || obj[k] === null || obj[k] === '') err(where, `missing "${k}"`)
  })
  const load = (where, fn) => {
    try { return fn() } catch (e) { err(where, `cannot be read (${e.message.split('\n')[0]})`); return null }
  }
  const visible = (item) => showDrafts || !item.draft

  // Models
  const allModels = Object.entries(files.models ?? {}).map(([path, raw]) => {
    const where = `content/models/${fileName(path)}`
    const m = load(where, () => parse(raw))
    if (!m) return null
    need(where, m, ['id', 'title', 'domain', 'era', 'year', 'blurb'])
    if (m.id && !/^M-\d{2,}$/.test(m.id)) err(where, `id "${m.id}" should look like M-13`)
    if (m.era && !['now', 'past'].includes(m.era)) err(where, `era must be "now" or "past", not "${m.era}"`)
    if (m.updated && !isIso(m.updated)) err(where, `updated "${m.updated}" should be a date like 2026-08-18`)
    for (const l of m.detail?.leverage ?? []) {
      if (!LEVERAGE_TIERS.includes(l.tier)) err(where, `leverage tier "${l.tier}" should be one of ${LEVERAGE_TIERS.join(', ')}`)
    }
    return { ...m, year: str(m.year), meta: str(m.meta ?? ''), order: Number(m.order ?? 999), where }
  }).filter(Boolean)

  // Experiments
  const allExperiments = Object.entries(files.experiments ?? {}).map(([path, raw]) => {
    const where = `content/experiments/${fileName(path)}`
    const e = load(where, () => parse(raw))
    if (!e) return null
    need(where, e, ['id', 'title', 'iso', 'kind', 'runs', 'lede', 'code', 'finding'])
    if (e.id && !/^S-\d{2,}$/.test(e.id)) err(where, `id "${e.id}" should look like S-06`)
    if (e.iso && !isIso(e.iso)) err(where, `iso "${e.iso}" should be a date like 2026-08-14`)
    if (e.chart) {
      if (!(Number(e.chart.max) > 0)) err(where, 'chart.max must be a number above 0')
      for (const b of e.chart.bars ?? []) if (Number(b.value) > Number(e.chart.max)) err(where, `chart bar "${b.label}" is above chart.max`)
    }
    return {
      ...e,
      iso: str(e.iso),
      date: shortDate(e.iso),
      runs: str(e.runs),
      rows: strRows(e.rows),
      stats: strRows(e.stats),
      facts: e.facts ? strRows(e.facts) : undefined,
      run: e.run ? strRows(e.run) : undefined,
      produced: (e.produced ?? []).map((p) => ({ ...p, n: str(p.n) })),
      relatedModel: e.relatedModel ?? null,
      where,
    }
  }).filter(Boolean)

  // Essays (Markdown with frontmatter; the body is the essay)
  const allEssays = Object.entries(files.essays ?? {}).map(([path, raw]) => {
    const where = `content/essays/${fileName(path)}`
    const parsed = load(where, () => parseFrontmatter(raw))
    if (!parsed) return null
    const e = parsed.data
    need(where, e, ['id', 'title', 'iso', 'readTime', 'kind', 'dek'])
    if (e.id && !/^E-\d{2,}$/.test(e.id)) err(where, `id "${e.id}" should look like E-10`)
    if (e.iso && !isIso(e.iso)) err(where, `iso "${e.iso}" should be a date like 2026-08-02`)
    if (e.kind && !ESSAY_KINDS.includes(e.kind)) err(where, `kind should be one of ${ESSAY_KINDS.join(', ')}`)
    return { ...e, iso: str(e.iso), date: shortDate(e.iso), readTime: str(e.readTime), body: parsed.body.trim(), where }
  }).filter(Boolean)

  // Ids are unique, and links between files point at something real.
  for (const [label, list] of [['model', allModels], ['experiment', allExperiments], ['essay', allEssays]]) {
    const seen = new Map()
    for (const item of list) {
      if (seen.has(item.id)) err(item.where, `${label} id ${item.id} is also used by ${seen.get(item.id)}`)
      else seen.set(item.id, item.where)
    }
  }
  const modelIds = new Set(allModels.map((m) => m.id))
  for (const e of allExperiments) if (e.relatedModel && !modelIds.has(e.relatedModel)) err(e.where, `relatedModel ${e.relatedModel} does not exist`)
  for (const e of allEssays) if (e.model && !modelIds.has(e.model)) err(e.where, `model ${e.model} does not exist`)

  // Single files
  const now = load('content/now.yml', () => parse(files.now ?? '')) ?? {}
  for (const [i, c] of (now.cards ?? []).entries()) {
    const where = `content/now.yml card ${i + 1}`
    need(where, c, ['icon', 'status', 'type', 'title', 'text', 'foot', 'to'])
    if (c.icon && !ICONS.includes(c.icon)) err(where, `icon should be one of ${ICONS.join(', ')}`)
  }
  const fieldwork = load('content/fieldwork.yml', () => parse(files.fieldwork ?? '')) ?? {}
  for (const [i, p] of (fieldwork.projects ?? []).entries()) need(`content/fieldwork.yml project ${i + 1}`, p, ['name', 'period', 'title', 'role', 'description'])
  for (const [i, a] of (fieldwork.achievements ?? []).entries()) need(`content/fieldwork.yml achievement ${i + 1}`, a, ['year', 'text'])
  const home = load('content/home.yml', () => parse(files.home ?? '')) ?? {}
  for (const id of home.models ?? []) if (!modelIds.has(id)) err('content/home.yml', `model ${id} does not exist`)

  // What the pages get
  const models = allModels.filter(visible).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))
  const experiments = allExperiments.filter(visible).sort((a, b) => b.iso.localeCompare(a.iso))
  const essays = allEssays.filter(visible).sort((a, b) => b.iso.localeCompare(a.iso))

  // The dropdown lists domains in the order they first appear.
  const domains = [...new Set(models.map((m) => m.domain))]

  const modelDetails = Object.fromEntries(models.filter((m) => m.detail).map((m) => [m.id, {
    ...m.detail,
    title: m.title,
    facts: strRows(m.detail.facts),
    produced: (m.detail.produced ?? []).map((p) => ({ ...p, n: str(p.n) })),
    revisions: (m.detail.revisions ?? []).map(str),
  }]))

  // Home "Latest": model revisions, runs and essays, newest first.
  const latest = [
    ...models.filter((m) => m.updated).map((m) => ({ iso: str(m.updated), title: m.updateNote || m.title, type: 'Model', id: m.id, to: `/models/${m.id}` })),
    ...experiments.map((e) => ({ iso: e.iso, title: e.title, type: 'Experiment', id: e.id, to: `/experiments/${e.id}` })),
    ...essays.map((e) => ({ iso: e.iso, title: e.title, type: e.kind === 'Post-mortem' ? 'Post-mortem' : 'Essay', id: e.id, to: `/essays/${e.id}` })),
  ].sort((a, b) => b.iso.localeCompare(a.iso)).slice(0, 5).map((r) => ({ ...r, date: shortDate(r.iso) }))

  const homeModels = (home.models ?? []).map((id) => models.find((m) => m.id === id)).filter(Boolean)

  return {
    errors,
    content: {
      models, domains, modelDetails, experiments, essays,
      now: (now.cards ?? []).filter(visible),
      projects: (fieldwork.projects ?? []).filter(visible).map((p) => ({ ...p, period: str(p.period), linkHref: p.linkHref ?? '#', linkLabel: p.linkLabel ?? '' })),
      achievements: (fieldwork.achievements ?? []).map((a) => ({ year: str(a.year), text: a.text })),
      homeModels,
      latest,
    },
  }
}
