<template>

<section class=" bd-grid pb-8 items-center" id="portfolio">

  <div class="flex pt-8 flex-col items-center justify-center">

      <div class="rounded-full py-3 px-12 mx-auto w-64 h-auto font-bold mt-8 text-2xl bg-white text-black text-center">Portfolio</div>

  

      

      <router-link class="w-95pr" to="/projects">
      <div class="w-full mx-auto mt-8 px-4">
          <div class="bg-white bg-cover h-324px relative flex bg-image">
            <div class=" self-center mx-auto">
              <h2 class="font-bold text-5xl text-white">See All Projects Here</h2>
            </div>
          </div>
      </div>
      </router-link>
   
  </div>
</section>



</template>

<script>
export default {
  name: 'Works',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-image{
 -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
 background-image: repeating-radial-gradient(red, yellow 10%, green 20%);
}
</style>