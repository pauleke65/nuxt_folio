<script setup>
import FeatherIcon from './FeatherIcon.vue'

const route = useRoute()
const open = ref(false)

const links = [
  { label: 'Models', to: '/models' },
  { label: 'Experiments', to: '/experiments' },
  { label: 'Essays', to: '/essays' },
  { label: 'Fieldwork', to: '/fieldwork' },
  { label: 'About', to: '/about' },
  { label: 'Ledger', to: '/ledger', tag: 'Jan' },
]

// Detail pages (/models/M-07, /experiments/S-05) light up their parent.
const isActive = (link) => route.path === link.to || route.path.startsWith(link.to + '/')

watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="hd w">
    <NuxtLink class="mark" to="/"><FeatherIcon name="rotate-cw" />Paul Imoke</NuxtLink>
    <nav class="nav" aria-label="Main">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ on: isActive(link) }">{{ link.label }}<em v-if="link.tag">{{ link.tag }}</em></NuxtLink>
    </nav>
    <button
      class="menu"
      type="button"
      :aria-label="open ? 'Close menu' : 'Open menu'"
      :aria-expanded="open ? 'true' : 'false'"
      aria-controls="site-menu"
      @click="open = !open"
    ><i></i>Menu</button>
  </header>
  <nav v-show="open" id="site-menu" class="mn w" aria-label="Menu">
    <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ on: isActive(link) }">{{ link.label }}<em v-if="link.tag">{{ link.tag }}</em></NuxtLink>
  </nav>
</template>

<style>
/* Phone menu. The approved design shows only the closed button, so this is
   the agreed build: a full-width list under the header, UI font at 18px,
   hairline between rows. Desktop never shows it. */
.r .mn{display:none}
@media (max-width:760px){
.r .mn{display:block;border-bottom:1px solid var(--line)}
.r .mn a{display:flex;align-items:center;min-height:56px;font-family:var(--fu);font-weight:var(--wn);font-size:18px;color:var(--ink);border-bottom:1px solid var(--line)}
.r .mn a:last-child{border-bottom:0}
.r .mn a.on{color:var(--accent)}
.r .mn em{font-style:normal;font-family:var(--fl);font-weight:var(--wl);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-left:8px}
}
</style>
