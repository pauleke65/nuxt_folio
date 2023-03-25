<template>
  <NuxtLink :to="{ path: '/posts/' + post.slug }">
  <div class="flex-col">
    <div class=" bg-gray-700 h-64 lg:h-80 w-full rounded-md">
      <img
        :src="post.coverImage.url"
        alt=""
        class=" h-full w-full object-cover "
     
      />
    </div>

    <div class="flex justify-between flex-col mb-4 md:mb-8">
      <div>
        <h1 class="text-2xl font-extrabold mb-2 mt-2">
          {{ post.title }}
        </h1>
        <p class="text-gray-800">
         {{ post.excerpt }}
        </p>
        <p class="text-sm text-gray-500 mt-2">
         {{post.category.name}} | {{ convertDate(post.publishedAt) }} by
          {{ post.author.name }}
        </p>
      </div>
    </div>
  </div>
  </NuxtLink>
</template>

<script>
var moment = require("moment");
export default {
  name: "BlogTile",
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
