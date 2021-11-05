<template>
  <div class="flex flex-col h-screen">
    <BlogNav />
    <main class=" mt-16 flex-1 overflow-y-auto p-5">
      <div>
        <img
          :src="post.coverImage.url"
          alt=""
          class=" h-30em w-full"
          style="object-fit: cover"
        />
        <h1 class="text-center text-3xl font-extrabold mt-4">
          {{ post.title }}
        </h1>
        <p class="text-center mt-2 ">
          {{ formatPostLine(post.category.name, post.date, post.author.name) }}
        </p>

        <div class="flex justify-center">
          <vue-markdown class="prose mt-16 w-full">
            {{ post.content.markdown }}
          </vue-markdown>
        </div>

        <div class="prose mx-auto mt-20 comments">
          <Disqus />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import gql from "graphql-tag";
import VueMarkdown from "vue-markdown";
var moment = require("moment");

const POST_QUERY = gql`
  query MyQuery($slug: String) {
    post(where: { slug: $slug }) {
      coverImage {
        url
      }
      title
      category {
        name
      }
      date
      author {
        name
      }
      content {
        markdown
      }
    }
  }
`;
export default {
  components: {
    VueMarkdown
  },
  methods: {
    formatPostLine(category, date, author) {
      return `${category} | ${moment(date).format("ll")} by ${author}`;
    }
  },

  data() {
    return {
      error: null
    };
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;

    const res = await client.query({
      query: POST_QUERY,
      prefetch: true,
      variables: {
        slug: params.post_slug
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    });

    const post = res.data.post;

    return {
      post
    };
  }
};
</script>
