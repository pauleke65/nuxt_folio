// Demo/starter content for the Models section — carried over from the
// Claude Design prototype. Swap in real models/predictions as they're built.
export const MODELS = [
  { id: 'M-07', domain: 'Transit', year: '2026', era: 'now', title: 'Urban transit under a fuel shock', blurb: 'Six actor classes, three fare regimes, one binding constraint: road area per capita.', meta: '4 PREDICTIONS · 2 EXPERIMENTS' },
  { id: 'M-06', domain: 'Housing', year: '2026', era: 'now', title: 'Housing supply as stock and flow', blurb: 'A stock problem misread as a demand problem for thirty years running.', meta: '3 PREDICTIONS · 1 EXPERIMENT' },
  { id: 'M-05', domain: 'Property', year: '2026', era: 'now', title: 'Land title and the cost of verification', blurb: 'Three of six actors are paid by ambiguity. That is the whole model.', meta: '3 PREDICTIONS' },
  { id: 'M-04', domain: 'Capital', year: '2026', era: 'now', title: 'Startup financing funnels', blurb: 'Where the funnel narrows, and what that does to founder behaviour upstream.', meta: '2 PREDICTIONS · 1 EXPERIMENT' },
  { id: 'M-03', domain: 'Energy', year: '2026', era: 'now', title: 'Distribution under collection loss', blurb: 'A balancing loop between unpaid supply and investment capacity.', meta: '3 PREDICTIONS' },
  { id: 'M-02', domain: 'Education', year: '2026', era: 'now', title: 'Credential signalling vs. skill formation', blurb: 'Two objectives sharing one institution, and the incentive that splits them.', meta: '2 PREDICTIONS' },
  { id: 'M-09', domain: 'Health', year: '2026', era: 'now', title: 'Epidemic spread in clustered populations', blurb: 'The model I got wrong. Revised to two loosely-coupled mixing groups.', meta: '2 PREDICTIONS · 1 MISS' },
  { id: 'M-08', domain: 'Networks', year: '2026', era: 'now', title: 'Food distribution networks', blurb: 'Perishable stock, fragmented flow, and a price signal that arrives late.', meta: '1 PREDICTION' },
  { id: 'M-12', domain: 'Networks', year: '2026', era: 'now', title: 'Internet infrastructure and resilience', blurb: 'Where the graph is scale-free, and what that means when one node fails.', meta: 'IN PROGRESS' },
  { id: 'M-11', domain: 'Capital', year: '1846', era: 'past', title: 'Railway mania as a reinforcing loop', blurb: 'Capital, prospectus, and a delay long enough to hide the collapse.', meta: '2 PREDICTIONS · BACKTESTED' },
  { id: 'M-10', domain: 'Networks', year: '200 CE', era: 'past', title: 'Roman grain supply and the annona', blurb: 'A single-source stock with a seasonal flow and no substitute. Tests my constraint logic against a system that already ended.', meta: '1 PREDICTION · BACKTESTED' },
  { id: 'M-01', domain: 'Housing', year: '1890', era: 'past', title: 'Tenement density and public health reform', blurb: 'The first system where I could check my leverage-point ranking against what actually worked.', meta: 'BACKTESTED' },
]

export const DOMAINS = ['Transit', 'Housing', 'Property', 'Capital', 'Energy', 'Education', 'Health', 'Networks']

// Full write-ups only exist for M-07 so far. Every other model page falls
// back to its summary card until a real detail page is written.
export const MODEL_DETAILS = {
  'M-07': {
    kicker: 'Model · Transit · v3',
    title: 'Urban transit under a fuel shock',
    lede: 'Twenty million trips a day across four modes sharing one scarce resource. Fares are the visible variable; road area per capita is the binding one. Built on a metropolitan case, then tested against two cities with different fare regimes.',
    structureChain: ['Fuel price', 'Cost per trip', 'Mode choice', 'Transit load'],
    structureLoop: [
      { label: 'Dwell time ↑', dashed: true },
      { label: 'Crowding', dashed: true },
    ],
    structureLoopNote: 'Balancing loop B1 — crowding suppresses the shift that caused it',
    actors: [
      { who: 'Informal operators', what: 'Maximise daily cash; reprice within hours of a cost shock.' },
      { who: 'Transit authority', what: 'Fare-box recovery against a politically capped fare.' },
      { who: 'Commuters', what: 'Minimise cost plus time, weighted by reliability of arrival.' },
      { who: 'State', what: 'Visible capacity announcements over throughput per unit spent.' },
    ],
    leverage: [
      { tier: 'LOW', text: 'Add vehicles to an existing corridor.' },
      { tier: 'MEDIUM', text: 'Change how passengers board and pay — dwell time is the throughput cap.' },
      { tier: 'HIGH', text: 'Price road space at peak, so mode choice carries the true cost.' },
      { tier: 'EXTREME', text: 'Stop treating transport as movement of vehicles and treat it as access to opportunity — which makes land use, not roads, the intervention.' },
    ],
    falsifier: 'If a 15% fuel rise leaves ridership flat for two consecutive months, cost is not driving mode choice and the model’s central arrow is wrong.',
    produced: [
      { label: '4 predictions', to: '/predictions' },
      { label: '2 experiments', to: '/experiments' },
      { label: '1 essay', to: '/essays' },
    ],
    revisions: ['v3 · 18 Aug · added B1', 'v2 · 02 Jul · fare regimes', 'v1 · 14 May'],
  },
}
