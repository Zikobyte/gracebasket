import { DonationTier, BankAccountDetails } from './types';

export const HERO_DATA = {
  badge: "Grace Basket 2026 · Matthew 25:40",
  titlePart1: "Share the Love of Christ",
  titlePart2: "with more",
  titlePart3: "Families",
  subheadline: "Share Christ’s love with a Christmas food hamper for a family.",
  scripture: "“...inasmuch as you did it to one of the least of these My brethren, you did it to Me.”",
  scriptureRef: "Matthew 25:40",
  heroSlides: [
    {
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/2232ac83-0295-4d3a-8f02-cb86e3cb00f4.jpg",
      caption: "Christmas Food Distribution Outreach"
    },
    {
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/8611cf08-a028-4bf3-9231-02cdd0c69086.jpg",
      caption: "Spreading Joy & Food to Families in Need"
    }
  ],
};

export const ABOUT_DATA = {
  badge: "Grace Basket 2026 Mandate",
  image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/4d089a14-3f7e-4f64-9e8b-34d333fd83c0.jpg",
  pillars: [
    {
      title: "Fulfil Christ’s Mandate",
      description: "Love God and love your neighbour by sharing with families this Christmas.",
      icon: "cross",
    },
    {
      title: "Help More Families",
      description: "Help bring Christmas food hampers to families in the community.",
      icon: "users",
    },
    {
      title: "Inherit His Promises",
      description: "God never forgets your labour of love (Hebrews 6:10).",
      icon: "sparkles",
    },
  ],
};

export const DONATION_TIERS: DonationTier[] = [
  {
    id: "tier-1",
    num: "01",
    title: "1 Food Basket",
    subtitle: "One standard food hamper for one family.",
    amount: "₦30,000",
    families: "1 Family",
    tags: ["₦30,000", "1 Family Fed"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/f55688ba-b3ea-4c12-99ce-85814259d3ad.jpg",
    description: "Sponsor one family to receive the standard Grace Basket Christmas food hamper.",
    basketContents: ["One standard Christmas food hamper for one family"]
  },
  {
    id: "tier-5",
    num: "02",
    title: "5 Food Baskets",
    subtitle: "Five standard food hampers for five families.",
    amount: "₦150,000",
    families: "5 Families",
    tags: ["₦150,000", "5 Families Fed"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/4d089a14-3f7e-4f64-9e8b-34d333fd83c0.jpg",
    description: "Sponsor five families. Each family receives the same standard Grace Basket Christmas food hamper.",
    basketContents: [
      "Five standard Christmas food hampers, one for each family",
      "On the day intercessory prayer support"
    ]
  },
  {
    id: "tier-10",
    num: "03",
    title: "10 Food Baskets",
    subtitle: "Ten standard food hampers for ten families.",
    amount: "₦300,000",
    families: "10 Families",
    tags: ["₦300,000", "10 Families Fed"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/8611cf08-a028-4bf3-9231-02cdd0c69086.jpg",
    description: "Sponsor ten families. Each family receives the same standard Grace Basket Christmas food hamper.",
    basketContents: [
      "Ten standard Christmas food hampers, one for each family"
    ]
  },
  {
    id: "tier-community",
    num: "04",
    title: "Community Outreach Partner",
    subtitle: "Sponsor 20 or more standard food hampers.",
    amount: "₦600,000+",
    families: "20+ Families",
    tags: ["Community Reach", "Major Partner"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/2232ac83-0295-4d3a-8f02-cb86e3cb00f4.jpg",
    description: "Sponsor 20 or more families. Each family receives the same standard Grace Basket Christmas food hamper.",
    basketContents: [
      "At least 20 standard Christmas food hampers, one for each family"
    ]
  }
];



export const BANK_DETAILS: BankAccountDetails = {
  bankName: "Zenith Bank PLC",
  accountName: "Grace Basket Project Outreach",
  accountNumber: "1018923481",
  sortCode: "057150013",
  reference: "Grace Basket 2026",
};

export const DONATION_AMOUNTS = [
  { amount: 30000, label: "₦30,000", description: "Feeds 1 family" },
  { amount: 150000, label: "₦150,000", description: "Feeds 5 families", popular: true },
  { amount: 300000, label: "₦300,000", description: "Feeds 10 families" },
];
