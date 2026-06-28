export type Bilingual = { en: string; bn: string };

export type ListTab = {
  id: string;
  label: Bilingual;
  icon: "education" | "dawah" | "service" | "income" | "service-expense" | "management" | "welfare" | "health" | "environment" | "disaster";
  items: Bilingual[];
  blocks?: {
    title?: Bilingual;
    intro?: Bilingual;
    items?: Bilingual[];
    outro?: Bilingual;
  }[];
};

export const principlesItems: Bilingual[] = [
  {
    bn: "পবিত্র কুরআন ও আল্লাহর রাসূল মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম)-এর সুন্নাহ তথা কর্মনীতিই উত্তর চর মানব কল্যাণ ফাউন্ডেশনের মূল আদর্শ।",
    en: "The Holy Qur'an and the Sunnah of Prophet Muhammad (peace be upon him) are the core ideals of Uttar Char Manob Kalyan Foundation.",
  },
  {
    bn: "ইসলামের প্রাথমিক যুগের শ্রেষ্ঠ মুসলিমদের অনুসৃত পদ্ধতির আলোকে কুরআন ও সুন্নাহভিত্তিক মধ্যপন্থা অবলম্বন করা আমাদের নীতি।",
    en: "We follow a Qur'an and Sunnah-based balanced path inspired by the best practices of early Muslims.",
  },
  {
    bn: "উম্মাহর ঐক্য, সংহতি ও পারস্পরিক ভ্রাতৃত্বের নীতি মেনে চলা।",
    en: "Upholding unity, solidarity, and brotherhood within the community.",
  },
  {
    bn: "সৎকাজে উৎসাহ দান ও অসৎকাজ থেকে বিরত রাখার মাধ্যমে সামাজিক ও ধর্মীয় মূল্যবোধ সংহতকরণ এবং মানবিক চেতনার জাগরণ।",
    en: "Strengthening social and moral values by encouraging good deeds and discouraging wrongdoing.",
  },
  {
    bn: "ইসলামী দাওয়াহ এবং কার্যক্রমের ক্ষেত্রে উগ্রতা বা কঠোরতা পরিহার করে উদারতা ও সহনশীলতার নীতি অবলম্বন করা এবং দাওয়াহ ও অন্যান্য কার্যক্রম পরিচালনায় প্রজ্ঞা, বিচক্ষণতা এবং পরিস্থিতি বিবেচনা করে সিদ্ধান্ত গ্রহণ করা।",
    en: "Conducting dawah and programs with wisdom, tolerance, and moderation—avoiding extremism while considering context.",
  },
  {
    bn: "আল্লাহর সৃষ্টির প্রতি সহানুভূতিশীল হওয়া এবং মানুষের কল্যাণে কাজ করাকে আল্লাহর সন্তুষ্টির মাধ্যম হিসেবে দেখা।",
    en: "Showing compassion to Allah's creation and serving humanity as a means of divine pleasure.",
  },
  {
    bn: "ধর্ম, বর্ণ, গোত্র নির্বিশেষে সকল মানুষের জন্য দাওয়াহ ও সেবামূলক কার্যক্রম পরিচালনা করা।",
    en: "Running dawah and service programs for all people regardless of religion, race, or tribe.",
  },
  {
    bn: "জনগণের প্রদত্ত দান অর্থ ও সম্পদকে আল্লাহ তাআলার পক্ষ থেকে আমানত হিসেবে গণ্য করা এবং এর যথাযথ ব্যবহার নিশ্চিত করা।",
    en: "Treating donated funds as a trust from Allah and ensuring their proper use.",
  },
  {
    bn: "সংগৃহীত তহবিল এবং ব্যয়ের প্রতিটি হিসাবের ক্ষেত্রে স্বচ্ছতা নিশ্চিত করা।",
    en: "Ensuring transparency in every collected fund and expenditure record.",
  },
  {
    bn: "পরিচালনা পর্ষদ এবং কর্মীদের সকল কাজের জবাবদিহিতা নিশ্চিত করা।",
    en: "Ensuring accountability for all work of the management board and staff.",
  },
  {
    bn: "প্রতিষ্ঠানের অভ্যন্তরীণ ও বাহ্যিক নিরীক্ষণের ব্যবস্থা রাখা।",
    en: "Maintaining internal and external audit systems for the organization.",
  },
  {
    bn: "প্রতিষ্ঠানের সকল স্তরের কর্মীদের মধ্যে সর্বোচ্চ সততা ও নৈতিকতার মান বজায় রাখা। কোনো প্রকার দুর্নীতি বা অনিয়মকে প্রশ্রয় না দেওয়া।",
    en: "Maintaining the highest honesty and ethics at every level—never tolerating corruption or irregularity.",
  },
  {
    bn: "সকল ক্ষেত্রে পেশাদারিত্ব নিশ্চিত করা; শিক্ষা, দাওয়াহ ও সেবামূলক কার্যক্রমে গুণগত মান বজায় রাখা।",
    en: "Ensuring professionalism and quality standards in education, dawah, and service programs.",
  },
  {
    bn: "রাজনৈতিক কর্ম ও অবস্থান গ্রহণ থেকে বিরত থাকা এবং যে কোনো রাজনৈতিক দল-উপদল বা গোষ্ঠীর প্রভাবমুক্ত থেকে নিরপেক্ষভাবে কাজ করা।",
    en: "Remaining non-political and independent from any political party or group influence.",
  },
  {
    bn: "দক্ষ ও যোগ্য কর্মী নিয়োগ করা এবং তাদের নিয়মিত প্রশিক্ষণের মাধ্যমে কর্মদক্ষতা বৃদ্ধি করা।",
    en: "Recruiting skilled staff and improving capacity through regular training.",
  },
  {
    bn: "সেবা কার্যক্রমের ক্ষেত্রে দরিদ্র, অসহায়, এতিম, বিধবা এবং দুর্যোগ কবলিত মানুষকে অগ্রাধিকার দেওয়া।",
    en: "Prioritizing the poor, helpless, orphans, widows, and disaster-affected people in service work.",
  },
  {
    bn: "দারিদ্র্য বিমোচন, শিক্ষা বিস্তার, স্বাস্থ্যসেবা ও কর্মমুখী প্রশিক্ষণের মাধ্যমে কর্মসংস্থানের সুযোগ সৃষ্টিকে মানবিক দায়িত্ব হিসেবে বিবেচনা করা।",
    en: "Treating poverty alleviation, education, healthcare, and job creation through vocational training as humanitarian duties.",
  },
  {
    bn: "সাময়িক সহযোগিতার তুলনায় স্থায়ী দারিদ্র্য বিমোচন ও টেকসই উন্নয়ন আমাদের নীতি।",
    en: "Sustainable poverty alleviation and development over temporary aid is our policy.",
  },
];

export const goalsTabs: ListTab[] = [
  {
    id: "social-welfare",
    label: { bn: "সামাজিক ও অর্থনৈতিক কল্যাণ", en: "Social & Economic Welfare" },
    icon: "welfare",
    items: [
      {
        bn: "বেকারত্ব হ্রাস করে কর্মসংস্থান সুযোগ সৃষ্টি।",
        en: "Reducing unemployment and creating employment opportunities.",
      },
      {
        bn: "গরিব ও অসহায় মানুষের পাশে সহযোগিতার হাত বাড়ানো।",
        en: "Extending a helping hand to the poor and helpless.",
      },
      {
        bn: "পথশিশু ও অসহায় শিশুদের জন্য সহায়তা কার্যক্রম পরিচালনা।",
        en: "Running support programs for street children and helpless children.",
      },
    ],
  },
  {
    id: "health-education",
    label: { bn: "শিক্ষা, স্বাস্থ্য ও সচেতনতা", en: "Health, Education & Awareness" },
    icon: "health",
    items: [
      {
        bn: "বিনামূল্যে চিকিৎসা সেবা প্রদান।",
        en: "Providing free medical services.",
      },
      {
        bn: "ধর্মীয় শিক্ষা ও নৈতিকতার বিকাশ।",
        en: "Promoting religious education and moral development.",
      },
      {
        bn: "সচেতনতা বৃদ্ধি ও সমাজে ইতিবাচক মানসিকতা গঠন।",
        en: "Raising awareness and building a positive mindset in society.",
      },
    ],
  },
  {
    id: "environment-infra",
    label: { bn: "পরিবেশ ও অবকাঠামো", en: "Environment & Infrastructure" },
    icon: "environment",
    items: [
      {
        bn: "আলোকসজ্জার মাধ্যমে উত্তর চরকে আলোকিত করা।",
        en: "Illuminating Uttar Char through street lighting and electrification.",
      },
      {
        bn: "গাছ রোপণের মাধ্যমে পরিবেশ রক্ষা।",
        en: "Protecting the environment through tree plantation (ongoing project).",
      },
    ],
  },
  {
    id: "disaster-rights",
    label: { bn: "দুর্যোগ ও অধিকার", en: "Disaster & Rights" },
    icon: "disaster",
    items: [
      {
        bn: "দুর্যোগকালে ত্রাণ ও পুনর্বাসন কার্যক্রম পরিচালনা।",
        en: "Conducting relief and rehabilitation activities during disasters.",
      },
      {
        bn: "নারী ও শিশু অধিকার বিষয়ে সচেতনতামূলক পদক্ষেপ গ্রহণ।",
        en: "Taking awareness initiatives on women's and children's rights.",
      },
    ],
  },
];

export const financeTabs: ListTab[] = [
  {
    id: "income",
    label: { bn: "আয়ের উৎস", en: "Sources of Income" },
    icon: "income",
    items: [
      { bn: "বিভিন্ন ব্যক্তি ও প্রতিষ্ঠান থেকে প্রাপ্ত স্বেচ্ছায় অনুদান ও অর্থসহায়তা।", en: "Voluntary donations and financial support from individuals and organizations." },
      { bn: "সদস্য, সমর্থক ও শুভাকাঙ্ক্ষীদের এককালীন ও নিয়মিত অনুদান।", en: "One-time and regular donations from members, supporters, and well-wishers." },
      { bn: "ফাউন্ডেশনের যে কোনো প্রকল্পের জন্য সংগৃহীত অর্থ।", en: "Funds collected for any foundation project." },
      { bn: "সচ্ছল মুসলিমদের প্রদেয় যাকাত।", en: "Zakat paid by well-to-do Muslims." },
      { bn: "ইফতার ও কুরবানীসহ বিশেষ বিশেষ খাতে উসুলকৃত অর্থ।", en: "Funds collected for special sectors including Iftar and Qurbani." },
      { bn: "ফাউন্ডেশনের বিভিন্ন অঙ্গপ্রতিষ্ঠানের আয়।", en: "Income from various affiliated institutions of the foundation." },
    ],
  },
  {
    id: "service-expense",
    label: { bn: "সেবামূলক ব্যয়", en: "Service Expenditure" },
    icon: "service-expense",
    items: [
      { bn: "দাতাগণের দানের অর্থ শরয়ী নীতিমালা ও দেশীয় আইনের আলোকে ব্যয় করা হয়।", en: "Donor funds are spent according to Sharia policy and national law." },
      { bn: "দাতাগণ যে খাতের জন্য দান করে থাকেন, সে খাতেই ব্যয় করা হয়। এক খাতের অর্থ অন্য খাতে ব্যয় করা হয় না।", en: "Funds are spent only in the sector donors designate—never transferred between sectors." },
      { bn: "যাকাত তহবিলে সংগৃহীত অর্থের শতভাগ হকদারদের মাঝে বণ্টন করা হয়। ব্যবস্থাপনার কাজে যাকাতের অর্থ ব্যয় করা হয় না।", en: "100% of Zakat funds go to eligible recipients—not used for administration." },
      { bn: "প্রতিটি প্রকল্প সম্পন্ন হওয়ার পর আয়-ব্যয়ের বিস্তারিত হিসাব আন্তর্জাতিক মানদণ্ড অনুসরণ করে সংরক্ষণ করা হয়।", en: "Detailed income-expenditure records are kept per international standards after each project." },
      { bn: "বছরে একবার চার্টার্ড অ্যাকাউন্টেন্ট দ্বারা ফাউন্ডেশনের আয়-ব্যয়ের হিসাব নিরীক্ষণ করা হয় এবং প্রতিবেদন প্রকাশ করা হয়।", en: "Annual audit by a chartered accountant with published reports." },
      { bn: "জাতীয় ও আন্তর্জাতিক পর্যায়ে বিশেষজ্ঞ উপদেষ্টামণ্ডলীর সমন্বয়ে গঠিত টিমের তত্ত্বাবধানে উত্তর চর মানব কল্যাণ ফাউন্ডেশনের সকল আর্থিক কার্যক্রম মনিটরিং করা হয়।", en: "All UHWF financial activities are monitored by an expert advisory team." },
    ],
  },
  {
    id: "management",
    label: { bn: "ব্যবস্থাপনা ব্যয়", en: "Management Expenditure" },
    icon: "management",
    items: [],
    blocks: [
      {
        title: { bn: "সরাসরি ব্যবস্থাপনা", en: "Direct Management" },
        intro: {
          bn: "প্রকল্প সফল বাস্তবায়নের জন্য ব্যবস্থাপনা ব্যয় অপরিহার্য। এসব খরচ সম্পূর্ণ স্বচ্ছতার সাথে ব্যয় করা হয়।",
          en: "Management costs are essential for successful project delivery and are spent with full transparency.",
        },
        items: [
          { bn: "পরিবহন ব্যয়: প্রকল্প সংশ্লিষ্ট মালামাল পরিবহন, কর্মী ও স্বেচ্ছাসেবকদের যাতায়াতের খরচ।", en: "Transport: moving project materials and staff/volunteer travel." },
          { bn: "খাবার: প্রকল্প বাস্তবায়নে নিয়োজিত কর্মী ও স্বেচ্ছাসেবকদের কার্যক্রম পরিচালনাকালীন খাবারের খরচ।", en: "Food: meals for staff and volunteers during project activities." },
          { bn: "শ্রমিক বিল: প্রয়োজনীয় ক্ষেত্রে শ্রমিকদের পারিশ্রমিক।", en: "Labor: wages for workers where necessary." },
          { bn: "প্যাকেজিং সামগ্রী: উপকরণ সুষ্ঠুভাবে বিতরণের জন্য প্রয়োজনীয় প্যাকেজিং খরচ।", en: "Packaging: materials for proper distribution of supplies." },
          { bn: "বিবিধ", en: "Miscellaneous" },
        ],
        outro: {
          bn: "প্রতিটি দান সঠিকভাবে ব্যবহার করে হকদারের কাছে পৌঁছানো হয়—জবাবদিহির সাথে।",
          en: "Every donation is used correctly to reach beneficiaries with accountability.",
        },
      },
      {
        title: { bn: "পরোক্ষ ব্যবস্থাপনা", en: "Indirect Management" },
        intro: {
          bn: "মসৃণ পরিচালনার জন্য প্রশাসনিক কাঠামো প্রয়োজন। এসব খরচ সর্বোচ্চ ৭% পর্যন্ত সীমাবদ্ধ।",
          en: "An administrative structure is needed for smooth operations. These costs are capped at a maximum of 7%.",
        },
        items: [
          { bn: "কর্মীদের বেতন: ব্যবস্থাপনা কর্মী ও অন্যান্য প্রশাসনিক কর্মীদের বেতন।", en: "Staff salaries for management and administrative personnel." },
          { bn: "প্রাত্যহিক দাপ্তরিক খরচ: দপ্তরের বিদ্যুৎ, পানি, ইন্টারনেট, টেলিফোন বিল ইত্যাদি।", en: "Daily office expenses: electricity, water, internet, phone, etc." },
          { bn: "সরঞ্জাম ও আসবাবপত্র: কম্পিউটার, প্রিন্টার, ফার্নিচার, স্টেশনারি ও অন্যান্য প্রয়োজনীয় উপকরণ।", en: "Equipment and furniture: computers, printers, stationery, etc." },
          { bn: "আইনি ও হিসাবরক্ষণ খরচ: অডিট ফি, আইনজীবী ফি, লিগ্যাল পরামর্শ ও ট্যাক্স সংক্রান্ত ব্যয়।", en: "Legal and accounting: audit fees, lawyer fees, taxes." },
          { bn: "পরিবহন ও সরবরাহ ব্যয়: স্টাফ বা ম্যানেজমেন্ট টিমের যাতায়াত ও অফিসিয়াল কাজের পরিবহন খরচ।", en: "Transport for staff and management official travel." },
          { bn: "ফান্ডরেইজিং ও মার্কেটিং খরচ: অনুদান সংগ্রহ, ওয়েবসাইট রক্ষণাবেক্ষণ, সোশ্যাল মিডিয়া মার্কেটিং।", en: "Fundraising and marketing: promotion, website, social media." },
          { bn: "প্রশিক্ষণ ও দক্ষতা উন্নয়ন খরচ: কর্মীদের প্রশিক্ষণ ও কর্মশালা আয়োজনের ব্যয়।", en: "Training and capacity building for staff." },
          { bn: "নিরাপত্তা খরচ: অফিসের নিরাপত্তা, অগ্নি নিরাপত্তা ইত্যাদি।", en: "Security: office and fire safety." },
          { bn: "আইটি ও সফটওয়্যার খরচ: অ্যাকাউন্টিং সফটওয়্যার, ক্লাউড স্টোরেজ, ইমেইল সার্ভিসের সাবস্ক্রিপশন।", en: "IT and software subscriptions: accounting, cloud, email services." },
        ],
      },
    ],
  },
];
