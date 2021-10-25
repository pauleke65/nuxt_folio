<template>
  <div class="flex flex-col h-screen">
   <BlogNav />
    <main class=" mt-16 flex-1 overflow-y-auto p-5">
      <div>
        <img src="https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/612cade81c631845dae91f2d_pixelmatters-cms-comparison-monolithic-no-code.png" alt="" class=" h-30em w-full" style="object-fit: cover">
      <h1 class="text-center text-3xl font-extrabold mt-4">How Apple, Google, and Amazon’s visions shaped their design strategy</h1>
      <p class="text-center mt-2 ">Technology | October 25, 2021 by Paul Imoke</p>

    

      <div class="flex justify-center">
      
      <nuxt-content class="prose mt-16" :document="page"/>

      
      
      </div>
 


       <div id="disqus_thread" class="prose mx-auto mt-20"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://paulimoke-netlify-app.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

     
      </div>
    </main>

    
  </div>
</template>

<script>
export default {


  async asyncData({ $content, params, error }) {
    const slug =  "index";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  }

}
</script>

<style>

</style>