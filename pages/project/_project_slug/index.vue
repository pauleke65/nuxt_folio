<template>
  <div class="pt-8 sm:px-28 md:px-48 px-6 flex flex-col h-screen">
    <div class="flex flex-col md:flex-row mb-8">
      <img class=" h-auto  md:h-96 mb-4" :src="Project.project_image" alt="" />

      <div class="flex flex-col md:ml-8 ">
        <h2 class="font-bold text-2xl">{{ Project.project_name }}</h2>

        <div class="flex flex-col md:flex-row">
          <div v-if="error">{{ error }}</div>
          <p class="my-1 mr-2">Built with ❤ using:</p>
          <div class="flex flex-row ">
            <img
              v-for="projectTools in Project.ProjectTools"
              :key="projectTools.id"
              class="my-1 mr-2 w-6"
              :src="projectTools.Tool.image_url"
              alt=""
            />
          </div>
        </div>

        <p class="mt-2 text-justify">
          {{ Project.description }}
        </p>

        <button
          class="bg-white mt-4 border-2 hover:text-white hover:bg-black border-black py-1 w-28"
        >
          <a :href="Project.project_url" class="mt-2 font-bold">Check It Out</a>
        </button>
      </div>
    </div>

    <hr />
    <h3 class="my-4 font-semibold text-xl">Screenshots</h3>
    <div class="flex">
      <div class="flex overflow-x-auto flex-nowrap">
        <div class="flex-none p-2"  v-for="projectVideo in Project.ProjectVideos"
          :key="projectVideo.project_video_id">
          <iframe class=" mx-auto h-82 md:h-100 w-45vw mb-4"
           
            :src="projectVideo.video_url"
            allowfullscreen
          >
          </iframe>
        </div>

        <div
          v-for="projectImage in Project.ProjectImages"
          :key="projectImage.project_image_id"
          class="p-2 flex-none"
        >
          <img
            class=" mx-auto h-80 md:h-100 mb-4"
            :src="projectImage.image_url"
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
    query MyQuery($_eq: String = "") {
      Projects(where: { project_slug: { _eq: $_eq } }) {
        project_name
        project_image
        description
        project_slug
        project_url
        ProjectTools {
          Tool {
            image_url
          }
        }
        ProjectImages {
          image_url
          project_image_id
        }
        ProjectVideos {
          video_url
          project_video_id
        }
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
          _eq: params.project_slug,
        },
        error(error) {
          this.error = JSON.stringify(error.message);
        },
      });

      const Project = res.data.Projects[0];

      return {
        Project,
      };
    },
  };
</script>
