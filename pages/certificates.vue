<template>
  <div
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-2 p-2"
  >
    <div
      v-if="$apollo.queries.Certificates.loading"
      class="animate-pulse bg-gray-400 h-64 "
    ></div>
    <div
      v-if="$apollo.queries.Certificates.loading"
      class="animate-pulse bg-gray-400 h-64 "
    ></div>
    <div
      v-if="$apollo.queries.Certificates.loading"
      class="animate-pulse bg-gray-400 h-64 "
    ></div>

    <div
      v-for="certificate in Certificates"
      :key="certificate.cert_id"
      class="bg-gray-400 h-64 "
    >
      <img :src="certificate.cert_image_url" class="w-full h-full" alt="" />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const ALL_Certificates_QUERY = gql`
  query MyQuery {
    Certificates {
      cert_id
      cert_image_url
      cert_name
      cert_url
    }
  }
`;
export default {
  data() {
    return {
      Certificates: [],
      error: null
    };
  },
  apollo: {
    Certificates: {
      query: ALL_Certificates_QUERY,
      prefetch: true,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  }
};
</script>
