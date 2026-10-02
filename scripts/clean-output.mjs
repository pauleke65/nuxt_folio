// Start every build from an empty output folder. Netlify reuses its working
// copy between builds and Nuxt doesn't remove stale files, so an old
// _redirects ("/* /404.html 404" from a previous preset) kept shipping and
// turned every deep link into a 404. Never fails the build: if the folder
// can't be removed, it removes the stale routing files instead.
import fs from 'node:fs'

const stale = ['.output/public/_redirects', '.output/public/_headers', '.output/public/nitro.json']

for (const dir of ['.output', 'dist']) {
  try {
    fs.rmSync(dir, { recursive: true, force: true })
  } catch (e) {
    console.warn(`clean-output: could not remove ${dir} (${e.code ?? e.message})`)
  }
}
for (const file of stale) {
  try {
    if (fs.existsSync(file)) { fs.rmSync(file, { force: true }); console.log(`clean-output: removed stale ${file}`) }
  } catch (e) {
    console.warn(`clean-output: could not remove ${file} (${e.code ?? e.message})`)
  }
}
console.log(`clean-output: ${fs.existsSync('.output') ? '.output kept, stale routing files cleared' : 'starting from an empty .output'}`)
