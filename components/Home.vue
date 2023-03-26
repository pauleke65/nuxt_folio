<template>
  <section class=" h-screen w-full items-center flex" id="home">
    <div class="flex text-white flex-col items-center justify-center h-max mx-auto">
      <p v-if="siteData.developmentMode" class=" text-red-400 mb-4">
        "Site currently under active development"
      </p>
      <h3 class="text-lg text-center">👋Hi There, I'm</h3>
      <h1 class="text-6xl text-center font-light">
        Paul <span class="font-bold">Imoke</span>
      </h1>
      <div
        class="text-yellow-500 mt-2 text-lg h-8 flex justify-center overflow-hidden"
      >
        <div class="pl-2 text-center slider overflow-hidden">
          <div class="text1">{{siteData.text1}}</div>
          <div class="text2">{{siteData.text2}}</div>
          <div class="text3">{{siteData.text3}}</div>
          <div class="text4">{{siteData.text4}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  props: {
    siteData: {
      type: Object
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
