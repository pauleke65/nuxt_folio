// After a Netlify build, point the /admin editor at the branch being built.
// A deploy preview then edits its own pull request branch (and each save
// rebuilds the preview); production keeps editing main. Only the built copy
// in dist/ changes, never public/admin/config.yml itself.
import fs from 'node:fs'

const file = 'dist/admin/config.yml'
const branch = process.env.HEAD
const context = process.env.CONTEXT

if (!branch || context === 'production' || !fs.existsSync(file)) process.exit(0)

const config = fs.readFileSync(file, 'utf8')
if (new RegExp(`^\\s*branch:\\s*${branch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm').test(config)) process.exit(0) // already done
const next = config.replace(/^(\s*branch:\s*)main\s*$/m, `$1${branch}`)
if (next === config) {
  console.error(`cms-branch: no "branch: main" line found in ${file}`)
  process.exit(1)
}
fs.writeFileSync(file, next)
console.log(`cms-branch: /admin on this ${context} deploy edits branch "${branch}"`)
