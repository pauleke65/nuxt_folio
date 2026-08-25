<script setup>
const route = useRoute()

const links = [
  { label: 'Research', to: '/', match: (p) => p === '/' },
  { label: 'Models', to: '/models', match: (p) => p.startsWith('/models') },
  { label: 'Predictions', to: '/predictions', match: (p) => p.startsWith('/predictions') },
  { label: 'Experiments', to: '/experiments', match: (p) => p.startsWith('/experiments') },
  { label: 'Essays', to: '/essays', match: (p) => p.startsWith('/essays') },
  { label: 'Projects', to: '/projects', match: (p) => p.startsWith('/projects') },
  { label: 'About', to: '/about', match: (p) => p.startsWith('/about') },
]

const isActive = (link) => link.match(route.path)
</script>

<template>
  <header
    style="position:sticky;top:0;z-index:50;background:rgba(244,241,232,.95);backdrop-filter:blur(6px);border-bottom:1px solid var(--ink)"
  >
    <div style="max-width:1180px;margin:0 auto;padding:0 28px;display:flex;align-items:stretch;justify-content:space-between;gap:20px;min-width:0">
      <NuxtLink
        to="/"
        style="display:flex;align-items:center;gap:10px;white-space:nowrap;flex:0 1 auto;min-width:0;overflow:hidden;font:500 14px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ink);padding:20px 0"
      >
        Paul I.<span style="white-space:nowrap;font:400 12px var(--mono);letter-spacing:.04em;text-transform:none;color:var(--dim)">systems research</span>
      </NuxtLink>
      <nav style="display:flex;align-items:stretch;gap:0;flex:none;min-width:0">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          style="position:relative;display:flex;align-items:center;padding:20px 9px;font:400 13px var(--mono);color:var(--ink);white-space:nowrap"
        >
          {{ link.label }}
          <span
            v-if="isActive(link)"
            style="position:absolute;left:9px;right:9px;bottom:0;height:2px;background:var(--accent)"
          ></span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
