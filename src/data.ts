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
  stats: [
    { value: "2,850+", label: "Families Fed to Date" },
    { value: "100%", label: "Direct Impact on Feeding" },
  ],
  image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/4d089a14-3f7e-4f64-9e8b-34d333fd83c0.jpg",
  pillars: [
    {
      title: "Fulfil Christ’s Mandate",
      description: "Share the love that our Saviour has shown to us. He has given us this mandate in the two commandments above all – Love God and Love your neighbour. Your donation to Grace Basket 2026 brings His word to action.",
      icon: "cross",
    },
    {
      title: "Help more Families",
      description: "Christ calls us to care for His brethren, and throughout His ministry, He made sure the people were fed. Help us carry His ministry forward in this season by giving to Grace Basket 2026.",
      icon: "users",
    },
    {
      title: "Inherit His Promises",
      description: "God never forgets your labour of love. Every food basket shared is love shown in His name. Bring hope to families, serve diligently, and inherit God’s promises. Join us in faith by donating to Grace Basket 2026.",
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
    basketContents: [
      "10kg Premium Parboiled Rice",
      "5L Vegetable Cooking Oil",
      "Beans & Legumes Family Pack",
      "Festive Chicken / Turkey Portion",
      "Seasoning Spices, Tomatoes & Salt"
    ]
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
    basketContents: ["5 Full Food Hampers for 5 Distinct Households"]
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
    basketContents: ["10 Abundant Christmas Hampers Given"]
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
    basketContents: ["20 Food Baskets or More"]
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
