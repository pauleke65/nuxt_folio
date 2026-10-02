// Runs before every build. Reads content/ with the same rules the site uses
// and stops the build with a plain list of problems, so a typo in the CMS or
// a hand edit can't ship a broken page.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildContent } from '../lib/content.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dir = (d, ext) => {
  const full = path.join(root, 'content', d)
  if (!fs.existsSync(full)) return {}
  return Object.fromEntries(fs.readdirSync(full).filter((f) => f.endsWith(ext)).map((f) => [`content/${d}/${f}`, fs.readFileSync(path.join(full, f), 'utf8')]))
}
const file = (name) => {
  const full = path.join(root, 'content', name)
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : ''
}

const { content, errors } = buildContent({
  models: dir('models', '.yml'),
  experiments: dir('experiments', '.yml'),
  essays: dir('essays', '.md'),
  now: file('now.yml'),
  fieldwork: file('fieldwork.yml'),
  home: file('home.yml'),
}, { showDrafts: true })

// The ledger is private until January 2027 and this repo is public.
// Real entries must never be committed before then.
if (Date.now() < Date.UTC(2027, 0, 1) && fs.existsSync(path.join(root, 'content', 'ledger'))) {
  errors.push('content/ledger: ledger entries must not be committed before January 2027 (the repo is public)')
}

if (errors.length) {
  console.error(`\nContent check failed (${errors.length}):\n` + errors.map((e) => `  - ${e}`).join('\n') + '\n')
  process.exit(1)
}
console.log(`Content check passed: ${content.models.length} models, ${content.experiments.length} experiments, ${content.essays.length} essays.`)
