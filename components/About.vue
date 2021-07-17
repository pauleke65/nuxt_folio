<template>
  <section class="pt-4 px-0 mt-0 pb-8" id="about">
    <div class="flex flex-col h-full justify-center">
      <div>
        <img
          class="rounded-full mx-auto h-44 w-44"
          src="../assets/images/profile.jpg"
          alt=""
        />
      </div>
      <div
        class="rounded-full py-3 px-12 mb-12 mx-auto font-bold mt-8 bg-white text-black text-center"
      >
        About Me
      </div>

      <div class="text-white mx-4">
        <p class="text-center md:mx-8 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quo
          molestias, facere impedit commodi veritatis dolores beatae corrupti
          sequi voluptates consequatur asperiores vel distinctio nemo aspernatur
          velit soluta, voluptate officia.
        </p>

        <div class="mt-12 flex flex-col">
          <p class="ml-4 my-1 text-2xl font-bold text-center mb-6 text-white">My Favorite Tools</p>
          <div class="grid mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img class="mt-2 w-28 mx-auto" src="../assets/logo.png" alt="" />
              <p class="text-black text-xl text-center">Vue JS</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/tailwindcss.svg"
                alt=""
              />
              <p class="text-black text-xl text-center">Tailwind CSS</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/graphql.svg"
                alt=""
              />
              <p class="text-black text-xl text-center">Graph QL</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/flask.png"
                alt=""
              />
              <p class="text-black text-xl text-center">Flask</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/json.svg"
                alt=""
              />
              <p class="text-black text-xl text-center">REST APIs</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/firebase.svg"
                alt=""
              />
              <p class="text-black text-xl text-center">Firebase</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/python.svg"
                alt=""
              />
              <p class="text-black text-xl text-center">Python</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/nativescript-vue.svg"
                alt=""
              />
              <p class="text-black text-xl text-center">NativeScript-Vue</p>
            </div>

            <div class="bg-white w-40 h-40 justify-center flex flex-col">
              <img
                class="mt-2 w-28 mx-auto"
                src="../assets/images/github.png"
                alt=""
              />
              <p class="text-black text-xl text-center">Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
