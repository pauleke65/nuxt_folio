<template>
    <div>
         <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
           rel="stylesheet"
      />
        <BlogNav/>


        <div class="w-full h-1/5 bg-green mt-20 flex justify-end pr-5">
      
      <div class="py-2  pl-3 pr-2 w-3/12 border-gray-700 border-2 rounded-full flex ">
            <i class=' mr-2 self-center text-2xl bx bx-search-alt-2'/>
            <input class="self-center focus:outline-none w-full" name="" id="" placeholder="Search for posts here...">
            <i class=' ml-2 self-center text-2xl bx bx-x'/>
      </div>

       </div>
       <div class=" ml-32 my-6">
<BlogMain/>
</div>
       
  
    </div>
</template>