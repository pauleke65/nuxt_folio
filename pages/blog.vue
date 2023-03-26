<template>
  <div class="mx-auto max-w-7xl px-2">
    <link
      href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      rel="stylesheet"
    />
    <BlogNav />

 
   
      <div class="   my-6 lg:mt-32 mt-20 mx-2 lg:mx-0">
        <BlogMain :posts="posts"  v-if="!$apollo.queries.posts.loading"/>
        <div v-if="$apollo.queries.posts.loading" class="h-80vh flex m-10">
          <div class=" flex animate-pulse justify-center mt-10 h-72 w-95pr">
            <div class="bg-black w-40"></div>

            <div class="flex flex-col place-content-around">
              <div
                class=" ml-10 w-52 h-3 bg-gray-600 rounded-l-md rounded-r-md "
              ></div>
              <div
                class=" ml-10 w-80 h-3 bg-gray-600 rounded-l-md rounded-r-md "
              ></div>
              <div
                class=" ml-10 w-96 h-3 bg-gray-600 rounded-l-md rounded-r-md "
              ></div>
              <div
                class=" ml-10 w-52 h-3 bg-gray-600 rounded-l-md rounded-r-md "
              ></div>
              <div
                class=" ml-10 w-24 h-3 bg-gray-600 rounded-l-md rounded-r-md "
              ></div>
            </div>
          </div>
        </div>


      </div>
   
  </div>
</template>

<script>
import gql from "graphql-tag";
const ALL_POSTS_QUERY = gql`
  query MyQuery {
    posts (orderBy: id_DESC) {
      id
      slug
      coverImage {
        url
      }
      title
      excerpt
      publishedAt
      author {
        name
      }
      category {
        name
      }
    }
  }
`;
export default {
  data() {
    return {
      posts: [],
      error: null
    };
  },
  apollo: {
    posts: {
      query: ALL_POSTS_QUERY,
      prefetch: true,
      error(error) {
        this.error = JSON.stringify(error.message);
        console.error(this.error);
      }
    }
  }
};
</script>
