// Every project on the site lives here: the /projects portfolio, the home page
// "Selected work" section, /project/<slug> case studies and the /studio page.
//
// Shape of a project:
//   slug, name, tagline            one-line summary used on cards
//   label                          short category line, e.g. "Mobile · Legal tech"
//   role, org, period, location    who I was and where
//   platform, status               optional facts shown on the case study
//   categories                     filter keys, see CATEGORIES below
//   stack                          tech chips
//   featured                       true = shown large at the top of /projects and on the home page
//   studio                         true = PIE Drops Studio project (data/studio.js)
//   links                          [{ label, url }]
//   cover                          how the card art is drawn:
//                                    { type: 'image',  src, alt }           full-bleed image
//                                    { type: 'phones', srcs: [..], alt }    1–2 phone screenshots on a tinted panel
//                                    { type: 'logo',   src, alt, bg }       a logo on a plate
//                                    omitted                                typographic cover using `accent`
//   accent                         colour for typographic covers and highlights
//   gallery                        [{ src, alt }] screenshots on the case study
//   video                          optional embed URL
//   sections                       [{ kicker, heading, body: [paragraphs] }]
//   highlightsHeading, highlights  "What I did" bullet list
//   impact                         [{ num, label }] only real, sourced numbers
//   aliases                        old slugs that should resolve to this project

import studioProjects from './studio'

const CMS = 'https://us-east-1.graphassets.com/Aoz44GCmaTPi6p6zRcusoz/'
const cms = id => CMS + id

export const CATEGORIES = [
  { key: 'all', label: 'All work' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'web', label: 'Web' },
  { key: 'ai', label: 'AI & Automation' },
  { key: 'web3', label: 'Web3' },
  { key: 'backend', label: 'Backend & Infra' },
  { key: 'studio', label: 'PIE Drops Studio' },
]

const careerProjects = [
  // ─── Featured ──────────────────────────────────────────────────────────────
  {
    slug: 'blia',
    name: 'BLIA Platform',
    tagline: 'A full-stack property marketplace with AI-written listings, WhatsApp automation and Facebook and Instagram listing sync.',
    label: 'Proptech · Mobile, Web & AI',
    role: 'Lead Engineer',
    org: 'BLIA — Buy Land in Africa',
    period: 'Oct 2024 – Present',
    location: 'USA · Remote',
    platform: 'React Native mobile app, web frontend, custom backend',
    status: 'In production',
    categories: ['mobile', 'web', 'ai', 'backend'],
    stack: ['React Native', 'Node.js', 'Bull MQ', 'WhatsApp Business API', 'Matrix', 'OpenAI API'],
    featured: true,
    accent: '#2F9E44',
    sections: [
      {
        kicker: 'The brief',
        heading: 'Buying land in Africa, without the guesswork.',
        body: [
          'BLIA is a property marketplace for buying land in Africa. I architected and led the end-to-end build: a React Native mobile app, the web frontend, and the custom backend infrastructure behind both.',
          'Much of the market already lives on WhatsApp, Facebook and Instagram, so the platform had to meet agents and buyers there rather than ask them to start over.',
        ],
      },
    ],
    highlights: [
      'Architected and led end-to-end development of the platform: React Native mobile app, web frontend and custom backend infrastructure.',
      'Built a WhatsApp automation engine on Bull MQ and a custom AI-managed WhatsApp Matrix server, so agents can auto-reply to client inquiries based on configurable rules.',
      'Integrated Facebook and Instagram data syncing to import property listings from social media into the platform automatically.',
      'Implemented AI-driven features: automated listing descriptions, smart search, and image watermarking for asset security and brand protection.',
      'Owned infrastructure and database schema planning, security testing and system hardening across the stack.',
      'Led a small engineering team: task coordination, sprint planning, and explaining engineering decisions to the CEO and non-technical stakeholders.',
    ],
  },
  {
    slug: 'agtrail',
    name: 'Agtrail',
    tagline: 'Agricultural food traceability on Stellar and IPFS, integrated with NAFDAC. The product demo secured $20K from the Stellar Development Foundation.',
    label: 'Agritech · Web3 & Web',
    role: 'Lead Developer',
    org: 'Agrolinking Solutions',
    period: 'Dec 2025 – Mar 2026',
    location: 'Kaduna, Nigeria · Remote (Contract)',
    platform: 'Next.js web app, Express.js API, Stellar blockchain, IPFS',
    categories: ['web', 'web3', 'backend'],
    stack: ['Next.js', 'Express.js', 'Stellar', 'IPFS', 'Pinata'],
    featured: true,
    accent: '#94C11F',
    impact: [
      { num: '$20K', label: 'Funding from the Stellar Development Foundation, secured with a product demo' },
    ],
    sections: [
      {
        kicker: 'The brief',
        heading: 'From a Lovable MVP to a production traceability platform.',
        body: [
          'Agtrail tracks agricultural products from farm to shelf. Agrolinking came in with an MVP built in Lovable; my job was to turn it into a production system that regulators and partners could rely on.',
          'That meant a maintainable Next.js codebase, a server that talks to regulatory bodies such as NAFDAC, and supply-chain records that cannot be quietly edited after the fact.',
        ],
      },
    ],
    highlights: [
      'Migrated the Lovable MVP to a production-grade Next.js application, improving maintainability, performance and scalability.',
      'Built and deployed an Express.js server integrating with third-party regulatory bodies including NAFDAC, enabling full product traceability.',
      'Integrated the Stellar blockchain and IPFS (via Pinata) for immutable, decentralised storage of food supply-chain records.',
      'Contributed to the product demo that secured $20,000 in funding from the Stellar Development Foundation.',
    ],
  },
  {
    slug: 'trial-manager',
    name: 'Trial Manager',
    tagline: 'A court and trial management system for legal teams: cases, team coordination and automatic court-date reminders. Mobile app and backend, built from scratch.',
    label: 'Legal tech · Mobile & Backend',
    role: 'Lead Mobile Engineer',
    org: 'Sustineri Attorneys',
    period: 'Sep 2023 – Sep 2025',
    location: 'Accra, Ghana · Remote (Contract)',
    platform: 'Cross-platform mobile app with its own backend server',
    categories: ['mobile', 'backend'],
    stack: ['Flutter', 'Django', 'PostgreSQL', 'REST API'],
    featured: true,
    accent: '#4263EB',
    sections: [
      {
        kicker: 'The brief',
        heading: 'Never miss a hearing.',
        body: [
          'Sustineri Attorneys needed one place to run their cases: who is on what, what is due, and when the next court date is.',
          'I owned the whole lifecycle, from requirements gathering and system architecture through database design, API development, mobile UI and deployment.',
        ],
      },
    ],
    highlights: [
      'Architected and built the Trial Manager from the ground up, covering the mobile app and its supporting backend server.',
      'Designed core modules for case management, team coordination and automated court-date reminders.',
      'Owned requirements gathering, system architecture, database schema design, API development, mobile UI and deployment.',
    ],
  },
  {
    slug: 'amtap-fitness',
    name: 'AMTAP Fitness',
    tagline: 'An Instagram-style platform for coaches and personal trainers to upload workout videos and sell them as training programmes.',
    label: 'Fitness · Mobile & Video',
    role: 'Lead Engineer',
    org: 'AMTAP Technologies',
    period: 'Nov 2022 – Sep 2025',
    location: 'Dubai · Remote',
    platform: 'Cross-platform mobile app, backend and video pipeline',
    categories: ['mobile', 'backend'],
    stack: ['Flutter', 'Firebase', 'Video transcoding', 'Streaming'],
    featured: true,
    accent: '#F76707',
    sections: [
      {
        kicker: 'The brief',
        heading: 'Help trainers sell what they already film.',
        body: [
          'AMTAP wanted an Instagram-style experience built for coaches and personal trainers. Coaches upload workout videos and bundle them into programmes clients can buy; clients get their personalised programmes in one place.',
          'I was the principal mobile engineer and system architect, so the data model, the API and the storage strategy were mine to design.',
        ],
      },
      {
        kicker: 'The challenge',
        heading: 'Video is heavy.',
        body: [
          'Coaches film on phones and expect clients to stream smoothly anywhere. That meant an efficient transcoding pipeline and careful delivery, so programmes play well without a big bill behind them.',
        ],
      },
    ],
    highlights: [
      'Designed the full application schema and backend architecture: data modelling, API structure and storage strategy.',
      'Solved video processing and streaming: coach uploads are transcoded and delivered efficiently, then bundled into purchasable training programmes.',
      'Built the cross-platform mobile experience that lets trainers monetise content and clients reach their programmes.',
    ],
  },

  // ─── Tecmie ────────────────────────────────────────────────────────────────
  {
    slug: 'wootiv',
    name: 'Wootiv',
    tagline: 'AI email automation: companies set up mailbox agents for hiring or sales that handle incoming mail on their own, based on custom rules.',
    label: 'AI · Email automation',
    role: 'Lead Engineer',
    org: 'Tecmie LLC',
    period: 'Nov 2023 – Jul 2025',
    location: 'USA · Remote',
    categories: ['ai', 'backend', 'web'],
    stack: ['TypeScript', 'Node.js', 'AI agents'],
    accent: '#7048E8',
    highlights: [
      'Engineered Wootiv, an AI-powered email automation product.',
      'Companies configure intelligent mailbox agents, for example for hiring or sales, that handle incoming communication on their own based on custom rules.',
    ],
  },
  {
    slug: 'applybetter',
    name: 'ApplyBetter',
    tagline: 'Pulls together your online presence into a profile, then applies to jobs on your behalf.',
    label: 'AI · Job automation',
    role: 'Lead Engineer (backend)',
    org: 'Tecmie LLC',
    period: 'Nov 2023 – Jul 2025',
    location: 'USA · Remote',
    categories: ['ai', 'backend'],
    stack: ['Node.js', 'Schema design', 'Automation'],
    accent: '#1C7ED6',
    highlights: [
      'Built the backend and database schema for ApplyBetter.co.',
      'The product aggregates a user’s online presence to build a profile automatically, then applies to jobs on their behalf.',
    ],
  },
  {
    slug: 'attest-protocol-sdk',
    name: 'Attest Protocol SDK',
    tagline: 'The TypeScript SDK and full developer documentation for attest-protocol.org.',
    label: 'Developer tools · SDK',
    role: 'Lead Engineer',
    org: 'Tecmie LLC',
    period: 'Nov 2023 – Jul 2025',
    location: 'USA · Remote',
    categories: ['web3', 'backend'],
    stack: ['TypeScript', 'SDK design', 'Technical docs'],
    accent: '#0CA678',
    highlights: [
      'Developed the TypeScript SDK and its full technical documentation for attest-protocol.org.',
      'Worked through SDK design, cross-platform compatibility and developer-experience best practices.',
    ],
  },
  {
    slug: 'tecmie-website',
    name: 'Tecmie Website',
    tagline: 'A redesign and rebuild of tecmie.com that modernised the brand and improved performance.',
    label: 'Web · Studio site',
    role: 'Lead Engineer',
    org: 'Tecmie LLC',
    period: 'Nov 2023 – Jul 2025',
    location: 'USA · Remote',
    categories: ['web'],
    stack: ['Frontend', 'Web performance'],
    accent: '#F59F00',
    links: [{ label: 'Visit tecmie.com', url: 'https://tecmie.com' }],
    highlights: [
      'Redesigned and rebuilt the official Tecmie website, modernising the brand and improving performance.',
    ],
  },

  // ─── MEST Africa ───────────────────────────────────────────────────────────
  {
    slug: 'sagebrief-legal',
    name: 'SageBrief Legal',
    tagline: 'AI-assisted legal research grounded in verified sources, with curated practice notes and case-strategy suggestions. Cut research time by about 90%.',
    label: 'Legal tech · AI & Web',
    role: 'Technology Lead',
    org: 'MEST Africa portfolio',
    period: 'Sep 2022 – Aug 2023',
    location: 'Accra, Ghana',
    categories: ['ai', 'web'],
    stack: ['Angular', 'Django', 'PostgreSQL', 'OpenAI API'],
    accent: '#0B7285',
    cover: { type: 'image', src: cms('9YgJ2qV7T7y4Vw2OytQm'), alt: 'SageBrief practice areas and research dashboard' },
    links: [{ label: 'View live', url: 'https://sagebrief.paulimoke.com/' }],
    impact: [{ num: '~90%', label: 'Less time spent on legal research' }],
    gallery: ['9YgJ2qV7T7y4Vw2OytQm', '1GTNCx9SQbR1qbjShjeg', 'lexn4IdTrGhQ5jM0KEJH', 'GAKXpEbBSHqGg6kbVHyr'].map(id => ({ src: cms(id), alt: 'SageBrief Legal screenshot' })),
    highlights: [
      'Helps lawyers consult more effectively on cases, with curated practice notes and rapid research grounded in verified legal sources.',
      'AI-powered case-strategy recommendations on top of the research.',
      'Cut research time by approximately 90%.',
    ],
  },
  {
    slug: 'regwand-legal',
    name: 'RegWand',
    tagline: 'An AI legal consultant for founders, guiding them through business registration and compliance across African markets in a conversation.',
    label: 'Legal tech · AI & Web',
    role: 'Technology Lead',
    org: 'RegWand — MEST Africa',
    period: 'Sep 2022 – Aug 2023',
    location: 'Accra, Ghana',
    categories: ['ai', 'web'],
    stack: ['Angular', 'Django', 'PostgreSQL', 'Firebase', 'OpenAI API'],
    accent: '#5F3DC4',
    cover: { type: 'logo', src: cms('XFW3AEHSS1SEku2of6R6'), alt: 'RegWand logo', bg: '#F8F9FA' },
    links: [{ label: 'View live', url: 'https://regwand.paulimoke.com/' }],
    video: 'https://www.youtube.com/embed/msFe0q4Ao4E',
    highlights: [
      'Served as Technology Lead for RegWand, designing, architecting and shipping it from scratch.',
      'An AI-powered legal consulting platform that guides startups and entrepreneurs through business registration and regulatory compliance across African markets, in a conversational interface.',
    ],
  },
  {
    slug: 'gradgap',
    name: 'GradGap',
    tagline: 'Finds the hard and soft skill gaps of graduates through vetted assessments, then recommends training and career paths.',
    label: 'Edtech · Web',
    role: 'Technology Lead',
    org: 'MEST Africa portfolio',
    period: 'Sep 2022 – Aug 2023',
    location: 'Accra, Ghana',
    categories: ['web'],
    stack: ['Angular', 'Django', 'PostgreSQL'],
    accent: '#5C3BFE',
    cover: { type: 'image', src: cms('XNYp5PvTW6tedwlEAfww'), alt: 'GradGap profile with a job-readiness score' },
    links: [{ label: 'View live', url: 'https://gradgap.netlify.app/' }],
    gallery: ['XNYp5PvTW6tedwlEAfww', 'ZhJ0DEEQRJyiSjSCCHZt', 'ntDzU9kQju9rUoHZgwf5', 'Z5bA6I7BS7OBZ1Oj29X2', 'EPgzhrLOTFKfjCL338xj', 'GWhFqSJARj6bcgzP5D6r', 'QWe1oepRta3WfVjuq9KG'].map(id => ({ src: cms(id), alt: 'GradGap screenshot' })),
    highlights: [
      'Skill assessment and training platform for graduates and undergraduates.',
      'Identifies hard and soft skill gaps through personality tests and recruiter-vetted assessments.',
      'Recommends tailored training courses and career pathways to improve job readiness.',
    ],
  },
  {
    slug: 'levelup',
    name: 'LevelUp',
    tagline: 'Uber-style booking for workplace therapy: organisations schedule and manage therapy sessions for their employees.',
    label: 'Health · Web',
    role: 'Technology Lead',
    org: 'MEST Africa portfolio',
    period: 'Sep 2022 – Aug 2023',
    location: 'Accra, Ghana',
    categories: ['web', 'backend'],
    stack: ['Angular', 'Django', 'Firebase'],
    accent: '#D6336C',
    highlights: [
      'An Uber-style booking platform that lets organisations schedule and manage therapy sessions for employees.',
      'Built to widen access to workplace mental-health support at scale.',
    ],
  },

  // ─── Mobile ────────────────────────────────────────────────────────────────
  {
    slug: 'wstc-mobile',
    name: 'WSTC Mobile',
    tagline: 'A mobile banking app for a Nigerian investment bank: accounts, investments, transfers and loans.',
    label: 'Fintech · Mobile',
    role: 'Software Mobile Engineer',
    org: 'WSTC Financial Services',
    period: 'Feb 2022 – Feb 2023',
    location: 'Nigeria',
    status: 'Published on Google Play',
    categories: ['mobile'],
    stack: ['Flutter'],
    accent: '#1E64B4',
    cover: { type: 'phones', srcs: [cms('VL9Vs6ZhR3mUlMUZo8Sr'), cms('3g0AjF6sRkun7plL1nGt')], alt: 'WSTC Mobile cash account and investments screens' },
    gallery: ['3g0AjF6sRkun7plL1nGt', 'VL9Vs6ZhR3mUlMUZo8Sr', 'L8aQqGflQiqELjwFarA0', 'vx5QzEcwStOpGGLXAIYy', 'mvsKhTuRmmMBnhECbcOK', 'ITNzs2B7SrqiSp4FDNuY', 'W406IhyRSKmszfCfnZVH', 'Iqg2HVp4RKaRMu3ace5A'].map(id => ({ src: cms(id), alt: 'WSTC Mobile screen' })),
    highlights: [
      'Built and enhanced a mobile banking application for an investment bank, prioritising security, performance and a smooth experience.',
      'Translated complex financial product requirements into clear, accessible mobile interfaces.',
    ],
  },
  {
    slug: 'menji',
    aliases: ['menji-driver'],
    name: 'Menji',
    tagline: 'A ride-hailing service with passenger and driver apps, published on Google Play.',
    label: 'Mobility · Mobile',
    role: 'Mobile App Developer',
    org: 'Impresanera Ltd',
    period: 'Oct 2021 – Aug 2022',
    location: 'Nigeria',
    status: 'Published on Google Play',
    categories: ['mobile'],
    stack: ['Flutter', 'Maps', 'Realtime'],
    accent: '#F2B705',
    cover: { type: 'phones', srcs: [cms('5OAyXlmpTmWv5UEEAf2A'), cms('eZXxAKo0TDm03niGTdNa')], alt: 'Menji passenger booking and driver trip screens' },
    gallery: ['5OAyXlmpTmWv5UEEAf2A', '76CpY3Q9Qq6NlN0tAMJ1', 'fnSnWaqbTY2oSYsICss9', 'AEFOSaNxRaa68XThE8nV', 'YyKHnLQKTyOHPC9y9tnv', 'eZXxAKo0TDm03niGTdNa', 'mhDjWOlrRJmYNm3OiKDD', 'N01ufyZ4RPSgLl6Wxvhz', 'aAA9iJ0tS1WW8lFfyw5h', 'ga7pjciYQmaaP9shyvyM'].map(id => ({ src: cms(id), alt: 'Menji app screen' })),
    highlights: [
      'Developed and maintained the passenger app of a ride-hailing service comparable to Uber or Bolt.',
      'Helped build the companion driver app, rounding out the platform’s features.',
    ],
  },
  {
    slug: 'foodbag',
    name: 'Foodbag',
    tagline: 'A food-ordering mobile app built to strict animation and performance benchmarks.',
    label: 'Food delivery · Mobile',
    role: 'Mobile Engineer',
    org: 'FoodBag',
    period: 'Jun 2022 – Aug 2022',
    location: 'Remote (Contract)',
    categories: ['mobile'],
    stack: ['Mobile', 'Animation'],
    accent: '#E03131',
    highlights: [
      'Worked with the mobile team to architect and build the Foodbag food-ordering app.',
      'Met strict animation and performance benchmarks and delivered a fluid experience on schedule.',
    ],
  },
  {
    slug: 'troopa',
    name: 'Troopa Rider',
    tagline: 'The rider app for Troopa, a logistics platform for package delivery.',
    label: 'Logistics · Mobile',
    role: 'Mobile Developer',
    org: 'Troopa',
    categories: ['mobile'],
    stack: ['Mobile'],
    accent: '#FD7E14',
    links: [{ label: 'Visit troopa.org', url: 'https://troopa.org' }],
    highlights: ['Built the rider-facing mobile app for Troopa’s package delivery platform.'],
  },
  {
    slug: 'zuri-chat',
    name: 'Zuri Chat',
    tagline: 'An open-source Slack alternative built in Flutter by the HNG i8 community.',
    label: 'Open source · Mobile',
    role: 'Mobile Developer',
    org: 'ZuriChat · HNG i8',
    period: 'Aug 2021 – Apr 2022',
    location: 'Remote',
    categories: ['mobile'],
    stack: ['Flutter', 'Testing'],
    accent: '#00B87C',
    cover: { type: 'phones', srcs: [cms('jRzWnpn6SPaBBBb05c6d'), cms('OrzsnZ36SWuFMVbsRkZS')], alt: 'Zuri Chat workspace and channel screens' },
    links: [{ label: 'View on GitHub', url: 'https://github.com/zurichat/zc_app' }],
    gallery: ['OrzsnZ36SWuFMVbsRkZS', 'jRzWnpn6SPaBBBb05c6d', 'YZ8ijCxQ9GbUu6kDDSqw'].map(id => ({ src: cms(id), alt: 'Zuri Chat screen' })),
    highlights: [
      'Contributed to Zuri Chat, an open-source Slack alternative that came out of the HNG i8 internship community.',
      'Reviewed code, worked on core mobile services and wrote automated tests.',
      'Finished HNG i8 as a top finalist with the highest code contribution on the team.',
    ],
  },
  {
    slug: 'budget-pro',
    name: 'BudgetPro',
    tagline: 'A personal finance app for budgeting, saving and investing, built as my final-year project at ANUC Ghana.',
    label: 'Fintech · Thesis project',
    role: 'Sole developer',
    org: 'ANUC Ghana (thesis)',
    categories: ['mobile', 'backend'],
    stack: ['NativeScript Vue', 'Flask', 'Firebase', 'MySQL'],
    accent: '#37B24D',
    cover: { type: 'phones', srcs: [cms('NMUDUHVRcA2dQRWGUWMA'), cms('mUoAXMqVQ06ibW3vK8g3')], alt: 'BudgetPro dashboard and transaction screens' },
    links: [{ label: 'View on GitHub', url: 'https://github.com/pauleke65/budget1' }],
    gallery: ['mUoAXMqVQ06ibW3vK8g3', 'yOwEcmR2RLeltSCAUsNF', 'R4ePnk1TR1aOmjYO5jOk', 'I04EVubmQhGwD9Ft9thb', 'PSSDJltbRvSrIZD3vuq6', 'r97a64gSvKBcyOQYNEfe'].map(id => ({ src: cms(id), alt: 'BudgetPro screen' })),
    highlights: [
      'One platform to create monthly budgets, track spending, save and invest.',
      'Built end to end as a college thesis project: mobile client, Flask API and database.',
    ],
  },
  {
    slug: 'campaigner',
    name: 'Campaigner',
    tagline: 'A student campaign and voting app, built in Flutter from a Behance case study by Pakhi Mangal.',
    label: 'UI build · Mobile',
    role: 'Side project',
    org: 'Personal',
    categories: ['mobile'],
    stack: ['Flutter'],
    accent: '#1C7ED6',
    cover: { type: 'phones', srcs: [cms('4b5YfqdsThGxNKCfVO6g'), cms('l5OigbGHQwqG1WtUB72A')], alt: 'Campaigner welcome and add-voters screens' },
    links: [{ label: 'View on GitHub', url: 'https://github.com/pauleke65/campaigner-flutterui' }],
    gallery: ['l5OigbGHQwqG1WtUB72A', 'uATtl5XQSCVDp4SB6lTh', 'r8v7qxNlRdq4sj3BeBiy', 'OCcMKdUxQVKyWKLC9hrb', '9XsOinbXSYqVrsrW2lOK', 'uu8p6W2pQO2AQufY2IhM', '7zvoXFYsTnyEUsJi2Jif'].map(id => ({ src: cms(id), alt: 'Campaigner screen' })),
    highlights: [
      'A pixel-faithful Flutter build of the Campaigner online voting app case study by Pakhi Mangal on Behance.',
    ],
  },
]

export const projects = [...careerProjects, ...studioProjects]

export const featuredProjects = [
  'blia', 'agtrail', 'hairstyle-try-on', 'trial-manager', 'amtap-fitness', 'ankara-chain',
].map(slug => projects.find(p => p.slug === slug))

export { studioProjects }

export function getProject(slug) {
  return projects.find(p => p.slug === slug || p.aliases?.includes(slug))
}

export function categoryCount(key) {
  return key === 'all' ? projects.length : projects.filter(p => p.categories.includes(key)).length
}
