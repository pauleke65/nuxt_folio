// Demo/starter content for the Predictions ledger — carried over from the
// Claude Design prototype. Swap in real predictions as they're logged.
export const OPEN_PREDICTIONS = [
  {
    id: 'P-34', domain: 'Transit', logged: '18 Aug', daysLeft: 69, deadline: 'OPEN · 01 NOV',
    confidence: 70,
    title: 'Weekday transit ridership exceeds 240,000 on the corridor',
    mechanism: [
      { label: 'Pump price ↑', accent: false },
      { label: 'Car cost / trip ↑', accent: false },
      { label: 'Mode shift', accent: false },
      { label: 'Ridership ↑', accent: true },
    ],
    mechanismNote: '≈6 week delay',
    falsifier: 'Ridership stays flat for two consecutive months while fuel rises 15% or more.',
    sources: 'Monthly authority ridership report; retail fuel price index.',
    links: [
      { label: 'Model M-07 →', to: '/models/M-07' },
      { label: 'Experiment S-05 →', to: '/experiments?exp=S-05' },
    ],
  },
  {
    id: 'P-33', domain: 'Housing', logged: '11 Aug', daysLeft: 113, deadline: 'OPEN · 15 DEC',
    confidence: 55,
    title: 'Cement price falls before the housing-starts figure recovers',
    mechanism: [
      { label: 'Input cost', accent: false },
      { label: 'Margin', accent: false },
      { label: 'Starts', accent: true },
    ],
    mechanismNote: 'stock adjusts slower than price',
    links: [{ label: 'Model M-06 →', to: '/models/M-06' }],
  },
  {
    id: 'P-31', domain: 'Energy', logged: '04 Aug', daysLeft: 160, deadline: 'OPEN · 31 JAN',
    confidence: 35,
    title: 'Two of five metered districts revert to estimated billing',
    mechanism: [
      { label: 'Collection loss', accent: false },
      { label: 'Investment capacity ↓', accent: false },
      { label: 'Metering rollback', accent: true },
    ],
    mechanismNote: 'balancing loop B2',
    links: [{ label: 'Model M-03 →', to: '/models/M-03' }],
  },
]

export const SETTLED_PREDICTIONS = [
  {
    id: 'P-27', domain: 'Transit', settledNote: 'settled in 9 days', stated: 85, verdict: 'RIGHT',
    title: 'Informal fares rose within two weeks of the subsidy change',
    rows: [
      { label: 'Outcome', text: 'Fares moved on day nine. Pass-through was faster than modelled — informal operators reprice daily, not weekly.' },
      { label: 'Correction', text: 'M-07 delay parameter cut from 14 days to 3.' },
    ],
  },
  {
    id: 'P-19', domain: 'Health', settledNote: 'off by 11 days', stated: 75, verdict: 'WRONG',
    title: 'Peak cases would arrive in week six',
    rows: [
      { label: 'Why', text: 'Wrong assumption, not wrong structure: one mixing rate for a population that behaves as two loosely-coupled clusters.' },
      { label: 'Follow-up', text: '', links: [{ label: 'Post-mortem E-08', to: '/essays/E-08' }, { label: 're-run S-03', to: '/experiments?exp=S-03' }] },
    ],
  },
  {
    id: 'P-24', domain: 'Property', settledNote: '4% vs. 20% predicted', stated: 65, verdict: 'WRONG',
    title: 'Registered transfers up 20% after registry digitisation',
    rows: [
      { label: 'Why', text: 'The registry got faster. Verification cost never lived there — it sits with the surveyor and the customary claim.' },
      { label: 'Follow-up', text: 'M-05 boundary redrawn', links: [{ label: 'Essay E-09', to: '/essays/E-09' }] },
    ],
  },
  {
    id: 'P-15', domain: 'Capital', settledNote: '13.4 months actual', stated: 60, verdict: 'RIGHT',
    title: 'Median seed runway under 14 months across the cohort',
    note: 'Called off the Monte Carlo in S-04. The median was never the interesting part — the left tail was.',
    noteLink: { label: 'S-04', to: '/experiments?exp=S-04' },
  },
]

export const CALIBRATION_BUCKETS = [
  { stated: 35, actual: 31, label: '60%' },
  { stated: 55, actual: 44, label: '70%' },
  { stated: 75, actual: 80, label: '80%' },
  { stated: 95, actual: 66, label: '90%' },
]
