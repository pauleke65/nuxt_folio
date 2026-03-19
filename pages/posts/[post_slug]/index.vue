<script setup>
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import { useApolloClient } from '@vue/apollo-composable'
import { POST_QUERY } from '~/graphql/queries'

const route = useRoute()
const { resolveClient } = useApolloClient()

const { data: post, error } = await useAsyncData(
  `post-${route.params.post_slug}`,
  async () => {
    const client = resolveClient()
    const res = await client.query({
      query: POST_QUERY,
      variables: { slug: route.params.post_slug },
    })
    return res.data.post
  }
)

useHead(computed(() => ({
  title: post.value?.title ? `${post.value.title} | PurpleEmber` : 'PurpleEmber Blog',
  meta: [
    { name: 'description', content: post.value?.excerpt ?? '' },
    { property: 'og:title', content: post.value?.title ?? 'PurpleEmber Blog' },
    { property: 'og:image', content: post.value?.coverImage?.url ?? '' },
  ],
})))

const md = new MarkdownIt({ html: false, linkify: true, typographer: true })

const renderedContent = computed(() => {
  if (!post.value?.content?.markdown) return ''
  const rendered = md.render(post.value.content.markdown)
  if (import.meta.client) return DOMPurify.sanitize(rendered)
  return rendered
})

function formatDate(date) {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))
}

const readTime = computed(() => {
  if (!post.value?.content?.markdown) return '1 MIN READ'
  const words = post.value.content.markdown.trim().split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} MIN READ`
})

const authorInitial = computed(() => post.value?.author?.name?.[0]?.toUpperCase() ?? 'P')
</script>

<template>
  <div class="bg-black min-h-screen">
    <Nav />

    <!-- Error -->
    <div v-if="error" class="flex items-center justify-center h-screen">
      <div class="text-center">
        <p class="text-red-400 text-sm mb-4">Failed to load post.</p>
        <NuxtLink to="/blog" class="text-white/50 text-sm underline underline-offset-4 hover:text-white">← Back to blog</NuxtLink>
      </div>
    </div>

    <!-- Loading -->
    <div v-else-if="!post" class="flex items-center justify-center h-screen">
      <div class="flex flex-col items-center gap-3">
        <div class="w-6 h-6 rounded-full border-2 border-yellow-500 border-t-transparent animate-spin"></div>
        <p class="text-white/30 text-sm">Loading post…</p>
      </div>
    </div>

    <!-- Post -->
    <article v-else class="pb-24">

      <!-- ── HEADER ── -->
      <div class="max-w-6xl mx-auto px-6 pt-28 pb-12">

        <!-- Back link -->
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white transition-colors duration-200 mb-10 block">
          ← Back to blog
        </NuxtLink>

        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          <!-- Left: meta + title + author -->
          <div class="flex-1 max-w-2xl">

            <!-- Category + read time -->
            <div class="flex items-center gap-4 mb-8">
              <span v-if="post.category?.name" class="text-xs font-semibold tracking-widest uppercase border border-white/20 text-white/70 px-3 py-1 rounded-full">
                {{ post.category.name }}
              </span>
              <span class="text-white/30 text-xs tracking-widest uppercase">{{ readTime }}</span>
            </div>

            <!-- Title — italic serif first line, bold second -->
            <h1 class="text-white leading-tight mb-10 post-title" style="font-size: clamp(2rem, 5vw, 3.5rem);">
              {{ post.title }}
            </h1>

            <!-- Author row -->
            <div class="flex items-center gap-4 mb-8">
              <div class="w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-base shrink-0">
                {{ authorInitial }}
              </div>
              <div>
                <p class="text-white font-medium text-sm">{{ post.author?.name }}</p>
                <p class="text-white/40 text-xs tracking-wide mt-0.5 uppercase">{{ formatDate(post.publishedAt) }}</p>
              </div>
            </div>

          </div>

          <!-- Right: cover image -->
          <div class="lg:w-80 xl:w-96 shrink-0">
            <NuxtImg
              v-if="post.coverImage?.url"
              :src="post.coverImage.url"
              :alt="post.title"
              class="w-full h-60 lg:h-72 object-cover rounded-2xl"
              width="400"
              height="280"
              loading="eager"
            />
          </div>

        </div>

        <!-- Divider -->
        <div class="border-t border-white/10 mt-4"></div>
      </div>

      <!-- ── BODY ── -->
      <div class="max-w-2xl mx-auto px-6">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="post-body" v-html="renderedContent" />

        <!-- Disqus -->
        <div class="mt-20 pt-12 border-t border-white/10">
          <Disqus
            :identifier="route.params.post_slug"
            :url="`https://paulimoke.com/posts/${route.params.post_slug}`"
          />
        </div>
      </div>

    </article>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

/* Title — italic lead word effect */
.post-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
}

/* ── Post body typography ── */
.post-body {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
  line-height: 1.9;
}

/* Drop cap on very first paragraph */
.post-body > p:first-child::first-letter {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 0.8;
  float: left;
  margin-right: 0.12em;
  margin-top: 0.08em;
  color: #fff;
}

.post-body p { margin-bottom: 1.6rem; }

.post-body h1,
.post-body h2,
.post-body h3,
.post-body h4 {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  color: #EAB308;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.post-body h2 { font-size: 1.6rem; }
.post-body h3 { font-size: 1.3rem; }

.post-body a {
  color: #EAB308;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.post-body strong { color: #fff; font-weight: 600; }
.post-body em { font-style: italic; color: rgba(255,255,255,0.9); }

.post-body blockquote {
  border-left: 3px solid #EAB308;
  padding-left: 1.25rem;
  margin: 2rem 0;
  color: rgba(255,255,255,0.5);
  font-style: italic;
}

.post-body code {
  background: rgba(255,255,255,0.08);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-size: 0.88em;
  color: #fbbf24;
}

.post-body pre {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 1.25rem;
  overflow-x: auto;
  margin: 2rem 0;
}

.post-body pre code {
  background: none;
  padding: 0;
  color: rgba(255,255,255,0.8);
}

.post-body ul, .post-body ol {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.post-body ul { list-style-type: disc; }
.post-body ol { list-style-type: decimal; }
.post-body li { margin-bottom: 0.5rem; }

.post-body hr {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin: 2.5rem 0;
}

.post-body img {
  max-width: 100%;
  border-radius: 12px;
  margin: 2rem 0;
}
</style>
