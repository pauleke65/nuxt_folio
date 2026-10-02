// Light / dark theme for the research site. With nothing saved, the site
// follows the system setting through CSS alone; picking a theme here saves it.
export function useTheme() {
  const theme = useState('theme', () => 'light')

  const systemDark = () => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

  const sync = () => {
    const set = document.documentElement.getAttribute('data-theme')
    theme.value = set === 'dark' || set === 'light' ? set : (systemDark() ? 'dark' : 'light')
  }

  const toggle = () => {
    const next = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch (e) { /* private mode: still switches for this visit */ }
    theme.value = next
  }

  onMounted(() => {
    sync()
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', sync)
    onBeforeUnmount(() => mq.removeEventListener('change', sync))
  })

  return { theme, toggle }
}
