// PIE Drops Studio projects.
// Generated from PIE-Drops/code/web/work/<slug>/project.js — images live in public/work/<slug>/.
// Edit freely; the studio site is the original source of this copy.

export default [
  {
    slug: "runshelf",
    name: "RunShelf",
    tagline: "Point your phone at a shelf and RunShelf reads every label. A shop owner gets a full inventory without typing 2,000 items.",
    label: "Product · Retail · AI",
    role: "Product strategy, AI app, web, pricing and launch kit",
    org: "PIE Drops Studio (own product)",
    period: "2026",
    platform: "Mobile-first web app (PWA), works offline",
    status: "Live at runshelf.co, with a free plan",
    timeline: "Brief in June 2026. First build in July. Renamed RunShelf in August 2026.",
    deliverables: "Product strategy, AI scanning app, seller storefront, pricing, launch kit, launch film",
    categories: [
      "ai",
      "web",
      "studio"
    ],
    stack: [
      "Next.js",
      "React",
      "IndexedDB",
      "Gemini vision",
      "Paystack",
      "Vercel"
    ],
    studio: true,
    links: [
      {
        label: "Visit RunShelf",
        url: "https://www.runshelf.co"
      },
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=runshelf"
      }
    ],
    cover: {
      type: "image",
      src: "/work/runshelf/card.jpg",
      alt: "RunShelf app on a phone, over a photo of a provision store shelf"
    },
    hero: {
      src: "/work/runshelf/hero.jpg",
      alt: "RunShelf scan screen on a phone, beside a shelf of provisions with product labels being read"
    },
    gallery: [
      {
        src: "/work/runshelf/g1.jpg",
        alt: "Two phones showing the RunShelf home and scan screens on a red background"
      },
      {
        src: "/work/runshelf/g2.jpg",
        alt: "A shelf of drinks and tinned milk with product names detected on each item"
      },
      {
        src: "/work/runshelf/g3.jpg",
        alt: "The RunShelf public changelog page in a browser window"
      },
      {
        src: "/work/runshelf/g4.jpg",
        alt: "The four RunShelf steps: snap, catalogue, confirm, use"
      }
    ],
    sections: [
      {
        heading: "Nobody finishes typing 2,000 items.",
        kicker: "The brief",
        body: [
          "A provision store in Ghana or Nigeria can carry anywhere from 500 to 5,000 different items. Most have no digital records at all. What they have is an exercise book that is weeks out of date.",
          "We started RunShelf as a studio product to fix the first step every shop app skips: getting the stock on record. We began it as Stocka, then renamed it RunShelf in August 2026."
        ]
      },
      {
        heading: "Shop apps assume the stock is already typed in.",
        kicker: "The challenge",
        body: [
          "Tools like Kippa, Bumpa, SellarPro and MyTreda start with manual entry, item by item. For a shop with thousands of products, setup drags on for weeks and is usually abandoned.",
          "The job was to make that first step take an afternoon. It also had to work on a phone, on patchy signal, and be honest about the one thing AI cannot promise: getting every item right on a packed shelf."
        ]
      }
    ],
    highlightsHeading: "Snap. Catalogue. Confirm. Use.",
    highlights: [
      "Snap: the owner photographs shelves section by section. Photos queue offline and upload when there is signal. Supplier invoices, delivery notes and handwritten price lists work too.",
      "Catalogue: a vision model reads every label and builds the stock list with name, brand, size and quantity. It grounds results in the text it can actually read, and scores its own confidence.",
      "Confirm: the owner swipes through the results. The app flags what it is unsure about, and fixing a mistake takes one tap. Records end up right because the owner checked them.",
      "Remembers your shop: confirmed items are learned per store, so repeat scans recognise your own products on sight.",
      "Use: search stock, see what is low, track expiry dates, export to CSV or WhatsApp. Local-first, so the catalogue lives on the phone.",
      "Sell: a seller storefront with cart, checkout and themes, plus staff invites and order slips. Pricing is set by catalogue size, with mobile money checkout through Paystack.",
      "Built with Next.js and React, IndexedDB for local storage, a Gemini vision model chain, Paystack payments and Vercel hosting. Updates are posted in a public changelog."
    ]
  },
  {
    slug: "ankara-chain",
    name: "Ankara Chain",
    tagline: "Open-source infrastructure for tokenising real-world assets in African markets. Soroban contracts live on Stellar testnet, with an SDK, CLI and MCP server on top.",
    label: "Product · Developer tools · Web3",
    role: "Product, contracts, SDK, brand, web",
    org: "PIE Drops Studio (own product)",
    period: "2026",
    platform: "Stellar (Soroban) and EVM, web",
    status: "Live site and docs. Contracts on Stellar testnet. Pre-1.0.",
    timeline: "Spec in March 2026, Stellar testnet deploy in July 2026",
    deliverables: "Smart contracts, TypeScript SDK, CLI, MCP server, brand, landing page and docs",
    categories: [
      "web3",
      "backend",
      "studio"
    ],
    stack: [
      "Rust",
      "Soroban",
      "Stellar",
      "Solidity",
      "Hardhat",
      "TypeScript SDK",
      "MCP"
    ],
    studio: true,
    links: [
      {
        label: "Visit site",
        url: "https://ankarachain.dev"
      },
      {
        label: "Read the docs",
        url: "https://docs.ankarachain.dev"
      },
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=ankara-chain"
      }
    ],
    cover: {
      type: "image",
      src: "/work/ankara-chain/card.jpg",
      alt: "Ankara Chain landing page headline with asset template and Stellar testnet panels"
    },
    hero: {
      src: "/work/ankara-chain/hero.jpg",
      alt: "Ankara Chain landing page and developer docs on a dark green grid"
    },
    gallery: [
      {
        src: "/work/ankara-chain/g1.jpg",
        alt: "The six Ankara Chain asset templates: farmland, commodity receipts, real estate, invoices, carbon credits and mining rights"
      },
      {
        src: "/work/ankara-chain/g2.jpg",
        alt: "Ankara Chain MCP server documentation with tool names"
      },
      {
        src: "/work/ankara-chain/g3.jpg",
        alt: "Seven Soroban contracts deployed on Stellar testnet"
      },
      {
        src: "/work/ankara-chain/g4.jpg",
        alt: "The Ankara Chain SDK, CLI and MCP server side by side"
      }
    ],
    sections: [
      {
        heading: "Tokenising real assets, without the blockchain team.",
        kicker: "The brief",
        body: [
          "Ankara Chain began life as AfriChain. The idea is simple: farmland, warehouse receipts, invoices and property are the things African businesses already trade on trust. If those can live on-chain as tokens with real rules, lenders, buyers and partners can check them without chasing paper.",
          "We built it as open-source infrastructure, MIT licensed. A developer installs the toolkit, deploys the contracts they need, and keeps control of their own keys and business logic. No platform in the middle."
        ]
      },
      {
        heading: "The first contract is the hardest.",
        kicker: "The challenge",
        body: [
          "Asset tokenisation is hard to start. Every team needs contracts for land, receipts, invoices and escrow, and many early teams in Lagos, Accra or Nairobi cannot hire a full blockchain engineering team just to test an idea.",
          "The asset classes here are local and specific. Cocoa and maize receipts, farmland titles, invoices for financing, carbon credits, mining rights. Generic token wrappers do not carry the fields these markets care about."
        ]
      }
    ],
    highlightsHeading: "One toolkit, three ways in.",
    highlights: [
      "Six asset templates built for African markets: Farmland, Commodity Receipts, Real Estate, Invoices, Carbon Credits and Mining Rights.",
      "Milestone escrow, a collateral vault, a manual price oracle and ramp settlement contracts, written in Rust for Soroban on Stellar. Seven contracts are deployed to Stellar testnet.",
      "The same contract surface on EVM, written in Solidity and covered by a Hardhat test suite. EVM contracts are not deployed yet.",
      "A TypeScript SDK, a command line tool and an MCP server, so a developer can work in code, in the terminal, or by describing the job to an AI assistant.",
      "A landing page and a full docs site with quickstarts for both Stellar and EVM."
    ]
  },
  {
    slug: "sapa-radar",
    name: "Sapa Radar",
    tagline: "A money app that talks like a Nigerian friend and tells you when sapa is coming. It started as Sapa Radar and grew into Chop Better.",
    label: "Venture · Fintech · AI",
    role: "Product strategy, brand, UX/UI, prototype",
    org: "PIE Drops Studio (own product)",
    period: "2026",
    platform: "Android first (Flutter), WhatsApp nudges",
    status: "Concept in design. Not live.",
    timeline: "April to June 2026",
    deliverables: "Product brief, brand and voice, design system, app screens, landing pages, viral quiz, Android starter",
    categories: [
      "mobile",
      "ai",
      "studio"
    ],
    stack: [
      "Flutter",
      "Design system",
      "Product strategy"
    ],
    studio: true,
    links: [
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=sapa-radar"
      }
    ],
    cover: {
      type: "image",
      src: "/work/sapa-radar/card.jpg",
      alt: "Chop Better app screens, the product Sapa Radar grew into, on a gold background"
    },
    hero: {
      src: "/work/sapa-radar/hero.jpg",
      alt: "Sapa Radar and Chop Better app screens on a dark gold and green background"
    },
    gallery: [
      {
        src: "/work/sapa-radar/g1.jpg",
        alt: "Sapa personality picker screen with six personality types and their Sapa risk scores"
      },
      {
        src: "/work/sapa-radar/g2.jpg",
        alt: "Chop Better splash screen and Connect your storage screen side by side"
      },
      {
        src: "/work/sapa-radar/g3.jpg",
        alt: "Chop Better brand colour palette and typefaces"
      },
      {
        src: "/work/sapa-radar/g4.jpg",
        alt: "Chop Better landing page design shown in a browser frame"
      }
    ],
    sections: [
      {
        heading: "Sapa is coming. Be the first to know.",
        kicker: "The brief",
        body: [
          "In Nigeria, sapa is not just being broke. It is a character everyone knows, feared and funny at once, and yet every finance app treats it like a spreadsheet problem.",
          "Sapa Radar began as a studio venture idea: an early-warning system that predicts the day your money runs out and says so in plain Nigerian voice. Within a day of the first brief, the idea widened. Sapa Radar stayed as the hook, and the product around it became Chop Better, an all-in-one AI personal finance app for West Africans.",
          "This is a studio-owned concept. It is in design and prototype, with no live product or users yet. This page shows the thinking and the work so far."
        ]
      },
      {
        heading: "Finance apps were built for somewhere else.",
        kicker: "The challenge",
        body: [
          "Most personal finance apps assume one stable currency, a steady salary and a bank that opens its data to apps. West African money does not work like that. Income comes from several places. Naira and cedi swing. A lot of spending is cash, and family, church and community obligations are part of the budget.",
          "The record of what you spend often lives in bank SMS alerts and fintech push notifications. And the usual tone, a gentle lecture about saving, does not land. The challenge was to build something that fits how people here actually handle money, and that people would want to open."
        ]
      }
    ],
    highlightsHeading: "Built around how money really moves.",
    highlights: [
      "Sapa Date. Using spending data, the app works out the day you are likely to run out of money this month and tells you early.",
      "Sapa Quiz. A ten-question quiz sorts you into one of six Sapa personalities, from The Soft Lifer to The Reluctant Saver, with a result card made for sharing.",
      "Capture without typing. The plan reads bank SMS and app notifications on Android, and lets you log cash by voice or a quick text like \"3.5k suya\".",
      "The Catchup screen. A daily inbox where you confirm the transactions the app collected, one tap each.",
      "A voice with a point of view. A written voice library, a family of mascot characters and nudges in Nigerian English instead of banker language.",
      "A full design system. Colour, type, components and eight app screens, plus landing page directions and a Flutter Android starter to build on."
    ]
  },
  {
    slug: "keep",
    name: "Keep",
    tagline: "An accountability app where your friends hold money on your promises. Built by the studio, now in internal testing.",
    label: "Product · Mobile · Fintech",
    role: "Product design, mobile build",
    org: "PIE Drops Studio (own product)",
    period: "2026",
    platform: "iOS and Android (React Native, Expo)",
    status: "In testing. Internal TestFlight only. No real money moves yet.",
    timeline: "Started September 2026",
    deliverables: "Product design, mobile app, launch videos",
    categories: [
      "mobile",
      "studio"
    ],
    stack: [
      "React Native",
      "Expo",
      "Product design"
    ],
    studio: true,
    links: [
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=keep"
      }
    ],
    cover: {
      type: "image",
      src: "/work/keep/card.jpg",
      alt: "Three screens of the Keep app: a first contract, circles of friends and an accepted proof"
    },
    hero: {
      src: "/work/keep/hero.jpg",
      alt: "Keep app screens: the first contract, circles and a proof review"
    },
    gallery: [
      {
        src: "/work/keep/g1.jpg",
        alt: "The Keep first-contract screen, where the promise is a sentence you fill in"
      },
      {
        src: "/work/keep/g2.jpg",
        alt: "Keep screens for choosing the stake and signing the contract"
      },
      {
        src: "/work/keep/g3.jpg",
        alt: "Keep screens for sending proof and getting it accepted"
      },
      {
        src: "/work/keep/g4.jpg",
        alt: "Keep app icon beside the proof, review and circles screens"
      }
    ],
    sections: [
      {
        heading: "Make a promise cost something.",
        kicker: "The brief",
        body: [
          "Most of us know what we should do. We tell friends we will run, read, save or wake up early. Then nothing happens, because nothing was ever on the line.",
          "Keep is our answer. You write a promise as a one-line contract and put an amount behind it. Friends in your circle hold that stake. Send proof, they check it, and the money settles when the round ends.",
          "We are building it ourselves, in the open, as a studio product."
        ]
      },
      {
        heading: "Stakes without the shame.",
        kicker: "The challenge",
        body: [
          "Habit apps lean on streaks. Miss one day and the number goes to zero, so people quit. We wanted something kinder and still serious: a weekly target, not a streak. Three runs a week, not seven days in a row.",
          "Then there is trust. If friends hold your money, the app has to make proof easy to send and a verdict easy to give. Nobody should have to chase anyone or argue in a group chat."
        ]
      }
    ],
    highlightsHeading: "One sentence, one stake, one verdict.",
    highlights: [
      "The contract is a sentence you fill in. Pick the activity, the target, the deadline and the stake by tapping the gold words.",
      "A weekly target replaces the streak. You are counted on the week, so one bad day does not erase the rest.",
      "Circles of friends hold you to it. Pick who checks your proof before you sign.",
      "Proof is built in: take a photo in the app so the time on it is real, and the contract can name an activity such as a Strava run.",
      "Reviewers get a short checklist from the contract and can accept or ask a question. Disagree with a verdict and you can appeal.",
      "A warm paper-and-gold look in light and dark, built with Expo and React Native."
    ]
  },
  {
    slug: "hairstyle-try-on",
    name: "Hairstyle Try-On",
    tagline: "See braids, locs and twists on your own face before you book. Built for hair types 1 to 4C. Live on the App Store.",
    label: "Product · Consumer App · AI",
    role: "Product, design, engineering, brand, growth",
    org: "PIE Drops Studio (own product)",
    period: "2026",
    platform: "iOS (Expo / React Native), NestJS and Postgres backend",
    status: "Live on the App Store. Early days.",
    timeline: "First commit 18 Sep 2026. Live on the App Store 28 Sep 2026.",
    deliverables: "iOS app, backend, brand, App Store listing, marketing site, growth kit",
    categories: [
      "mobile",
      "ai",
      "backend",
      "studio"
    ],
    stack: [
      "Expo",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "RevenueCat",
      "PostHog"
    ],
    studio: true,
    links: [
      {
        label: "View on the App Store",
        url: "https://apps.apple.com/app/id6813597997"
      },
      {
        label: "Visit site",
        url: "https://hairstyle.piedrops.com"
      },
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=hairstyle-try-on"
      }
    ],
    cover: {
      type: "image",
      src: "/work/hairstyle-try-on/card.jpg",
      alt: "Hairstyle Try-On app showing knotless box braids on a selfie, surrounded by colour and style options"
    },
    hero: {
      src: "/work/hairstyle-try-on/hero.jpg",
      alt: "Hairstyle Try-On app screens showing a hair colour picker and a knotless braid result"
    },
    gallery: [
      {
        src: "/work/hairstyle-try-on/g1.jpg",
        alt: "Knotless box braids on a selfie, with the original photo shown in an inset"
      },
      {
        src: "/work/hairstyle-try-on/g2.jpg",
        alt: "Six style results on one face: knotless, Fulani braids, butterfly locs, faux locs, Senegalese twists, silk press"
      },
      {
        src: "/work/hairstyle-try-on/g3.jpg",
        alt: "The same braids in honey blonde, ginger, burgundy and natural black"
      },
      {
        src: "/work/hairstyle-try-on/g4.jpg",
        alt: "Three app screens: the style browser, the hair colour picker and a braid result"
      }
    ],
    sections: [
      {
        heading: "Know the look before you sit in the chair.",
        kicker: "The brief",
        body: [
          "Braids and locs take hours and real money. Most people choose from a photo of someone else, then hope. We built Hairstyle Try-On so you can see the style on your own face first.",
          "You take a selfie, pick a braid, loc or twist style, and get a photoreal result. It is built for hair types 1 to 4C and every skin tone. The line on the store page says it plainly: see the hairstyle on your face before you book."
        ]
      },
      {
        heading: "See the result before you pay for anything.",
        kicker: "The challenge",
        body: [
          "Before writing a line of code we studied three of the leading hair try-on apps, screen by screen. None of them let you see a result before the paywall. They sold a promise. Our aim was to be good where the market leaders fall short: coily, textured hair and deeper skin tones.",
          "The brief for us was simple. Show a real result first. Keep the face, skin tone and background exactly as they are. Change only the hair. And make the app look and feel like a premium product, not a filter."
        ]
      }
    ],
    highlightsHeading: "One selfie. Real styles. Your own face.",
    highlights: [
      "A style library that starts where our customers start: knotless braids, Fulani braids, butterfly locs, faux locs, Senegalese twists, plus silk press and other looks across hair types 1 to 4C.",
      "Colour tried on your own photo, with 31 shades shown on coils so you see how a colour reads on textured hair. Cut and texture stay as they are.",
      "Copy a style you have seen. Add a photo of any hairstyle and the app puts it on your face.",
      "Hold the photo to compare against your original. Save the look.",
      "Privacy built in. Photos are deleted from our storage within 72 hours and are never used to train a model.",
      "A dark, quiet interface with one warm copper accent, chosen to hold up over both light and deep skin tones. Serif titles, clean sans for everything else. No invented social proof.",
      "Built on Expo and React Native, with a NestJS and Postgres backend on Railway, subscriptions through RevenueCat and product analytics through PostHog."
    ]
  },
  {
    slug: "geisha-mama",
    name: "Geisha Mama G",
    tagline: "A public Mother’s Day voting site for Geisha, built on a three-day timeline. When the votes came in, our anti-bot checks caught large-scale duplicate voting.",
    label: "Client · Campaign · Web",
    role: "UI/UX, Web Build, Vote Integrity",
    org: "Geisha, Wild Fusion Ghana",
    period: "2026",
    platform: "Mobile-first web. Static HTML, Firebase, Netlify",
    status: "Campaign complete. Voting closed 11 June 2026",
    timeline: "Proposed as a 3-day build (proposal dated 26 May 2026)",
    deliverables: "Voting website, nominee pages, leaderboard, admin panel, vote-integrity audit",
    categories: [
      "web",
      "studio"
    ],
    stack: [
      "HTML",
      "Firebase",
      "Netlify",
      "Anti-bot audit"
    ],
    studio: true,
    links: [
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=geisha-mama"
      }
    ],
    cover: {
      type: "image",
      src: "/work/geisha-mama/card.jpg",
      alt: "Geisha Mama G voting site shown on three phones, surrounded by Geisha soap packs"
    },
    hero: {
      src: "/work/geisha-mama/hero.jpg",
      alt: "Geisha Mama G voting site on three phones with Geisha soap packs and brand pattern"
    },
    gallery: [
      {
        src: "/work/geisha-mama/g1.jpg",
        alt: "Vote integrity numbers: 35,875 votes submitted, 34,037 duplicates removed, 1,838 genuine votes remain"
      },
      {
        src: "/work/geisha-mama/g2.jpg",
        alt: "A nominee page on a phone with photo, vote button and audio story player"
      },
      {
        src: "/work/geisha-mama/g3.jpg",
        alt: "Twelve numbered layers of anti-bot vote checks"
      },
      {
        src: "/work/geisha-mama/g4.jpg",
        alt: "Live in three days, with the Geisha brand colours and the Share This Campaign panel"
      }
    ],
    sections: [
      {
        heading: "Honour the mothers who give the most.",
        kicker: "The brief",
        body: [
          "Geisha, the soap brand of Wild Fusion Ghana Ltd, ran its Mama G campaign for Mother’s Day 2026. The public was asked to vote for ten shortlisted mothers and mother figures who had gone above and beyond for the people around them.",
          "Geisha needed a site that looked like Geisha, worked on a phone, and could be live fast. It also needed to count votes in a way people would trust."
        ]
      },
      {
        heading: "Open voting gets gamed.",
        kicker: "The challenge",
        body: [
          "Any public vote invites people who want to push the numbers. The campaign was built to be shared on WhatsApp and social media, so the site had to work well on a phone first.",
          "It also had to stand up to repeat voting. The rule was simple: one device, one vote, per nominee. Holding to that rule was the hard part."
        ]
      }
    ],
    highlightsHeading: "A fast site and a fair count.",
    highlights: [
      "A mobile-first site in the Geisha palette and Colosseum type, with a countdown, a card for each nominee, and a clear Vote button.",
      "A page for every nominee with her photo, her story, an audio player, and share buttons for WhatsApp, Facebook, Instagram and X.",
      "A leaderboard, and an admin panel for managing nominee content.",
      "Built as static HTML on Firebase and Netlify, which kept the site light and quick to ship.",
      "A 12-layer audit engine that checks votes across several signals, including device fingerprints and growth-rate analysis, and removes duplicates."
    ]
  },
  {
    slug: "youthful-treat",
    name: "Youthful Treat",
    tagline: "Brand, packaging, Instagram templates and a landing page for an Abuja banana bread baker. Made so one person can run it every week.",
    label: "Client · Brand · Food & Beverage",
    role: "Brand identity, packaging, social templates, landing page",
    org: "Youthful Treat, Abuja",
    period: "2026",
    platform: "Instagram, print, responsive web",
    status: "Delivered. Instagram is where orders land.",
    timeline: "May 2026",
    deliverables: "Loaf-in-foil mark and 3 lockups, palette and type, voice guide, foil-tray sticker, business card, 9 Instagram templates, one-page landing page, self-shoot photo kit",
    categories: [
      "studio"
    ],
    stack: [
      "Brand identity",
      "Packaging",
      "Landing page",
      "Instagram templates"
    ],
    studio: true,
    links: [
      {
        label: "See the Instagram",
        url: "https://instagram.com/youthful.treat"
      },
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=youthful-treat"
      }
    ],
    cover: {
      type: "image",
      src: "/work/youthful-treat/card.jpg",
      alt: "Youthful Treat landing page and Instagram templates for an Abuja banana bread brand"
    },
    hero: {
      src: "/work/youthful-treat/hero.jpg",
      alt: "A top-down photo of a banana bread loaf in a foil tray, with Youthful Treat Instagram templates and the circular stamp"
    },
    gallery: [
      {
        src: "/work/youthful-treat/g1.jpg",
        alt: "Youthful Treat brand sheet: primary lockup, circular stamp, horizontal lockup, palette and type"
      },
      {
        src: "/work/youthful-treat/g2.jpg",
        alt: "Six Youthful Treat Instagram templates in banana, cocoa, cream and blush"
      },
      {
        src: "/work/youthful-treat/g3.jpg",
        alt: "Banana bread loaf in a foil tray beside the foil-tray sticker and business card"
      },
      {
        src: "/work/youthful-treat/g4.jpg",
        alt: "Youthful Treat landing page: hero, how it works and FAQ sections"
      }
    ],
    sections: [
      {
        heading: "Real demand. No brand.",
        kicker: "The brief",
        body: [
          "Youthful Treat is a home-baked banana bread business in Abuja. It ran on Instagram DMs and a loyal Saturday pickup crowd. The bread sold. The brand did not exist.",
          "The founder needed an identity strong enough to grow into a proper food business, without losing the warmth that made people order in the first place."
        ]
      },
      {
        heading: "No system, just vibes.",
        kicker: "The challenge",
        body: [
          "Every post used a different font. Customers could not tell these loaves from any other home baker's at a glance.",
          "There was one baker, no design team and no photographer. Whatever we shipped had to be self-serve: templates she could refill every week without us."
        ]
      }
    ],
    highlightsHeading: "Cut the noise. Build the system.",
    highlights: [
      "One line the brand has to say in two seconds: \"Best banana bread in Abuja.\" Confident and local.",
      "A warm, food-first identity. Banana yellow and cocoa brown, Fraunces with Inter, and a loaf-in-foil mark that sits on a real foil tray.",
      "A foil-tray sticker and business card, so the packaging looks like the Instagram feed.",
      "Nine reusable Instagram templates plus a voice guide: warm, confident, a little cheeky.",
      "A responsive one-page site with flavours, toppings, how to order, an FAQ and DM and WhatsApp buttons.",
      "A self-shoot photo kit, so the founder can shoot the hero loaf, slice and crave shots on a phone."
    ]
  },
  {
    slug: "pie-drops-brand",
    name: "PIE Drops Brand",
    tagline: "The studio’s own identity. A circle, a bar and three slabs spell P, I and E. One mark, ten logo files, used on the site and across social.",
    label: "Brand · Identity · Studio",
    role: "Identity, logo system, brand guidelines, content kits",
    org: "PIE Drops Studio (in-house)",
    period: "2026",
    platform: "Web, social, WhatsApp, TikTok, print-ready PNG and SVG",
    status: "Live. In use on piedrops.com.",
    timeline: "Logo files exported April 2026. Messaging refreshed July 2026.",
    deliverables: "Construct mark, wordmark lockups, icon, colour and type system, brand sheet, social, WhatsApp and TikTok kits, share card",
    categories: [
      "studio"
    ],
    stack: [
      "Logo system",
      "SVG",
      "Brand guidelines"
    ],
    studio: true,
    links: [
      {
        label: "Visit piedrops.com",
        url: "https://piedrops.com"
      },
      {
        label: "Studio case study",
        url: "https://piedrops.com/portfolio-item.html?project=pie-drops-brand"
      }
    ],
    cover: {
      type: "image",
      src: "/work/pie-drops-brand/card.jpg",
      alt: "The PIE Drops Studio Construct mark on a black background with a crimson glow"
    },
    hero: {
      src: "/work/pie-drops-brand/hero.jpg",
      alt: "The PIE Drops Construct mark shown on dark, light and crimson cards"
    },
    gallery: [
      {
        src: "/work/pie-drops-brand/g1.jpg",
        alt: "Crimson poster with the Construct mark and the line Scale the work. Not the headcount."
      },
      {
        src: "/work/pie-drops-brand/g2.jpg",
        alt: "Anatomy of the Construct mark: P is a circle, I is a bar, E is three bars"
      },
      {
        src: "/work/pie-drops-brand/g3.jpg",
        alt: "The mark scaled from 320 pixels down to 52 pixels, with the P-circle icon down to 16 pixels"
      },
      {
        src: "/work/pie-drops-brand/g4.jpg",
        alt: "The PIE Drops Studio wordmark lockup on dark, light and crimson"
      }
    ],
    sections: [
      {
        heading: "A studio needs a face it can ship with.",
        kicker: "The brief",
        body: [
          "PIE Drops Studio builds brands, products and content systems for founders. The studio needed an identity that did the same job: simple enough to hold up at favicon size, bold enough to stand out on a crowded feed.",
          "We built it in-house, so we held ourselves to the standard we set for clients. One mark. A tight palette. Rules written down so anyone on the team can use it without asking."
        ]
      },
      {
        heading: "One mark. Every size. Every surface.",
        kicker: "The challenge",
        body: [
          "The identity has to work everywhere the studio shows up: a browser tab, a WhatsApp profile, a TikTok end card, a pitch deck, a printed proposal. That means it must read on black, on off-white and on crimson, and it must still read when it is 16 pixels wide.",
          "The positioning moved too. In July 2026 the studio shifted its message from AI-first to business-first. The identity had to carry that change without a redraw."
        ]
      }
    ],
    highlightsHeading: "The Construct mark",
    highlights: [
      "A circle is P. A bar is I. Three slabs are E. Each letter is reduced to its simplest shape, so the mark is built from three primitives and nothing else.",
      "Ten SVG logo files cover marks on dark, light and crimson, a P-circle icon for avatars, and full and short wordmark lockups. The wordmark is set in Syne 800 and embedded in the SVG, so it renders the same everywhere. Twenty PNG exports sit alongside, with transparent and padded versions.",
      "The palette is three colours: black #0A0A0A, off-white #F6F4F0 and crimson #C0392B. Headings are Syne. Body copy is Barlow Condensed.",
      "A brand sheet documents the variants, the scale from hero size down to favicon, where each version lives, four things never to do, and the anatomy of the mark. On crimson, the I bar turns translucent white so the mark stays on-palette.",
      "Content kits for social, WhatsApp and TikTok, plus a share card, apply the same rules to the channels where the studio posts."
    ]
  }
]
