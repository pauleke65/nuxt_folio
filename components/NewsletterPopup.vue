<script setup>
const visible = ref(false)
const email = ref('')
const submitted = ref(false)
const loading = ref(false)

onMounted(() => {
  if (localStorage.getItem('newsletter_dismissed')) return
  setTimeout(() => { visible.value = true }, 3000)
})

function dismiss() {
  visible.value = false
  localStorage.setItem('newsletter_dismissed', '1')
}

async function subscribe() {
  if (!email.value || !email.value.includes('@')) return
  loading.value = true
  // Replace with your actual newsletter API endpoint (e.g. Mailchimp, ConvertKit, etc.)
  await new Promise(r => setTimeout(r, 900))
  loading.value = false
  submitted.value = true
  localStorage.setItem('newsletter_dismissed', '1')
  setTimeout(() => { visible.value = false }, 2500)
}
</script>

<template>
  <Transition name="popup">
    <div
      v-if="visible"
      class="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4 sm:p-6"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        @click="dismiss"
        aria-hidden="true"
      />

      <!-- Card -->
      <div class="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl">

        <!-- Close -->
        <button
          @click="dismiss"
          class="absolute top-4 right-4 text-white/30 hover:text-white/80 transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <!-- Submitted state -->
        <div v-if="submitted" class="text-center py-4">
          <div class="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <p class="text-white font-semibold text-lg mb-1">You're in!</p>
          <p class="text-white/40 text-sm">I'll keep you posted on new articles & projects.</p>
        </div>

        <!-- Form state -->
        <div v-else>
          <!-- Label -->
          <div class="flex items-center gap-2 mb-5">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
            <span class="text-white/40 text-xs tracking-widest uppercase">Newsletter</span>
          </div>

          <h3 class="text-white font-bold text-2xl leading-snug mb-2">
            Stay in the loop
          </h3>
          <p class="text-white/40 text-sm leading-relaxed mb-7">
            Get new articles, project breakdowns, and dev insights delivered to your inbox. No spam, unsubscribe anytime.
          </p>

          <form @submit.prevent="subscribe" class="flex flex-col gap-3">
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              required
              class="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 placeholder:text-white/25 focus:outline-none focus:border-yellow-500/50 transition-colors"
            />
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-yellow-500 text-black font-semibold text-sm py-3 rounded-xl hover:bg-yellow-400 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span v-if="loading" class="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin"></span>
              <span>{{ loading ? 'Subscribing…' : 'Subscribe →' }}</span>
            </button>
          </form>

          <button
            @click="dismiss"
            class="mt-4 w-full text-white/25 text-xs hover:text-white/50 transition-colors text-center"
          >
            No thanks
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup-enter-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.popup-leave-active {
  transition: opacity 0.25s ease, transform 0.2s ease;
}
.popup-enter-from {
  opacity: 0;
  transform: translateY(24px) scale(0.97);
}
.popup-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}
</style>
