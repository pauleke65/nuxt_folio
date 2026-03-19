<script setup>
// modelValue / update:modelValue = v-model compatible search prop
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

function onSearch(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <nav class="bg-white py-4 fixed top-0 w-full px-4 lg:px-0 max-w-7xl z-50">
    <div class="flex flex-wrap items-center justify-between">

      <!-- Logo / Brand -->
      <NuxtLink to="/blog" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap">
          <span class="text-purple-700">Purple</span>Ember🔥
        </span>
      </NuxtLink>

      <div class="flex md:order-2">
        <!-- Mobile search icon (decorative — search field appears below) -->
        <button
          type="button"
          class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-sm p-2.5 mr-1"
          aria-label="Toggle search"
        >
          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </button>

        <!-- Desktop search input — wired to v-model via emit -->
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            :value="modelValue"
            @input="onSearch"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search posts…"
            aria-label="Search blog posts"
          />
        </div>

        <!-- Mobile hamburger -->
        <button
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Open menu"
        >
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Nav links + mobile search -->
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <!-- Mobile search input -->
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            :value="modelValue"
            @input="onSearch"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search posts…"
            aria-label="Search blog posts"
          />
        </div>

        <ul class="flex flex-col border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <!-- Fix: was <a href="..."> (hard reload) — now uses NuxtLink for client-side nav -->
          <li>
            <NuxtLink to="/blog" class="block py-2 text-lg font-semibold hover:text-purple-800">
              Blog Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="block py-2 text-lg font-semibold hover:text-purple-800">
              See Portfolio
            </NuxtLink>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>
