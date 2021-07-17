<template>

<section class="bd-grid pb-8 items-center" id="works">

  <div class="flex pt-8 flex-col items-center justify-center">

      <div class="rounded-full py-3 px-12 mx-auto w-64 h-auto font-bold mt-8 text-2xl bg-white text-black text-center">Works</div>

      <div class="flex text-white">
          <p class="text-lg mt-12 pr-3 border-r-2">All</p>
          <p class="text-lg mt-12 mr-3 ml-3">Apps</p>
          <p class="text-lg mt-12 pr-3 border-r-2 pl-3 border-l-2">Websites</p>
          <p class="text-lg mt-12 ml-3 ">Designs</p>
      </div>

      <div class="grid w-full mx-auto mt-8 px-4">
          <div class="bg-white w- h-72 flex bg-image">
            
          </div>
      </div>

      <router-link class=" bg-yellow-500 mt-12 rounded-full py-4 px-6 text-white text-xl text-center w-95pr" @click="alert('me')" to="/projects">See All Projects Here</router-link>
   
  </div>
</section>



</template>

<script>
export default {
  name: 'Works'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>