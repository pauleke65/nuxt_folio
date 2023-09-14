<template>
  <div class="pt-8 sm:px-28 md:px-48 px-6 flex flex-col h-screen">
    <div class="flex flex-col md:flex-row mb-8">
      <img class=" h-auto  md:h-96 md:w-96 mb-4 object-scale-down" :src="project.image.url" alt="" />

      <div class="flex flex-col md:ml-8 ">
        <h2 class="font-bold text-2xl">{{ project.name }}</h2>

        <div class="flex flex-col md:flex-row">
          <div v-if="error">{{ error }}</div>
          <p class="my-1 mr-2">Built with ❤ using:</p>
          <div class="flex flex-row ">
            <img
              v-for="tool in project.tools"
              :key="tool.id"
              class="my-1 mr-2 w-6"
              :src="tool.image.url"
              alt=""
            />
          </div>
        </div>

        <p class="mt-2 text-justify">
          {{ project.description }}
        </p>

        <button
          class="bg-white mt-4 border-2 hover:text-white hover:bg-black border-black py-1 w-28"
        >
          <a :href="project.url" target="_blank" class="mt-2 font-bold">Check It Out</a>
        </button>
      </div>
    </div>

    <hr />
    <h3 class="my-4 font-semibold text-xl">Screenshots</h3>
    <div class="flex">
      <div class="flex overflow-x-auto flex-nowrap">
        <div class="flex-none p-2"  v-for="projectVideo in project.project_videos"
          :key="projectVideo">
          <iframe class=" mx-auto h-82 md:h-100 w-45vw mb-4"
           
            :src="projectVideo"
            allowfullscreen
          >
          </iframe>
        </div>

        <div
          v-for="projectImage in project.project_image"
          :key="projectImage.id"
          class="p-2 flex-none"
        >
          <img
            class=" mx-auto h-80 md:h-100 mb-4"
            :src="projectImage.url"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import gql from "graphql-tag";

  const PROJECT_QUERY = gql`
query MyQuery($slug: String = "") {
  project(where: {slug: $slug}) {
    name
    image {
      id
      url
    }
    description
    slug
    url
    tools {
      name
      image {
        url
      }
    }
    project_image {
      url
    }
    project_videos
  }
}

  `;
  export default {
    data() {
      return {
        error: null,
        
      };
    },
    async asyncData({ app, params }) {
      const client = app.apolloProvider.defaultClient;

    

      const res = await client.query({
        query: PROJECT_QUERY,
        prefetch: true,
        variables: {
          slug: params.project_slug,
        },
        error(error) {
          this.error = JSON.stringify(error.message);
          console.log(error);
        },
      });
      
  
      const project = res.data.project;

      return {
        project,
      };
    },
  };
</script>
