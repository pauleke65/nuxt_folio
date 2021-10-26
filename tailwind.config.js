module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '100': 100
       },
       spacing: {
         '324px': '324px',
         '25pr': '25%',
         '50pr': '50%',
         '45pr': '45%',
         '100': '26em',
         '30em':'30em',
         '100pr-2rem': 'calc(100% - 2rem)',
         '-100pr': '-100%',
         '45vw':'50vw',
         '45pr': '45%',
         '95pr': '95%',
         '-2': '-0.5rem',
         '80vh': '80vh',
         '115vw': '115vw',
         'max': 'max-content'
       },
       gridTemplateColumns: {
         '100pr': '100%'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
