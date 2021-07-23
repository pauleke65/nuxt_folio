<template>
  <div class="flex flex-col ">

      <h1 class="text-6xl font-extrabold ml-6 mt-6">All Projects</h1>

<div class="h-screen pt-6 px-6 md:px-64">
    
    <div class="flex my-4">
        <div class="flex-initial">
            <img class="w-36 h-36 mr-6" src="../assets/images/nativescript-vue.svg" alt="">
        </div>
        <div class="flex-1">
            <h2 class="font-bold text-lg md:text-3xl">{{ Projects[0].project_name}}</h2>
            <div v-if="error">{{ error }}</div>
            <p class="mt-2 font-semibold">{{ Projects[0].project_subtitle}}</p>
            <div class="flex">
                <p class="my-1 mr-2">Built with ❤ using:</p>
                <img
                class="my-1 mr-2 w-6"
                src="../assets/images/nativescript-vue.svg"
                alt=""
              />
             

            </div>

            <NuxtLink class=" text-blue-500" :to="{ path: '/project/' + Projects[0].project_id }">Find Out More Here ></NuxtLink>
        </div>
    </div>

 
</div>
   
  </div>
</template>

<script>

import gql from 'graphql-tag'

const ALL_PROJECTS_QUERY = gql`
  query MyQuery {
  Projects {
    project_id
    project_image
    project_name
    project_subtitle
   
  }
}
`;
export default {

data(){
return {
  Projects: [],
  error: null
}
},

  apollo: {
    Projects: {
      query: ALL_PROJECTS_QUERY,
      prefetch: true,
      error(error) {

       this.error = JSON.stringify(error.message);

     }
    }
  }
  
}
</script>