<template>
  <div>
    <div class="mb-8 ">
      <BlogTileHead :post="posts[0]" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BlogTile :post="posts[1]" />
      <BlogTile  :post="posts[2]" />
    </div>

    <!-- <div
      class="flex flex-row justify-between items-center my-4 sticky top-2 bg-gray-100 py-3 px-3 md:px-8 shadow-xl lg:ml-20 mr-6 lg:mr-52"
    >
      <p
        :class="[
          'text-md',
          'md:text-xl',
          { notActive: selectedIndex != 0 },
          { active: selectedIndex == 0 }
        ]"
        @click="setIndex(0)"
      >
        All
      </p>
      <p
        :class="[
          'text-md',
          'md:text-xl',
          { notActive: selectedIndex != 1 },
          { active: selectedIndex == 1 }
        ]"
        @click="setIndex(1)"
      >
        Personal
      </p>
      <p
        :class="[
          'text-md',
          'md:text-xl',
          { notActive: selectedIndex != 2 },
          { active: selectedIndex == 2 }
        ]"
        @click="setIndex(2)"
      >
        Tech
      </p>
      <p
        :class="[
          'text-md',
          'md:text-xl',
          { notActive: selectedIndex != 3 },
          { active: selectedIndex == 3 }
        ]"
        @click="setIndex(3)"
      >
        Christian
      </p>
      <p
        :class="[
          'text-md',
          'md:text-xl',
          { notActive: selectedIndex != 4 },
          { active: selectedIndex == 4 }
        ]"
        @click="setIndex(4)"
      >
        Poetry
      </p>
    </div> -->

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
      <BlogTile v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogMain",
  props: {
    posts: {
      type: Array
    }
  },
  data() {
    return {
      selectedIndex: 3
    };
  },
   computed: {
    filteredPosts() {
      return this.posts.slice(3);
    }
  },
  methods: {
    setIndex(index) {
      this.selectedIndex = index;
    }
  }
};
</script>

<style>
.active {
  --tw-bg-opacity: 1;
  background-color: rgba(252, 211, 77, var(--tw-bg-opacity));
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem /* 8px */;
  padding-left: 1rem /* 24px */;
  padding-right: 1rem /* 24px */;
  font-weight: 800;
}

.notActive {
  font-weight: 400;
}
</style>
