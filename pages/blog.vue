<template>
    <div>
         <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
           rel="stylesheet"
      />
        <BlogNav/>

<div class="w-screen -ml-4 pr-2">
        <div class="w-full h-1/5 bg-green mt-20 flex justify-end md:pr-5">
      
      <div class="py-2  pl-3 pr-2 lg:w-3/12 border-gray-700 border-2 rounded-full flex ">
            <i class=' mr-2 self-center text-2xl bx bx-search-alt-2'/>
            <input class="self-center focus:outline-none w-full" name="" id="" placeholder="Search for posts here...">
            <i class=' ml-2 self-center text-2xl bx bx-x'/>
      </div>

       </div>
       <div class=" ml-10 lg:ml-32 my-6">
<BlogMain/>
<div v-if="$apollo.queries.posts.loading" class="h-80vh flex m-10">

<div class=" flex animate-pulse justify-center mt-10 h-72 w-95pr">
  <div class="bg-black w-40">

  </div>

  <div class="flex flex-col place-content-around">
    <div class=" ml-10 w-52 h-3 bg-gray-600 rounded-l-md rounded-r-md "></div>
    <div class=" ml-10 w-80 h-3 bg-gray-600 rounded-l-md rounded-r-md "></div>
    <div class=" ml-10 w-96 h-3 bg-gray-600 rounded-l-md rounded-r-md "></div>
    <div class=" ml-10 w-52 h-3 bg-gray-600 rounded-l-md rounded-r-md "></div>
    <div class=" ml-10 w-24 h-3 bg-gray-600 rounded-l-md rounded-r-md "></div>

  </div>
  
</div>
  
</div>

<h1>{{ JSON.stringify(posts) }}</h1>

</div>
       
  </div>
    </div>
</template>


<script>
  import gql from "graphql-tag";
  const ALL_POSTS_QUERY = gql`
query MyQuery {
  posts {
    slug
    id
    author {
      name
      picture {
        fileName
        url
      }
      title
    }
    content {
      markdown
      text
    }
  }
}


  `;
  export default {
    data() {
      return {
        posts: [],
        error: null,
      };
    },
    apollo: {
      posts: {
        query: ALL_POSTS_QUERY,
        prefetch: true,
        error(error) {
          this.error = JSON.stringify(error.message);
          console.log(this.error)
        },
      },
    },
  };
</script>