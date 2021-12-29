<template>
  <div
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-2 p-2"
  >
    <div
      v-if="$apollo.queries.certificates.loading"
      class="animate-pulse bg-gray-400 h-64 "
    ></div>
    <div
      v-if="$apollo.queries.certificates.loading"
      class="animate-pulse bg-gray-400 h-64 "
    ></div>
    <div
      v-if="$apollo.queries.certificates.loading"
      class="animate-pulse bg-gray-400 h-64 "
    ></div>

    <div
      v-for="certificate in certificates"
      :key="certificate.id"
      class="bg-gray-400 h-64 "
    >
      <a :href="certificate.certUrl">
        <img
          :src="certificate.image.url"
          class="w-full h-full"
          :alt="certificate.name"
      /></a>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const ALL_Certificates_QUERY = gql`
  query MyQuery {
    certificates {
      certUrl
      image {
        url
      }
      name
      id
    }
  }
`;
export default {
  data() {
    return {
      certificates: [],
      error: null
    };
  },
  apollo: {
    certificates: {
      query: ALL_Certificates_QUERY,
      prefetch: true,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  }
};
</script>
