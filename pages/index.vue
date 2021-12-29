<template>
  <html>
    <div id="appmain" class="lg:m-0 lg:pl-324px ">
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <Nav />
      <main class="bg-black w-full xl:ml-4">
        <Home :developmentMode="siteData.developmentMode" />
        <About :siteData="siteData" :tools="tools" />
        <Services />
        <Works />
        <Contact />
      </main>
    </div>
  </html>
</template>

<script>
import gql from "graphql-tag";
const SITE_DATA_QUERY = gql`
  query MyQuery {
    siteData(where: { siteDataSlug: "sitedata" }) {
      aboutMe
      profileImage {
        url
      }
      resumeLink {
        url
      }
      developmentMode
    }
  }
`;

const ALL_TOOLS_QUERY = gql`
  query MyQuery {
    tools {
      name
      image {
        url
      }
      id
    }
  }
`;
export default {
  data() {
    return {
      siteData: {},
      tools: [],
      error: null
    };
  },
  apollo: {
    siteData: {
      query: SITE_DATA_QUERY,
      prefetch: true,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    },
    tools: {
      query: ALL_TOOLS_QUERY,
      prefetch: true,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  }
};
</script>

html{ scroll-behavior: smooth; }
