<script setup>
// Draws a project's card art. Every cover fills its parent, so the parent sets the aspect ratio.
const props = defineProps({
  project: { type: Object, required: true },
  // 'card' for grids, 'hero' for the top of a case study (bigger type)
  size: { type: String, default: 'card' },
  eager: { type: Boolean, default: false },
})

const cover = computed(() => props.project.cover ?? { type: 'type' })
const accent = computed(() => props.project.accent ?? '#EAB308')
const loading = computed(() => (props.eager ? 'eager' : 'lazy'))
</script>

<template>
  <div class="relative w-full h-full overflow-hidden bg-neutral-900">
    <!-- Full-bleed image -->
    <img
      v-if="cover.type === 'image'"
      :src="cover.src"
      :alt="cover.alt ?? project.name"
      :loading="loading"
      class="cover-zoom absolute inset-0 w-full h-full object-cover object-top"
    />

    <!-- Phone screenshots on a tinted panel -->
    <div
      v-else-if="cover.type === 'phones'"
      class="absolute inset-0 flex items-end justify-center gap-[6%] px-[8%] pt-[7%]"
      :style="{ background: `radial-gradient(120% 90% at 50% 100%, ${accent}55 0%, ${accent}14 45%, #111 100%)` }"
    >
      <div
        v-for="(src, i) in cover.srcs.slice(0, 2)"
        :key="src"
        class="cover-zoom relative w-[34%] aspect-[9/19] rounded-t-[1.1rem] overflow-hidden border-[3px] border-b-0 border-paper/15 bg-ink shadow-2xl shadow-ink/60"
        :class="i === 1 ? 'phone-offset' : ''"
      >
        <img
          :src="src"
          :alt="i === 0 ? (cover.alt ?? project.name) : ''"
          :loading="loading"
          class="w-full h-full object-cover object-top"
        />
      </div>
    </div>

    <!-- Logo on a plate -->
    <div
      v-else-if="cover.type === 'logo'"
      class="absolute inset-0 flex items-center justify-center"
      :style="{ background: cover.bg ?? '#fff' }"
    >
      <img
        :src="cover.src"
        :alt="cover.alt ?? project.name"
        :loading="loading"
        class="cover-zoom w-[55%] max-h-[40%] object-contain"
      />
    </div>

    <!-- Typographic cover -->
    <div v-else class="absolute inset-0" :style="{ background: '#0d0d0d' }">
      <div
        class="absolute inset-0"
        :style="{ background: `radial-gradient(90% 120% at 100% 0%, ${accent}66 0%, ${accent}1f 38%, transparent 70%)` }"
      ></div>
      <div class="absolute inset-0 cover-grid"></div>
      <!-- Concentric rings in the accent colour -->
      <div class="cover-zoom absolute -right-[12%] -top-[30%] w-[70%] aspect-square rounded-full border" :style="{ borderColor: `${accent}55` }"></div>
      <div class="cover-zoom absolute -right-[2%] -top-[12%] w-[46%] aspect-square rounded-full border" :style="{ borderColor: `${accent}40` }"></div>
      <div class="cover-zoom absolute right-[10%] top-[6%] w-[22%] aspect-square rounded-full" :style="{ background: `${accent}33` }"></div>

      <div class="absolute inset-0 flex flex-col justify-between" :class="size === 'hero' ? 'p-8 sm:p-14' : 'p-6 sm:p-8'">
        <span
          class="uppercase tracking-[0.2em] font-medium"
          :class="size === 'hero' ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-[11px]'"
          :style="{ color: accent }"
        >{{ project.org }}</span>
        <ul
          class="font-semibold leading-[1.05] tracking-tight"
          :style="{ fontSize: size === 'hero' ? 'clamp(1.75rem, 4.5vw, 3.75rem)' : 'clamp(1.35rem, 2.4vw, 2rem)' }"
        >
          <li
            v-for="(tech, i) in project.stack.slice(0, 3)"
            :key="tech"
            :class="['text-paper', 'text-paper/45', 'text-paper/20'][i]"
          >{{ tech }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(to top, black, transparent 85%);
}
.cover-zoom {
  transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
}
:global(.group:hover) .cover-zoom {
  transform: scale(1.04);
}
.phone-offset {
  transform: translateY(8%);
}
:global(.group:hover) .phone-offset.cover-zoom {
  transform: translateY(4%) scale(1.04);
}
</style>
