<template>
  <section class="pt-4 px-0 mt-0 pb-8 flex" id="about">
    <div class="flex flex-col h-full max-w-4xl mx-auto justify-center">
      <div>
        <img
          class="rounded-full mx-auto h-44 w-44"
          :src="siteData.profileImage.url"
          alt=""
        />
      </div>
      <div
        class="rounded-full py-3 px-12 mb-12 mx-auto font-bold mt-8 bg-white text-black text-center"
      >
        About Me
      </div>

      <div class="text-white mx-4">
        <p class="text-center  mb-6 text-xl ">
          {{ siteData.aboutMe }}
        </p>

        <div
          class="flex w-95pr justify-center sm:justify-evenly flex-col sm:flex-row"
        >
          <button
            class="rounded-full py-3 sm:mb-12 px-8 font-bold mt-8 bg-yellow-500 text-white text-center text-lg"
            @click="downloadResume(siteData.resumeLink.url)"
          >
            Download Resume ↓
          </button>

          <NuxtLink
            to="/certificates"
            class="rounded-full py-3 px-12 mb-12 font-bold mt-8 bg-yellow-500 text-white text-center text-lg"
          >
            See Certificates
          </NuxtLink>
        </div>

        <div class="mt-12 flex flex-col">
          <p class="ml-4 my-1 text-2xl font-bold text-center mb-6 text-white">
            My Favorite Tools
          </p>
          <div
            class="grid mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            <div
              v-for="tool in tools"
              :key="tool.id"
              class="bg-white w-40 h-40 justify-center flex flex-col"
            >
              <img
                class="mt-2 w-20 mb-4 mx-auto"
                :src="tool.image.url"
                alt=""
              />
              <p class="text-black text-xl text-center">{{ tool.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {
    siteData: {
      type: Object
    },
    tools: {
      type: Array
    }
  },
  methods: {
    downloadResume(link) {
      window.location.href = link;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
