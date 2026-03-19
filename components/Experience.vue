<script setup>
import { ref } from 'vue'

const hovered = ref(null)

const experiences = [
  {
    role: 'Lead Engineer',
    company: 'BLIA — Buy Land in Africa',
    location: 'USA · Remote',
    period: 'Oct 2024 – Present',
    summary: 'Full-stack property marketplace with AI, automation & social media sync.',
    bullets: [
      'Architected end-to-end platform — React Native mobile app, web frontend, and custom backend infrastructure.',
      'Built a WhatsApp automation engine using Bull MQ and a custom AI-managed Matrix server for agent auto-replies.',
      'Integrated Facebook and Instagram data syncing to automatically import property listings from social media.',
      'Implemented AI-driven features: automated listing descriptions, smart search, and image watermarking.',
      'Led sprint planning and communicated engineering decisions to the CEO and non-technical stakeholders.',
    ],
    tags: ['React Native', 'AI', 'Node.js', 'Bull MQ', 'WhatsApp API'],
  },
  {
    role: 'Lead Developer',
    company: 'Agrolinking Solutions',
    location: 'Kaduna, Nigeria · Remote',
    period: 'Dec 2025 – Mar 2026',
    summary: 'Production Next.js migration + Stellar Blockchain integration. Demo secured $20K in funding.',
    bullets: [
      'Migrated an MVP built with Lovable to a production-grade Next.js application.',
      'Built an Express.js server integrating with NAFDAC for full agricultural product traceability.',
      'Implemented Stellar Blockchain and IPFS (via Pinata) for immutable, decentralised supply chain records.',
      'Contributed to a product demo that secured $20,000 in funding from the Stellar Development Foundation.',
    ],
    tags: ['Next.js', 'Web3', 'Stellar', 'IPFS', 'Express.js'],
  },
  {
    role: 'Lead Mobile Engineer',
    company: 'Sustineri Attorneys',
    location: 'Accra, Ghana · Remote',
    period: 'Sep 2023 – Sep 2025',
    summary: 'Full court & trial management system built from scratch — mobile app + backend.',
    bullets: [
      'Architected and built the Trial Manager — a full court and trial management system from the ground up.',
      'Designed core modules for case management, team coordination, and automated court date reminders.',
      'Owned the full lifecycle: requirements, architecture, schema design, API development, and deployment.',
      'Delivered a robust cross-platform mobile experience tailored for legal professionals.',
    ],
    tags: ['Flutter', 'Django', 'PostgreSQL', 'REST API'],
  },
  {
    role: 'Lead Engineer',
    company: 'Tecmie LLC',
    location: 'USA · Remote',
    period: 'Nov 2023 – Jul 2025',
    summary: 'Multi-product startup studio — AI email automation, TypeScript SDK, job automation.',
    bullets: [
      'Led engineering across multiple products spanning frontend, backend, and SDK development.',
      'Developed the TypeScript SDK and full technical documentation for attest-protocol.org.',
      'Built backend and schema for ApplyBetter.co — autonomously builds profiles and applies to jobs.',
      'Engineered Wootiv — AI-powered intelligent mailbox agents for hiring and sales automation.',
      'Redesigned and rebuilt the official Tecmie website, improving performance and brand identity.',
    ],
    tags: ['TypeScript', 'AI', 'Node.js', 'SDK', 'Next.js'],
  },
  {
    role: 'Lead Engineer',
    company: 'AMTAP Technologies',
    location: 'Dubai · Remote',
    period: 'Nov 2022 – Sep 2025',
    summary: 'Instagram-style fitness platform — video pipelines, monetisation & cross-platform mobile.',
    bullets: [
      'Principal mobile engineer and system architect for a fitness platform for coaches and trainers.',
      'Designed entire application schema and backend architecture from scratch.',
      'Solved complex video processing: coaches upload workouts, bundle into purchasable training programs.',
      'Built intuitive cross-platform mobile UX enabling trainers to monetise content.',
    ],
    tags: ['Flutter', 'Video Streaming', 'Backend', 'Firebase'],
  },
  {
    role: 'Technology Lead',
    company: 'RegWand — MEST Africa',
    location: 'Accra, Ghana',
    period: 'Sep 2022 – Aug 2023',
    summary: 'Technology Lead across four MEST Africa startups — AI, legal, health & education.',
    bullets: [
      'RegWand — AI-powered legal consulting platform guiding entrepreneurs through African market regulations.',
      'LevelUp — Uber-style therapy booking platform for organisations improving workplace mental health.',
      'GradGap — Skill assessment platform identifying career gaps and recommending training for graduates.',
      'SageBrief Legal — AI research platform cutting lawyers\' research time by approximately 90%.',
      'Provided technical advisory support to the broader MEST Africa cohort.',
    ],
    tags: ['Angular', 'Django', 'OpenAI', 'Firebase', 'PostgreSQL'],
  },
  {
    role: 'Software Mobile Engineer',
    company: 'WSTC Financial Services',
    location: 'Nigeria',
    period: 'Feb 2022 – Feb 2023',
    summary: 'Mobile banking app for an investment bank — security, performance & intuitive UX.',
    bullets: [
      'Built and enhanced a mobile banking application for an investment bank.',
      'Translated complex financial product requirements into intuitive, accessible mobile interfaces.',
      'Prioritised security, performance, and seamless UX throughout the engagement.',
    ],
    tags: ['Flutter', 'Fintech', 'Mobile Banking', 'REST API'],
  },
]
</script>

<template>
  <section class="bg-black py-24 border-t border-white/10" id="experience">
    <div class="max-w-7xl mx-auto px-6">

      <!-- ── Section Header ── -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        <div>
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span class="text-white/40 text-xs tracking-widest uppercase">Experience</span>
          </div>
          <h2 class="text-white font-bold leading-tight" style="font-size: clamp(2rem, 4vw, 3.2rem);">
            Explore My<br />Engineering Journey
          </h2>
        </div>
        <div class="flex flex-col justify-end">
          <p class="text-white/40 text-base leading-relaxed mb-6">
            Over 9+ years, I've led engineering across mobile, web, and backend — shipping production apps
            for startups across Africa, the Middle East, and the USA.
          </p>
          <a
            href="mailto:pauleke65@gmail.com"
            class="inline-flex items-center gap-1 text-sm text-white underline underline-offset-4 hover:text-yellow-500 transition-colors w-fit"
          >
            Get in touch <span>↗</span>
          </a>
        </div>
      </div>

      <!-- ── Experience List ── -->
      <div class="flex flex-col">
        <div
          v-for="(exp, i) in experiences"
          :key="i"
          class="border-t border-white/10 cursor-default"
          @mouseenter="hovered = i"
          @mouseleave="hovered = null"
        >
          <!-- Always-visible row -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-6">

            <!-- Left: role + company + meta -->
            <div class="md:col-span-4">
              <p class="text-white font-semibold text-base">{{ exp.company }}</p>
              <p class="text-white/60 text-sm mt-1">{{ exp.role }}</p>
              <p class="text-white/40 text-xs mt-2">{{ exp.period }} · {{ exp.location }}</p>
            </div>

            <!-- Middle: summary -->
            <div class="md:col-span-6">
              <p class="text-white/70 text-sm leading-relaxed">{{ exp.summary }}</p>
            </div>

            <!-- Right: tags (show 2 collapsed, all when expanded) -->
            <div class="md:col-span-2 flex flex-wrap gap-2 md:justify-end items-center">
              <span
                v-for="tag in (hovered === i ? exp.tags : exp.tags.slice(0, 2))"
                :key="tag"
                class="text-xs px-3 py-1 rounded-full border transition-all duration-300"
                :class="hovered === i ? 'border-yellow-500/30 text-yellow-500/70' : 'border-white/15 text-white/50'"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Expandable detail panel -->
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="hovered === i ? 'max-height: 500px; opacity: 1;' : 'max-height: 0px; opacity: 0;'"
          >
            <div class="pb-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 relative">
              <!-- Spacer -->
              <div class="md:col-span-4"></div>

              <!-- Bullet list -->
              <div class="md:col-span-6">
                <ul class="space-y-2">
                  <li
                    v-for="(bullet, b) in exp.bullets"
                    :key="b"
                    class="flex items-start gap-3 text-sm text-white/70 leading-relaxed"
                  >
                    <span class="text-yellow-500 mt-1 shrink-0">•</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>

              <!-- Yellow circle arrow -->
              <div class="md:col-span-2 flex items-end justify-end">
                <div class="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-base shrink-0">
                  ↗
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom border -->
        <div class="border-t border-white/10"></div>
      </div>

    </div>
  </section>
</template>
