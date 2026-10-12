import { DonationTier, FaithPillar, BankAccountDetails } from './types';

export const HERO_DATA = {
  badge: "Grace Basket 2026 · Matthew 25:40",
  titlePart1: "Share the Love of Christ",
  titlePart2: "with more",
  titlePart3: "Families",
  subheadline: "Your gift goes towards feeding people this Christmas who might otherwise go unfed.",
  scripture: "“...inasmuch as you did it to one of the least of these My brethren, you did it to Me.”",
  scriptureRef: "Matthew 25:40",
  previousStatNumber: "2,850+",
  previousStatLabel: "Families Fed to Date",
  previousStatSub: "Christmas Outreaches",
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
  miniCard: {
    title: "Sponsor 1 Food Basket",
    cost: "₦30,000 = 1 Family",
    joined: "1,420+ Sponsored",
    thumbnail: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/f55688ba-b3ea-4c12-99ce-85814259d3ad.jpg"
  }
};

export const ABOUT_DATA = {
  badge: "Grace Basket 2026 Mandate",
  headline: "For most of us, Christmas is laughter, a full table, and family. Join us in bringing the good cheer of the season to more families who might otherwise go unfed.",
  scriptureTheme: "“...inasmuch as you did it to one of the least of these My brethren, you did it to Me.” (Matthew 25:40)",
  image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/4d089a14-3f7e-4f64-9e8b-34d333fd83c0.jpg",
  clientSatisfaction: "100% Direct Outreach",
  stats: [
    { value: "2,850+", label: "Families Fed to Date" },
    { value: "100%", label: "Direct Impact on Feeding" },
  ],
  partnerLogos: [
    { name: "FAITH & HOPE", style: "font-black tracking-widest text-base text-blue-900" },
    { name: "CHRISTIAN AID", style: "font-black tracking-widest text-base text-blue-900" },
    { name: "GRACE OUTREACH", style: "font-black tracking-widest text-base text-blue-900" },
    { name: "LOVE IN ACTION", style: "font-black tracking-widest text-base text-blue-900" },
    { name: "KINGDOM CARE", style: "font-black tracking-widest text-base text-blue-900" },
  ],
};

export const DONATION_TIERS: DonationTier[] = [
  {
    id: "tier-1",
    num: "01",
    title: "1 Food Basket",
    subtitle: "₦30,000 feeds 1 family this Christmas who might otherwise go unfed.",
    amount: "₦30,000",
    families: "1 Family",
    tags: ["₦30,000", "1 Family Fed"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/f55688ba-b3ea-4c12-99ce-85814259d3ad.jpg",
    description: "Provide a complete Christmas food hamper packed with rice, vegetable oil, seasoning cubes, tomato paste, beans, and festive poultry so an entire family gathers with dignity.",
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
    subtitle: "₦150,000 provides festive nourishment and joy to 5 complete families.",
    amount: "₦150,000",
    families: "5 Families",
    tags: ["₦150,000", "5 Families Fed"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/4d089a14-3f7e-4f64-9e8b-34d333fd83c0.jpg",
    description: "Multiply the blessing across five vulnerable households. Each family receives a generous holiday basket to bring warmth, laughter, and hope this Christmas season.",
    basketContents: [
      "5 Full Food Hampers for 5 Distinct Households",
      "50kg Total Grain & Rice Distribution",
      "Pure Vegetable Oil & Tomato Puree Supplies",
      "Full Protein Festive Package for each home",
      "Handwritten Christmas Scripture Card & Prayer"
    ]
  },
  {
    id: "tier-10",
    num: "03",
    title: "10 Food Baskets",
    subtitle: "₦300,000 transforms an entire community cluster with 10 abundant food baskets.",
    amount: "₦300,000",
    families: "10 Families",
    tags: ["₦300,000", "10 Families Fed"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/8611cf08-a028-4bf3-9231-02cdd0c69086.jpg",
    description: "A monumental contribution that feeds over 50 individuals across 10 families. Your generous sponsorship ensures children, mothers, and elderly experience Christ's tangible love.",
    basketContents: [
      "10 Abundant Christmas Hampers Delivered",
      "Bulk Distribution of Staples & High-Protein Food",
      "Beverages, Sweet Treats & Holiday Necessities",
      "Personalized Delivery Report & Outreach Media",
      "Direct Impact Notification to Sponsor"
    ]
  },
  {
    id: "tier-community",
    num: "04",
    title: "Community Outreach Partner",
    subtitle: "Sponsor 20+ food baskets or an entire neighborhood feeding station.",
    amount: "₦600,000+",
    families: "20+ Families",
    tags: ["Community Reach", "Major Partner"],
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/2232ac83-0295-4d3a-8f02-cb86e3cb00f4.jpg",
    description: "Partner with Grace Basket 2026 as a major community anchor. Feed an entire ward, orphanage, or impoverished settlement during the Christmas week.",
    basketContents: [
      "20+ Coordinated Family Food Deliveries",
      "Community Feeding Feast Logistics Covered",
      "Dedicated On-Ground Outreach Recognition",
      "Detailed Video & Photography Impact Dossier"
    ]
  }
];

export const FAITH_PILLARS_DATA = {
  badge: "Sponsor a Food Basket Today",
  headline: "Inherit His Promises as You Feed His People",
  subhead: "God never forgets your labour of love. Every food basket shared is love shown in His name. Bring hope to families, serve diligently, and inherit God’s promises.",
  bottomText: "For most of us, Christmas is laughter, a full table, and family. Join us in bringing the good cheer of the season to more families. Donate via direct bank transfer below.",
  image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/2232ac83-0295-4d3a-8f02-cb86e3cb00f4.jpg",
  pillars: [
    {
      id: "mandate",
      title: "Fulfil Christ’s Mandate",
      description: "Share the love that our Saviour has shown to us. He has given us this mandate in the two commandments above all – Love God and Love your neighbor. Your donation brings His word to action.",
      icon: "cross" as const,
    },
    {
      id: "help-families",
      title: "Help More Families",
      description: "For most of us, Christmas is laughter, a full table, and family. Join us in bringing the good cheer of the season to more families who might otherwise go unfed.",
      icon: "users" as const,
    },
    {
      id: "inherit-promises",
      title: "Inherit His Promises",
      description: "God never forgets your labour of love. Every food basket shared is love shown in His name. Bring hope to families, serve diligently, and inherit God’s promises. Join us in faith by donating to Grace Basket 2026.",
      icon: "sparkles" as const,
    },
  ],
};

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
