/** @type {import('tailwindcss').Config} */
module.exports = {
  // Fix: was using deprecated `purge` key pointing to non-existent ./src directory
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      spacing: {
        '324px': '324px',
        '25pr': '25%',
        '50pr': '50%',
        '45pr': '45%',
        '95pr': '95%',
        '100': '26em',
        // Fix: h-82 was used in project detail page but never defined
        '82': '20.5em',
        '30em': '30em',
        '100pr-2rem': 'calc(100% - 2rem)',
        '-100pr': '-100%',
        '45vw': '50vw',
        '80vh': '80vh',
        '115vw': '115vw',
        '-2': '-0.5rem',
        'max': 'max-content',
      },
      gridTemplateColumns: {
        '100pr': '100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
