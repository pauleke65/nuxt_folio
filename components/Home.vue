<template>
  <section class=" h-screen bd-grid items-center" id="home">
    <div class="flex text-white flex-col items-center justify-center h-max">
      <p v-if="developmentMode" class=" text-red-400 mb-4">
        "Site still under active development"
      </p>
      <h3 class="text-lg text-center">👋Hi There, I'm</h3>
      <h1 class="text-6xl text-center font-light">
        Paul <span class="font-bold">Imoke</span>
      </h1>
      <div
        class="text-yellow-500 mt-2 text-lg h-8 flex justify-center overflow-hidden"
      >
        <div class="pl-2 text-center slider overflow-hidden">
          <div class="text1">A Software Developer</div>
          <div class="text2">Content Creator</div>
          <div class="text3">Designer</div>
          <div class="text4">Christian</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  props: {
    developmentMode: {
      type: Boolean
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text1 {
  animation: fade 5s linear infinite;
}

@keyframes fade {
  100% {
    margin-top: -4.6em;
  }
  90% {
    margin-top: -4.6em;
  }
  80% {
    margin-top: -4.6em;
  }
  75% {
    margin-top: -4.6em;
  }
  70% {
    margin-top: -3.1em;
  }
  65% {
    margin-top: -3.1em;
  }
  60% {
    margin-top: -3.1em;
  }
  55% {
    margin-top: -3.1em;
  }
  50% {
    margin-top: -1.5em;
  }
  45% {
    margin-top: -1.5em;
  }
  40% {
    margin-top: -1.5em;
  }
  35% {
    margin-top: -1.5em;
  }
  30% {
    margin-top: 0em;
  }
  20% {
    margin-top: 0em;
  }
  10% {
    margin-top: 0em;
  }
  0% {
    margin-top: -9em;
  }
}
</style>
