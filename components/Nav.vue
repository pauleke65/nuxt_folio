<template>

<header class=" fixed inset-y-0 z-100 md:w-0">

    <nav class="bd-grid h-12 flex justify-between top-0 items-center">
        <div class="bg-black lg:hidden text-white ml-2 mt-2 text-4xl">
            <i @click="toggleNav" class="bx bx-menu"></i>
        </div>

        <div :class="['nav_menu','left_t' , {'show': toggled}]">
            <div class="absolute top-4 lg:hidden right-4 object-right-top text-4xl text-black">
                <i @click="toggleNav" class='bx bx-x'></i>
            </div>

    <div class="flex flex-col items-center justify-center">
        <div>
        <ul class="mt-16">
            <li class="text-3xl text-black mb-8"><a class="active"  @click="toggleNav" href="#home" >Home</a></li>
            <li class="text-3xl text-black mb-8"><a @click="toggleNav" href="#about" >About</a></li>
            <li class="text-3xl text-black mb-8"><a @click="toggleNav" href="#services" >Services</a></li>
            <li class="text-3xl text-black mb-8"><a @click="toggleNav" href="#portfolio" >Portfolio</a></li>
            <li class="text-3xl text-black mb-8"><router-link to="/blog">My Blog</router-link></li>
            <li class="text-3xl text-black mb-8"><a @click="toggleNav" href="#contact" >Contact</a></li>
        </ul>
        </div>

        <div class="flex mt-16 justify-center">
                <div class="mx-2">
                    <a href="https://facebook.com/paul.eke.399"><img src="../assets/images/Facebook.svg" alt=""></a>
                </div>
                <div class="mx-2">
                    <a href="https://instagram.com/pauleke65/"><img src="../assets/images/Instagram.svg" alt=""></a>
                </div>
                <div class="mx-2">
                    <a href="https://twitter.com/PaulEke20"><img src="../assets/images/Twitter.svg" alt=""></a>
                </div>
                <div class="mx-2">
                    <a href="https://linkedin.com/in/paul-imoke-010a941bb/"><img src="../assets/images/Linkedin.svg" alt=""></a>
                </div>
                <div class="mx-2">
                    <a href="https://github.com/pauleke65"><img src="../assets/images/github.svg" alt=""></a>
                </div>
                <div class="mx-2">
                    <a href="mailto:pauleke65@gmail.com"><img src="../assets/images/At Symbol.svg" alt=""></a>
                </div>
        </div>
        </div>
        </div> 

    </nav>    

</header>


</template>

<script>
export default {

  data() {
      return{
      toggled: false,
       offset: 200,
            duration: 100,
      activeClass: {
          type: String,
          default: 'active',
        },
      }
    },

  methods: {
      toggleNav(){
          this.toggled = !this.toggled
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
a {
    font-family: 'Playball', cursive;    
}

.active {
    text-decoration: underline;
}



.show{
    left:0;
}
</style>