// Light/dark theme. The class on <html> is set before first paint by the inline
// script in nuxt.config.js, so this only reads it back and handles the switch.
export function useTheme() {
  const theme = useState('theme', () => 'dark')

  onMounted(() => {
    theme.value = document.documentElement.classList.contains('light') ? 'light' : 'dark'
  })

  function apply(next) {
    document.documentElement.classList.toggle('light', next === 'light')
    theme.value = next
    try { localStorage.setItem('theme', next) } catch { /* private mode: still switches for this visit */ }
  }

  // Grow the new theme out of the point that was clicked, where the browser supports it.
  function toggle(event) {
    const next = theme.value === 'light' ? 'dark' : 'light'
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduceMotion) {
      apply(next)
      return
    }
    const rect = event?.currentTarget?.getBoundingClientRect?.()
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
    const y = rect ? rect.top + rect.height / 2 : 0
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const transition = document.startViewTransition(() => apply(next))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return { theme, toggle }
}
