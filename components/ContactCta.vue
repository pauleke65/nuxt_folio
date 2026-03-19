<template>
  <section class="bg-black py-32 border-t border-white/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-16">

      <!-- Left: content -->
      <div class="flex-1">
        <div class="flex items-center gap-3 mb-8">
          <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span class="text-white/40 text-xs tracking-widest uppercase">Contact</span>
        </div>
        <h2 class="text-white font-bold leading-none mb-6" style="font-size: clamp(3rem, 8vw, 7rem);">
          Let's build<br /><span class="text-yellow-500">something.</span>
        </h2>
        <p class="text-white/40 text-lg leading-relaxed max-w-xl mb-12">
          Have a product idea, a platform to scale, or a team that needs a lead engineer?
          I'd love to hear about it.
        </p>
        <div class="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="mailto:pauleke65@gmail.com"
            class="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-yellow-400 transition-colors duration-200"
          >
            Send me an email ↗
          </a>
          <a
            href="https://linkedin.com/in/paul-imoke-010a941bb/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm text-white border border-white/20 px-7 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Connect on LinkedIn
          </a>
        </div>
        <div class="flex items-center gap-6">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pauleke65">
            <img src="../assets/images/github.svg" alt="GitHub" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/PaulEke20">
            <img src="../assets/images/Twitter.svg" alt="Twitter" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/pauleke65/">
            <img src="../assets/images/Instagram.svg" alt="Instagram" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/paul.eke.399">
            <img src="../assets/images/Facebook.svg" alt="Facebook" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      <!-- Right: Developer character illustration -->
      <div class="hidden lg:flex items-center justify-center shrink-0 w-[340px]">
        <svg
          viewBox="0 0 300 300"
          width="340"
          height="340"
          overflow="visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="ci-aura" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="22" result="blur"/>
            </filter>
            <filter id="ci-glow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="ci-glow-sm" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- Background star field -->
          <g fill="rgba(255,255,255,0.18)">
            <circle cx="14"  cy="28"  r="1.5"/>
            <circle cx="284" cy="18"  r="1"/>
            <circle cx="272" cy="268" r="1.5"/>
            <circle cx="22"  cy="258" r="1"/>
            <circle cx="46"  cy="190" r="1"/>
            <circle cx="250" cy="205" r="1.5"/>
            <circle cx="289" cy="135" r="1"/>
            <circle cx="7"   cy="145" r="1"/>
            <circle cx="132" cy="10"  r="1"/>
            <circle cx="168" cy="7"   r="1.5"/>
            <circle cx="292" cy="62"  r="1"/>
            <circle cx="55"  cy="42"  r="1"/>
            <circle cx="240" cy="50"  r="1"/>
          </g>

          <!-- Soft golden aura behind character -->
          <ellipse cx="150" cy="168" rx="68" ry="82" fill="rgba(234,179,8,0.07)" filter="url(#ci-aura)"/>

          <!-- ── Floating: { } brackets (top-left) ── -->
          <g class="fl-a" filter="url(#ci-glow-sm)">
            <text x="20" y="66" font-family="monospace" font-size="26" fill="rgba(234,179,8,0.55)" font-weight="bold">{ }</text>
          </g>

          <!-- ── Floating: </> tag (top-right) ── -->
          <g class="fl-b" filter="url(#ci-glow-sm)">
            <text x="218" y="50" font-family="monospace" font-size="18" fill="rgba(168,85,247,0.65)" font-weight="bold">&lt;/&gt;</text>
          </g>

          <!-- ── Floating: code card (right side) ── -->
          <g class="fl-c">
            <rect x="221" y="138" width="70" height="52" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
            <!-- Traffic light dots -->
            <circle cx="232" cy="148" r="2.8" fill="rgba(255,100,100,0.5)"/>
            <circle cx="241" cy="148" r="2.8" fill="rgba(255,190,0,0.5)"/>
            <circle cx="250" cy="148" r="2.8" fill="rgba(100,220,100,0.5)"/>
            <!-- Code lines on card -->
            <line x1="228" y1="158" x2="283" y2="158" stroke="rgba(234,179,8,0.45)"    stroke-width="1.5"/>
            <line x1="228" y1="164" x2="266" y2="164" stroke="rgba(168,85,247,0.45)"   stroke-width="1.5"/>
            <line x1="228" y1="170" x2="276" y2="170" stroke="rgba(255,255,255,0.15)"  stroke-width="1.5"/>
            <line x1="228" y1="176" x2="260" y2="176" stroke="rgba(234,179,8,0.3)"     stroke-width="1.5"/>
            <line x1="228" y1="182" x2="270" y2="182" stroke="rgba(168,85,247,0.2)"    stroke-width="1.5"/>
          </g>

          <!-- ── Floating: terminal (bottom-left) ── -->
          <g class="fl-a">
            <rect x="8" y="214" width="54" height="34" rx="5" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <text x="15" y="227" font-family="monospace" font-size="7" fill="rgba(234,179,8,0.6)">$ npm run</text>
            <text x="15" y="238" font-family="monospace" font-size="7" fill="rgba(100,220,100,0.6)">build ✓</text>
          </g>

          <!-- ── Character (floating as one unit) ── -->
          <g class="character">

            <!-- Right arm raised (pointing up-right) -->
            <path d="M 184 127 C 200 118 212 110 220 98"
              fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="8.5" stroke-linecap="round"/>

            <!-- Left arm down (holding tablet) -->
            <path d="M 116 127 C 101 142 89 158 84 176"
              fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="8.5" stroke-linecap="round"/>

            <!-- Body / hoodie -->
            <path d="M 134 112 L 112 128 L 105 196 L 195 196 L 188 128 L 166 112 Q 158 105 150 105 Q 142 105 134 112 Z"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
            <!-- Lapels -->
            <path d="M 134 112 L 144 127 L 150 113 L 156 127 L 166 112"
              fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
            <!-- Chest pocket -->
            <rect x="118" y="140" width="15" height="11" rx="2"
              fill="none" stroke="rgba(234,179,8,0.35)" stroke-width="0.8"/>
            <!-- Pocket badge dot -->
            <circle cx="125" cy="145" r="2" fill="rgba(234,179,8,0.4)"/>

            <!-- Legs -->
            <rect x="115" y="196" width="24" height="52" rx="7"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
            <rect x="161" y="196" width="24" height="52" rx="7"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
            <!-- Shoes -->
            <ellipse cx="127" cy="250" rx="17" ry="7"
              fill="rgba(234,179,8,0.07)" stroke="rgba(234,179,8,0.28)" stroke-width="1"/>
            <ellipse cx="173" cy="250" rx="17" ry="7"
              fill="rgba(234,179,8,0.07)" stroke="rgba(234,179,8,0.28)" stroke-width="1"/>

            <!-- Neck -->
            <rect x="144" y="105" width="12" height="9" rx="3"
              fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>

            <!-- Head -->
            <circle cx="150" cy="79" r="28"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
            <!-- Hair arc -->
            <path d="M 124 73 Q 150 46 176 73"
              fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
            <!-- Eye sockets -->
            <circle cx="142" cy="78" r="4.5" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
            <circle cx="158" cy="78" r="4.5" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
            <!-- Glowing pupils -->
            <circle cx="142" cy="78" r="2.5" fill="#EAB308" filter="url(#ci-glow-sm)"/>
            <circle cx="158" cy="78" r="2.5" fill="#EAB308" filter="url(#ci-glow-sm)"/>
            <!-- Smile -->
            <path d="M 143 89 Q 150 95 157 89"
              fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" stroke-linecap="round"/>
            <!-- Glasses bridge -->
            <line x1="146.5" y1="78" x2="153.5" y2="78" stroke="rgba(255,255,255,0.2)" stroke-width="0.8"/>

            <!-- Tablet in left hand -->
            <rect x="60" y="170" width="44" height="33" rx="5"
              fill="rgba(234,179,8,0.07)" stroke="#EAB308" stroke-width="1"/>
            <rect x="64" y="174" width="36" height="25" rx="2"
              fill="rgba(234,179,8,0.04)"/>
            <!-- Tablet code -->
            <line x1="67" y1="180" x2="96" y2="180" stroke="rgba(234,179,8,0.55)"   stroke-width="1.2"/>
            <line x1="67" y1="185" x2="90" y2="185" stroke="rgba(168,85,247,0.55)"  stroke-width="1.2"/>
            <line x1="67" y1="190" x2="94" y2="190" stroke="rgba(255,255,255,0.2)"  stroke-width="1.2"/>
            <line x1="67" y1="195" x2="87" y2="195" stroke="rgba(234,179,8,0.35)"   stroke-width="1.2"/>

          </g>

          <!-- ── Glowing fingertip (right arm) ── -->
          <circle cx="220" cy="98" r="5" fill="#EAB308" filter="url(#ci-glow)">
            <animate attributeName="r"       values="5;9;5"   dur="1.9s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.3;1" dur="1.9s" repeatCount="indefinite"/>
          </circle>
          <!-- Sparkles around fingertip -->
          <circle cx="231" cy="86" r="2.2" fill="rgba(234,179,8,0.75)">
            <animate attributeName="opacity" values="0;1;0" dur="1.9s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          <circle cx="215" cy="86" r="1.6" fill="rgba(234,179,8,0.55)">
            <animate attributeName="opacity" values="0;1;0" dur="1.9s" repeatCount="indefinite" begin="0.7s"/>
          </circle>
          <circle cx="236" cy="103" r="1.6" fill="rgba(234,179,8,0.55)">
            <animate attributeName="opacity" values="0;1;0" dur="1.9s" repeatCount="indefinite" begin="0.1s"/>
          </circle>
          <circle cx="225" cy="82" r="1.2" fill="rgba(255,255,255,0.6)">
            <animate attributeName="opacity" values="0;1;0" dur="1.9s" repeatCount="indefinite" begin="0.5s"/>
          </circle>

        </svg>
      </div>

    </div>
  </section>
</template>

<style scoped>
.fl-a {
  animation: float-ud 4.2s ease-in-out infinite;
}
.fl-b {
  animation: float-ud 5.8s ease-in-out infinite reverse;
}
.fl-c {
  animation: float-tilt 4.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.character {
  animation: float-ud 5.2s ease-in-out infinite;
}

@keyframes float-ud {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
@keyframes float-tilt {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-7px) rotate(2deg); }
}
</style>
