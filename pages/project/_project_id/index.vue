<template>
  <div class="pt-8 sm:px-28 md:px-48 px-6 flex flex-col h-screen">
    <div class="flex flex-col md:flex-row mb-8">
      <img
        class=" h-auto  md:h-96 mb-4"
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/5b/9a/a8/5b9aa818-b65d-3e00-ede6-8e57b54708b5/pr_source.png/230x0w.webp"
        alt=""
      />

      <div class="flex flex-col md:ml-8 ">
        <h2 class="font-bold text-2xl">{{ Projects[0].project_name }}</h2>

        <div class="flex flex-col md:flex-row">
          <div v-if="error">{{ error }}</div>
          <p class="my-1 mr-2">Built with ❤ using:</p>
          <div class="flex ">
            <img
              class="my-1 mr-2 w-6"
              src="~/assets/images/tailwindcss.svg"
              alt=""
            />
            <img
              class="my-1 mr-2 w-6"
              src="~/assets/images/graphql.svg"
              alt=""
            />
            <img class="my-1 mr-2 w-6" src="~/assets/logo.png" alt="" />
          </div>
        </div>

        <p class="mt-2 text-justify">
          Organize anything with anyone—for free! Trello is a visual tool for
          organizing your work and life. Join more than 35 million registered
          users to organize all your projects at work, at home, or anywhere in
          between. Whether you’re planning a website design project, vacation,
          or company off-site, Trello is infinitely customizable and flexible
          for your every need.
        </p>

        <button
          class="bg-white mt-4 border-2 hover:text-white hover:bg-black border-black py-1 w-28"
        >
          <a href="https://www.google.com" class="  mt-2 font-bold"
            >Check It Out</a
          >
        </button>
      </div>
    </div>

    <hr />
    <h3 class="my-4 font-semibold text-xl">Screenshots</h3>
    <div class="flex">
      <VueSlickCarousel class="w-95pr " v-bind="settings">
        <div>
          <img
            class=" mx-auto h-auto md:h-96 mb-4"
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/5b/9a/a8/5b9aa818-b65d-3e00-ede6-8e57b54708b5/pr_source.png/230x0w.webp"
            alt=""
          />
        </div>
        <div>
          <img
            class=" mx-auto h-auto  md:h-96 mb-4"
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/5b/9a/a8/5b9aa818-b65d-3e00-ede6-8e57b54708b5/pr_source.png/230x0w.webp"
            alt=""
          />
        </div>
        <div>
          <img
            class=" mx-auto h-auto  md:h-96 mb-4"
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/5b/9a/a8/5b9aa818-b65d-3e00-ede6-8e57b54708b5/pr_source.png/230x0w.webp"
            alt=""
          />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import gql from "graphql-tag";

const PROJECT_QUERY = gql`
  query MyQuery($_eq: Int!) {
    Projects(where: { project_id: { _eq: $_eq } }) {
      project_name
      description
    }
  }
`;
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      error: null,
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
            {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;

    const res = await client.query({
      query: PROJECT_QUERY,
      prefetch: true,
      variables: {
        _eq: params.project_id
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    });

    const { Projects } = res.data;

    return {
      Projects
    };
  }
};
</script>
