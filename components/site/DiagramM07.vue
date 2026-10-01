<template>
  <svg class="svg dk" viewBox="16 20 700 340" role="img" aria-label="Causal loop: fuel price raises cost per trip, which drives a mode shift to transit. Transit load raises crowding, crowding raises dwell time, and dwell time pushes the mode shift back down: balancing loop B1.">
    <defs>
      <marker id="hI" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,1 L10,5 L0,9 z" style="fill:var(--ink)" /></marker>
      <marker id="hA" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,1 L10,5 L0,9 z" style="fill:var(--accent)" /></marker>
    </defs>
    <path d="M128 55 H199" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hI)" />
    <path d="M324 55 H411" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hI)" />
    <path d="M510 63 C580 63 640 110 640 170" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hI)" />
    <path d="M640 208 C640 270 580 316 506 316" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hI)" />
    <path d="M418 316 C350 316 280 270 280 212" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hI)" />
    <path d="M280 176 C280 120 360 84 432 72" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hI)" />
    <text x="80" y="61" class="tn">Fuel price</text>
    <text x="262" y="61" class="tn">Cost per trip</text>
    <text x="462" y="61" class="tn">Mode shift</text>
    <text x="640" y="196" class="tn">Transit load</text>
    <text x="462" y="326" class="tn">Crowding</text>
    <text x="280" y="196" class="tn">Dwell time</text>
    <text x="166" y="44" class="tp">+</text>
    <text x="370" y="44" class="tp">+</text>
    <text x="657" y="138" class="tp">+</text>
    <text x="528" y="342" class="tp">+</text>
    <text x="262" y="244" class="tp">+</text>
    <text x="440" y="98" class="tm">−</text>
    <circle cx="462" cy="190" r="23" style="fill:none;stroke:var(--accent);stroke-width:1.5" />
    <path d="M433.4 173.5 A33 33 0 1 1 433.4 206.5" style="fill:none;stroke:var(--accent);stroke-width:1.25;marker-end:url(#hA)" />
    <text x="462" y="196" class="tb">B1</text>
    <text x="224" y="201" class="ta">the throughput cap</text>
  </svg>
  <svg class="svg m" viewBox="0 0 360 470" role="img" aria-label="Causal loop: fuel price raises cost per trip, which drives a mode shift to transit. Transit load raises crowding, crowding raises dwell time, and dwell time pushes the mode shift back down: balancing loop B1.">
    <defs>
      <marker id="hIm" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,1 L10,5 L0,9 z" style="fill:var(--ink)" /></marker>
      <marker id="hAm" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,1 L10,5 L0,9 z" style="fill:var(--accent)" /></marker>
    </defs>
    <path d="M180 44 V76" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hIm)" />
    <path d="M180 108 V144" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hIm)" />
    <path d="M226 160 C266 160 292 196 292 254" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hIm)" />
    <path d="M292 290 C292 346 258 386 222 386" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hIm)" />
    <path d="M138 386 C102 386 68 346 68 294" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hIm)" />
    <path d="M68 258 C68 206 100 168 132 162" style="fill:none;stroke:var(--ink);stroke-width:1.75;marker-end:url(#hIm)" />
    <text x="180" y="34" class="tn">Fuel price</text>
    <text x="180" y="100" class="tn">Cost per trip</text>
    <text x="180" y="166" class="tn">Mode shift</text>
    <text x="292" y="278" class="tn">Transit load</text>
    <text x="180" y="392" class="tn">Crowding</text>
    <text x="68" y="278" class="tn">Dwell time</text>
    <text x="196" y="66" class="tp">+</text>
    <text x="196" y="132" class="tp">+</text>
    <text x="308" y="226" class="tp">+</text>
    <text x="240" y="410" class="tp">+</text>
    <text x="50" y="330" class="tp">+</text>
    <text x="118" y="192" class="tm">−</text>
    <circle cx="180" cy="278" r="21" style="fill:none;stroke:var(--accent);stroke-width:1.5" />
    <path d="M154 263 A30 30 0 1 1 154 293" style="fill:none;stroke:var(--accent);stroke-width:1.25;marker-end:url(#hAm)" />
    <text x="180" y="283" class="tb">B1</text>
  </svg>
</template>
