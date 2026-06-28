export type DonationQuote = {
  quote: { en: string; bn: string };
  source: { en: string; bn: string };
  variant: "a" | "b" | "c";
};

export const donationQuotes: DonationQuote[] = [
  {
    variant: "a",
    quote: {
      en: "The example of those who spend in Allah's cause is like a grain that sprouts seven ears, each bearing a hundred grains. Allah multiplies the reward for whom He wills.",
      bn: "আল্লাহর পথে যারা খরচ করে, তাদের উপমা একটি বীজের মতো, যা থেকে সাত শীষ উদগত হয়—প্রতিটিতে একশত দানা। আল্লাহ যার জন্য ইচ্ছা করেন, বহুগুণ বৃদ্ধি করে দেন।",
    },
    source: { en: "The Qur'an — Al-Baqarah (2:261)", bn: "আল-কুরআন — সূরা আল-বাকারা (২:২৬১)" },
  },
  {
    variant: "b",
    quote: {
      en: "Charity does not decrease wealth.",
      bn: "সদকা সম্পদ কমায় না।",
    },
    source: { en: "Prophet Muhammad (peace be upon him)", bn: "হজরত মুহাম্মাদ (সা.) — সহীহ মুসলিম" },
  },
  {
    variant: "c",
    quote: {
      en: "The believer's shade on the Day of Resurrection will be his charity.",
      bn: "কিয়ামত দিবসে মুমিনের ছায়া হবে তার সদকা।",
    },
    source: { en: "Prophet Muhammad (peace be upon him)", bn: "হজরত মুহাম্মাদ (সা.) — তিরমিযী" },
  },
  {
    variant: "a",
    quote: {
      en: "Whoever relieves a believer's hardship in this world, Allah will relieve his hardship on the Day of Resurrection.",
      bn: "যে ব্যক্তি দুনিয়াতে কোনো মুমিনের কষ্ট দূর করবে, আল্লাহ কিয়ামত দিবসে তার কষ্ট দূর করবেন।",
    },
    source: { en: "Prophet Muhammad (peace be upon him)", bn: "হজরত মুহাম্মাদ (সা.) — সহীহ মুসলিম" },
  },
  {
    variant: "b",
    quote: {
      en: "Whoever fulfills his brother's need, Allah will fulfill his need on the Day of Judgment.",
      bn: "যে তার ভাইয়ের প্রয়োজন পূর্ণ করবে, আল্লাহ কিয়ামত দিবসে তার প্রয়োজন পূর্ণ করবেন।",
    },
    source: { en: "Prophet Muhammad (peace be upon him)", bn: "হজরত মুহাম্মাদ (সা.) — সহীহ বুখারী" },
  },
  {
    variant: "c",
    quote: {
      en: "Who will lend Allah a goodly loan so that He may multiply it many times over? Allah withholds and grants abundance, and to Him you will be returned.",
      bn: "কে আল্লাহকে উত্তম ঋণ দেবে, ফলে তিনি তার জন্য বহুগুণ বৃদ্ধি করে দেবেন? আল্লাহ প্রয়োজনমতো দান করেন ও বৃদ্ধি করেন, এবং তাঁর কাছেই তোমরা প্রত্যাবর্তিত হবে।",
    },
    source: { en: "The Qur'an — Al-Hadid (57:11)", bn: "আল-কুরআন — সূরা আল-হাদীদ (৫৭:১১)" },
  },
];
