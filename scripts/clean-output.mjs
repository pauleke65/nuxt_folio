// Remove routing files a previous build may have left behind. Netlify reuses
// its working copy between builds and Nuxt doesn't delete stale files, so an
// old _redirects ("/* /404.html 404", written by Nuxt's netlify-static
// preset) kept shipping and turned every deep link into a 404.
// Only these files go, and the build never fails here.
import fs from 'node:fs'

for (const file of ['_redirects', '_headers', 'nitro.json']) {
  const path = `.output/public/${file}`
  try {
    if (fs.existsSync(path)) { fs.rmSync(path, { force: true }); console.log(`clean-output: removed stale ${path}`) }
  } catch (e) {
    console.warn(`clean-output: could not remove ${path} (${e.code ?? e.message})`)
  }
}
