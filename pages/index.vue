<script setup>
useHead({
  title: 'Paul Imoke – Full Stack Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Paul Imoke, a full stack developer.' },
    { property: 'og:title', content: 'Paul Imoke – Full Stack Developer' },
    { property: 'og:type', content: 'website' },
  ],
})

const { siteData } = useSiteData()
</script>

<template>
  <div id="appmain">
    <Nav />
    <main class="bg-black w-full">
      <Home :siteData="siteData" />
      <Marquee />
      <WhatIBuild />
      <Experience />
      <SelectedProjects />
      <Achievements />
      <BlogTeaser />
      <ContactCta />
    </main>
  </div>
</template>

<style>
/* Handled globally in assets/css/tailwind.css */
</style>
