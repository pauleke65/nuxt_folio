// "Currently" cards on the home page. What's on the desk this month.
// icon: a feather icon name. dot: 'filled' or 'hollow'.
export const NOW = [
  {
    icon: 'rotate-cw', status: 'In progress', dot: 'filled', type: 'Model',
    title: 'Internet infrastructure and resilience',
    text: 'Where the graph is scale-free, and what that means when one node fails.',
    foot: 'M-12', to: '/models/M-12',
  },
  {
    icon: 'activity', status: 'Exploring', dot: 'filled', type: 'Study',
    title: 'Delay and oscillation',
    text: 'Why systems overshoot when the signal is old. Reading control theory, badly at first.',
    foot: 'Control theory', to: '/about',
  },
  {
    icon: 'book-open', status: 'Reading', dot: 'filled', type: 'Book',
    title: 'Thinking in Systems',
    text: 'Donella Meadows. The foundation layer that everything else on this site sits on.',
    foot: 'Foundation', to: '/about',
  },
  {
    icon: 'target', status: 'Logging', dot: 'filled', type: 'Ledger',
    title: 'Calibration, not cleverness',
    text: 'I\'m overconfident above 80%. Every call goes in the ledger first, to fix the habit rather than the wording.',
    foot: 'Private until January 2027', to: '/ledger',
  },
  {
    icon: 'bar-chart-2', status: 'Waiting', dot: 'hollow', type: 'Experiments',
    title: 'Two runs waiting on their predictions',
    text: 'Unpublished until the calls resolve, so the results can\'t flatter me.',
    foot: '2 runs', to: '/experiments',
  },
  {
    icon: 'arrow-right-circle', status: 'Next', dot: 'hollow', type: 'Model',
    title: 'Informal credit',
    text: 'Next on the list: how credit moves when there\'s no bank in the loop.',
    foot: 'Planned', to: '/models',
  },
]
