<script setup>
const { theme, toggle } = useTheme()
const isLight = computed(() => theme.value === 'light')
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isLight"
    :aria-label="isLight ? 'Switch to dark mode' : 'Switch to light mode'"
    :title="isLight ? 'Lights off' : 'Lights on'"
    class="toggle"
    :class="{ 'is-light': isLight }"
    @click="toggle"
  >
    <!-- Night sky -->
    <span class="star s1" aria-hidden="true"></span>
    <span class="star s2" aria-hidden="true"></span>
    <span class="star s3" aria-hidden="true"></span>
    <!-- Day sky -->
    <span class="cloud" aria-hidden="true"></span>
    <!-- Moon that turns into the sun -->
    <span class="knob" aria-hidden="true">
      <span class="crater c1"></span>
      <span class="crater c2"></span>
    </span>
  </button>
</template>

<style scoped>
.toggle {
  position: relative;
  width: 58px;
  height: 30px;
  border-radius: 999px;
  overflow: hidden;
  flex-shrink: 0;
  background: linear-gradient(135deg, #1a1d3b, #2b2f5c);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  transition: background 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;
}
.toggle.is-light {
  background: linear-gradient(135deg, #8fd3ff, #4fb0f0);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.toggle:focus-visible {
  outline: 2px solid #eab308;
  outline-offset: 3px;
}

.knob {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #e9e5da;
  box-shadow: 0 0 8px rgba(233, 229, 218, 0.35);
  transition:
    transform 0.55s cubic-bezier(0.68, -0.4, 0.27, 1.4),
    background 0.4s ease,
    box-shadow 0.4s ease;
}
.is-light .knob {
  transform: translateX(28px) rotate(180deg);
  background: #ffc93c;
  box-shadow: 0 0 0 3px rgba(255, 201, 60, 0.35), 0 0 14px rgba(255, 170, 0, 0.7);
}
.toggle:hover .knob {
  transform: translateX(2px);
}
.toggle.is-light:hover .knob {
  transform: translateX(26px) rotate(180deg);
}

.crater {
  position: absolute;
  border-radius: 50%;
  background: #c9c3b3;
  transition: opacity 0.3s ease;
}
.c1 { width: 6px; height: 6px; top: 5px; left: 9px; }
.c2 { width: 4px; height: 4px; top: 12px; left: 5px; }
.is-light .crater { opacity: 0; }

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.5s ease, opacity 0.4s ease;
  animation: twinkle 2.4s ease-in-out infinite;
}
.s1 { top: 8px; left: 36px; }
.s2 { top: 17px; left: 44px; animation-delay: 0.8s; }
.s3 { top: 10px; left: 49px; width: 3px; height: 3px; animation-delay: 1.5s; }
.is-light .star {
  opacity: 0;
  transform: translateY(-10px);
}

.cloud {
  position: absolute;
  top: 15px;
  left: 6px;
  width: 16px;
  height: 6px;
  border-radius: 6px;
  background: #fff;
  opacity: 0;
  transform: translateY(12px);
  transition: transform 0.5s ease 0.1s, opacity 0.4s ease 0.1s;
}
.cloud::before {
  content: '';
  position: absolute;
  left: 3px;
  top: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
}
.is-light .cloud {
  opacity: 0.95;
  transform: translateY(0);
}

@keyframes twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@media (prefers-reduced-motion: reduce) {
  .knob, .star, .cloud, .crater, .toggle { transition: none; animation: none; }
}
</style>
