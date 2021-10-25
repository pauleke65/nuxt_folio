<template>

  <div>
  <BlogTileHead />
<div class="grid grid-cols-2 gap-4 mt-8 mr-20">
      <BlogTile />  
      <BlogTile />  
    
</div>

 <div class="flex flex-row justify-between items-center my-4 ml-20 mr-52">
        <p class="text-xl font-extrabold bg-yellow-300 px-6 py-2">All</p>
        <p class="text-xl font-normal">Personal</p>
        <p class="text-xl font-normal">Tech</p>
        <p class="text-xl font-normal">Christian</p>
        <p class="text-xl font-normal">Poetry</p>
      </div>


<div class="grid grid-cols-3 gap-4 mt-8 mr-20">
      <BlogTile />  
      <BlogTile />  
      <BlogTile />  
      <BlogTile />  
      <BlogTile />  
      <BlogTile />
</div>
  </div>
</template>

<script>
export default {
name: 'BlogMain',
}
</script>

<style>

</style>