<template>
  <section class=" w-full items-center pb-16 flex" id="portfolio">
    <div class="flex pt-8 flex-col items-center justify-center mx-auto max-w-5xl  ">
      <div
        class="rounded-full py-3 px-12 mx-auto w-64 h-auto font-bold my-8 text-2xl bg-white text-black text-center"
      >
        Portfolio
      </div>
      <router-link class="w-95pr" to="/projects">
        <div class="bg-cover relative flex">
          <img src="~/assets/images/projects.png" alt="" srcset="" />
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Works"
};
</script>
