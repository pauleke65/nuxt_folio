<template>

<section class="bd-grid pb-8 items-center" id="contact">

  <div class="flex pt-8 flex-col items-center justify-center">

      <div class="rounded-full py-3 px-12 mx-auto w-64 h-auto font-bold mt-8 text-2xl bg-white text-black text-center">Contact Me</div>

      <div class="flex flex-col">
        <h2 class="text-white font-bold mt-16 mb-4 text-4xl mx-auto">Feel Free To Reach Out To Me</h2>
        <p class="text-white md:mx-4">Having any issues or solutions you wish to discuss or implement, reach out to me here. I'd be happy to hear your ideas and give you a call.</p>
      </div>

      <div class="flex flex-col w-full md:w-95pr bg-gray-900 px-4 md:px-8 pb-8 mt-4 md:pt-4">
        <div class="flex flex-col md:flex-row ">
        <input class="mt-4 h-12 pl-4 md:flex-1" placeholder="Full Name" type="text"/>
        <input class="mt-4 h-12 pl-4 md:flex-1 md:ml-4" placeholder="Email Address" type="text"/>
        </div>

        <input class="mt-4 h-12 pl-4" inputmode="numeric" placeholder="Phone Number" type="number"/>
    
        <input class="mt-4 h-12 pl-4" placeholder="Subject" type="text"/>
        <textarea class="mt-4 h-52 px-4 pt-4" placeholder="Message"/>
        <button @click="alert_me" class="text-white text-xl font-semibold bg-yellow-500 w-full mt-4 h-16"><span><i class='bx bxs-message-dots'></i></span> Message Me</button>
      </div>

  </div>
</section>


</template>

<script>
export default {
  name: 'Contact',

  methods: {
    alert_me(){
      alert('Please use the Social Links')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>