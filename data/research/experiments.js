// Demo/starter content for the Experiments section — carried over from the
// Claude Design prototype. Swap in real runs as they're published.
//
// summary / headline: the one-line finding and big number on /experiments.
// chart: drawn as horizontal bars from zero on the run's page. Without a
// chart, the run's stats show as a fact list instead.
// facts / run: optional overrides for the page head and sidebar; otherwise
// they are built from kind, runs, date and relatedModel.
// produced: never names a prediction entry. The ledger opens January 2027.
export const EXPERIMENTS = [
  {
    id: 'S-05', kind: 'Agent-based', date: '14 Aug', runs: '900 sims',
    title: 'Corridor throughput under three fare regimes',
    summary: 'Peak pricing moves the most people, but by speeding up boarding rather than cutting demand.',
    headline: { value: '+10%', label: 'Throughput, peak fare against flat' },
    facts: [
      { k: 'Method', v: 'Agent-based simulation' },
      { k: 'Runs', v: '900 sims, 300 per regime' },
      { k: 'Tests', v: 'M-07 · Urban transit' },
      { k: 'Result', v: 'Peak pricing, +10% throughput' },
    ],
    run: [{ k: 'Date', v: '14 Aug' }, { k: 'Sims', v: '900' }, { k: 'Agents', v: '12,000' }],
    chart: {
      title: 'Peak-hour throughput', unit: 'Thousands of passengers', max: 320,
      bars: [
        { label: 'Flat fare', value: 268, display: '268k' },
        { label: 'Distance fare', value: 241, display: '241k' },
        { label: 'Peak pricing', value: 295, display: '295k', win: true },
      ],
      caption: 'Peak pricing moves 295,000 people an hour, against 268,000 on a flat fare.',
    },
    findingLabel: 'What I had not modelled',
    lede: 'Twelve thousand agents choosing between four modes on one corridor, run under a flat fare, a distance fare and a peak-priced fare. I wanted to know which regime moves the most people, not which earns the most.',
    rows: [{ k: 'Agents', v: '12,000' }, { k: 'Vehicles', v: '240' }, { k: 'Dwell time', v: '18–45 s' }, { k: 'Peak window', v: '90 min' }, { k: 'Regimes', v: 'flat / distance / peak' }],
    stats: [{ k: 'Flat', v: '268k' }, { k: 'Distance', v: '241k' }, { k: 'Peak', v: '295k' }],
    code: "for regime in ('flat', 'distance', 'peak'):\n    for sim in range(300):\n        agents = spawn(12_000, income=lognorm())\n        for t in range(0, 90):\n            for a in agents:\n                a.choose(cost(regime, a), wait(t), crowd(t))\n            board(vehicles=240, dwell=dwell(crowd(t)))\n        record(regime, throughput())",
    finding: 'Peak pricing wins on throughput by 10% over a flat fare, but it wins for a reason I had not modelled: it thins the shoulder, which cuts dwell time, which is the real cap. The fare is acting on boarding speed, not on demand.',
    produced: [
      { n: '1', label: 'prediction', note: 'Logged privately. The ledger opens January 2027.' },
      { n: 'v3', label: 'of M-07', note: 'Model revised: dwell time as the binding constraint.' },
    ],
    relatedModel: 'M-07',
  },
  {
    id: 'S-04', kind: 'Monte Carlo', date: '06 Aug', runs: '10,000 runs',
    title: 'How long a seed-stage runway really lasts',
    summary: 'A bridge round thins the left tail and leaves the median almost untouched.',
    headline: { value: '13.4 mo', label: 'Median runway' },
    lede: 'Ten thousand runs of a single company: monthly burn drawn from the cohort spread, revenue growth lognormal, one bridge round available with probability tied to growth. The question is not the mean. It is the shape of the left tail.',
    rows: [{ k: 'Starting cash', v: '$1.2M' }, { k: 'Burn, month 1', v: '$68k ± 22k' }, { k: 'Burn growth', v: '3.5% / mo' }, { k: 'Revenue growth', v: 'lognormal μ 8%' }, { k: 'Bridge available', v: 'p = f(growth)' }],
    stats: [{ k: 'Median', v: '13.4' }, { k: 'P10', v: '8.1' }, { k: 'P90', v: '21.7' }],
    code: "for run in range(10_000):\n    cash, burn, rev = 1_200_000, gauss(68_000, 22_000), 0\n    for month in range(1, 61):\n        rev  *= 1 + lognorm(0.08, 0.05)\n        burn *= 1.035\n        cash += rev - burn\n        if cash <= 0 and not bridged and rand() < p_bridge(rev):\n            cash, bridged = cash + 600_000, True\n        if cash <= 0:\n            runway.append(month); break",
    finding: "I expected the bridge to fatten the middle. It doesn't — it thins the left tail and leaves the median almost untouched, because the companies that qualify for a bridge are the ones that were not going to die. Availability correlates with not needing it.",
    produced: [
      { n: '1', label: 'prediction', note: 'Logged privately. The ledger opens January 2027.' },
      { n: 'v2', label: 'of M-04', note: 'Startup financing, revised.' },
    ],
    relatedModel: 'M-04',
  },
  {
    id: 'S-03', kind: 'SIR, revised', date: '28 Jul', runs: '2,000 runs',
    title: 'Epidemic spread with two mixing clusters',
    summary: 'Split the population in two and the peak moves by the eleven days I got wrong.',
    headline: { value: '11 days', label: 'Peak shift at low coupling' },
    lede: 'A re-run of the model behind a prediction I lost. The original used one averaged mixing rate. This one splits the population into two groups with a tunable coupling and asks how far the peak moves as coupling falls.',
    rows: [{ k: 'Population', v: '400,000' }, { k: 'R₀', v: '1.8' }, { k: 'Clusters', v: '2' }, { k: 'Coupling', v: '0.02 – 0.30' }, { k: 'Seed cases', v: '40' }],
    stats: [{ k: 'Peak, coupled', v: 'wk 6' }, { k: 'Peak, split', v: 'wk 7.6' }, { k: 'Error', v: '11 days' }],
    code: "for c in linspace(0.02, 0.30, 15):\n    S, I, R = split_population(400_000, groups=2)\n    for week in range(0, 40):\n        for g in (0, 1):\n            other = 1 - g\n            force = beta * (I[g] + c * I[other]) / N[g]\n            new = force * S[g]\n            S[g] -= new; I[g] += new - gamma * I[g]\n    record(c, argmax(total_I))",
    finding: 'Coupling below 0.08 pushes the peak out by roughly eleven days — precisely the error I made. The structure was never wrong; averaging two populations into one parameter was. I now check for clustering before I trust any single mixing rate.',
    produced: [
      { n: '1', label: 'essay', note: 'E-08 · post-mortem.' },
      { n: '1', label: 'model revised', note: 'M-09 · two-cluster default.' },
    ],
    relatedModel: 'M-09',
  },
  {
    id: 'S-02', kind: 'Historical backtest', date: '09 Jul', runs: '1844–47',
    title: 'Railway mania — backtest of the capital loop',
    summary: 'The loop reproduces the shape of the bubble and misses the timing, all of it in the delay term.',
    headline: { value: '8 months', label: 'Timing error on the peak' },
    lede: 'Can my reinforcing-loop model reproduce a bubble whose ending is already known? Capital in, prospectus out, subscription up, capital in again, with construction delay as the only brake. Fitted on 1844, run forward blind.',
    rows: [{ k: 'Period', v: '1844–1847' }, { k: 'Fitted on', v: '1844 only' }, { k: 'Delay', v: '22 months' }, { k: 'Loop', v: 'R1 reinforcing' }, { k: 'Brake', v: 'construction capacity' }],
    stats: [{ k: 'Peak, modelled', v: 'Q2 1846' }, { k: 'Peak, actual', v: 'Q4 1846' }, { k: 'Error', v: '8 months' }],
    code: "capital, authorised = fit(1844)\nfor q in quarters(1844, 1850):\n    sentiment = f(returns(q - delay))\n    subscriptions = capital * sentiment\n    authorised += subscriptions * conversion\n    capital = subscriptions - construction_draw(q)\n    if capital < 0: collapse(q)",
    finding: 'The loop reproduces the shape and misses the timing by eight months, all of it in the delay term. Useful failure: it says the mechanism is right and my delay estimates are the weak part of every model I build, not just this one.',
    produced: [
      { n: '1', label: 'essay', note: 'E-06 · on 1840s infrastructure.' },
      { n: '2', label: 'models recalibrated', note: 'Delay calibration note applied to M-07, M-03.' },
    ],
    relatedModel: 'M-11',
  },
  {
    id: 'S-01', kind: 'System dynamics', date: '21 Jun', runs: '50 years',
    title: 'Population growth with variable migration',
    lede: 'My first model. One stock, three flows, fifty years. Kept published because the point of it was to learn that a stock cannot be reasoned about from its flows alone.',
    rows: [{ k: 'Start', v: '1,000,000' }, { k: 'Birth rate', v: '2.5%' }, { k: 'Death rate', v: '1.0%' }, { k: 'Migration', v: 'variable' }, { k: 'Horizon', v: '50 years' }],
    stats: [{ k: 'Year 50', v: '2.1M' }, { k: 'Doubling', v: 'yr 47' }, { k: 'Migration swing', v: '±14%' }],
    code: "pop = 1_000_000\nfor year in range(50):\n    births = pop * 0.025\n    deaths = pop * 0.010\n    net_migration = migration(year)\n    pop += births - deaths + net_migration\n    record(year, pop)",
    finding: 'Nothing surprising in the output, everything surprising in the exercise: I had been treating growth rate as the interesting number when the stock and its delay do all the work. Every model since starts by naming the stocks.',
    produced: [
      { n: '0', label: 'outputs', note: 'Nothing. It was practice, and it stays up as practice.' },
    ],
    relatedModel: null,
  },
]
