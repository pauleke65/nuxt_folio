<template>
  <div class="flex flex-col md:flex-row">
    <div class=" bg-gray-700 h-72 md:h-100 md:w-7/12 rounded-md">
      <img
        :src="post.coverImage.url"
        alt=""
        class=" h-full w-full"
        style="object-fit: cover"
      />
    </div>

    <div class="flex justify-between flex-col md:w-5/12  md:pl-8">
      <div>
        <NuxtLink :to="{ path: '/posts/' + post.slug }">
          <!-- :to="{ path: '/posts/' + 'how-apple-google-and-amazons-visions-shaped-their-design-strategy' }"> -->

          <h1 class="text-3xl font-extrabold mt-2 md:mt-0 mb-4">
            {{ post.title }}
          </h1>
        </NuxtLink>
        <p class="text-gray-800">
          {{ post.excerpt }}
        </p>
        <p class="text-sm text-gray-500 mt-2">
          {{ post.category.name }} | {{ convertDate(post.publishedAt) }} by
          {{ post.author.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  name: "BlogTileHead",
  props: {
    post: {
      type: Object
    }
  },
  methods: {
    convertDate(date) {
      return moment(date).format("ll");
    }
  }
};
</script>

<style></style>
