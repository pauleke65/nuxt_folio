<template>
  <div class="flex flex-col ">
    <h1 class="text-6xl font-extrabold ml-6 mt-6">All Projects</h1>

    <div class="h-screen pt-6 px-6 md:px-64">
      <div class="flex my-4 " v-for="project in Projects" :key="project.id">
        <div class="flex-initial">
          <img
            class=" h-52 mr-6"
            :src="project.project_image"
            alt=""
          />
        </div>
        <div class="flex-1">
          <h2 class="font-bold text-lg md:text-3xl">
            {{ project.project_name }}
          </h2>

          <p class="mt-2 font-semibold">{{ project.project_subtitle }}</p>
          <div class="flex">
            <p class="my-1 mr-2" >Built with ❤ using:</p>
            <div v-for="projectTools in project.ProjectTools" :key="projectTools.id">
            <img
              class="my-1 mr-2 w-6"
              :src="projectTools.Tool.image_url"
              alt=""
            />
            
            </div>
          </div>

          <NuxtLink
            class=" text-blue-500"
            :to="{ path: '/project/' + project.project_slug }"
            >Find Out More Here ></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  const ALL_PROJECTS_QUERY = gql`
 query MyQuery {
  Projects(where: {ProjectTools: {id: {_is_null: false}}}, order_by: {project_id: asc}) {
    project_name
    project_image
    project_subtitle
    ProjectTools {
      id
      Tool {
        image_url
        tool_id
      }
      
    }
    project_slug
  }
}

  `;
  export default {
    data() {
      return {
        Projects: [],
        error: null,
      };
    },
    apollo: {
      Projects: {
        query: ALL_PROJECTS_QUERY,
        prefetch: true,
        error(error) {
          this.error = JSON.stringify(error.message);
        },
      },
    },
  };
</script>
