// Demo/starter content for the Essays section — carried over from the
// Claude Design prototype. Swap in real essays as they're published.
//
// iso sorts the list newest first (the display `date` strings do not sort).
// kind: 'Post-mortem' | 'General' | 'Historical' | 'Personal'.
// model: the model the essay hangs off, if any.
export const ESSAYS = [
  {
    id: 'E-09', iso: '2026-08-02', date: '02 Aug', readTime: '9 min',
    title: 'Land titling is an information problem before it is a legal one',
    dek: 'Three of six actors in a land transaction are paid by ambiguity. Digitising the registry does not touch them.',
    kind: 'Post-mortem', model: 'M-05',
  },
  {
    id: 'E-08', iso: '2026-08-15', date: '15 Aug', readTime: '6 min',
    title: 'Why my epidemic model was wrong by eleven days',
    dek: 'The structure held. One averaged parameter did not. A short account of the difference.',
    kind: 'Post-mortem', model: 'M-09',
  },
  {
    id: 'E-07', iso: '2026-07-24', date: '24 Jul', readTime: '11 min',
    title: 'Delay is the most underrated variable in any system',
    dek: 'Oscillation, overshoot and collapse are usually the same mistake: acting on information that is already old.',
    kind: 'General',
  },
  {
    id: 'E-06', iso: '2026-07-12', date: '12 Jul', readTime: '8 min',
    title: 'What an 1840s railway bubble tells you about 2026 infrastructure',
    dek: 'Same reinforcing loop, same prospectus, same delay. The technology is the only variable that changed.',
    kind: 'Historical', model: 'M-11',
  },
  {
    id: 'E-05', iso: '2026-06-28', date: '28 Jun', readTime: '7 min',
    title: 'Nine years inside systems I could not name',
    dek: 'On leaving engineering slowly, and why the code was never the interesting part.',
    kind: 'Personal',
  },
]

// Full body only exists for E-09 so far. Every other essay page shows its
// head, dek and "Full essay not published yet."
// pull: the last paragraph is set as the pull quote.
// figure: optional comparison chart, drawn before the pull quote.
// revises: a prediction the essay revises. Never a link: the ledger opens January 2027.
export const ESSAY_BODIES = {
  'E-09': {
    paragraphs: [
      'Every reform proposal I have read starts with the registry. Digitise the registry, the argument goes, and the market clears. But the registry is downstream of the thing that actually blocks a transaction: neither party can cheaply verify what the other claims to own.',
      'Treat it as a system and the boundary moves. The actors are not buyer, seller and state. They are buyer, seller, state, the family with a customary claim, the surveyor whose measurement nobody can audit, and the lawyer whose fee scales with ambiguity. Three of those six are paid by uncertainty.',
      'That is a reinforcing loop, and it explains the result I did not predict: after the registry went digital, registered transfers rose 4%, not the 20% I had staked at 65% confidence. The registry got faster. The verification cost did not move, because it never lived in the registry.',
      'The leverage point is not the record. It is who is allowed to make a claim and what it costs them to be wrong.',
    ],
    pull: true,
    figure: {
      title: 'Registered transfers', unit: 'Change after digitisation', max: 20, axis: false,
      bars: [
        { label: 'Predicted', value: 20, display: '+20%' },
        { label: 'Actual', value: 4, display: '+4%', win: true },
      ],
      caption: 'I staked 65% on a 20% rise. Transfers rose 4%.',
    },
    revises: {
      title: 'Prediction P-24',
      text: 'Stated at 65% and wrong. The full entry is in the ledger, which opens January 2027.',
    },
    lineage: 'Read → model → apply → challenge. This one came from a challenge.',
  },
}
