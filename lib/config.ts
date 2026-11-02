export const siteConfig = {
  brand: "Digital Rajen",
  colors: {
    primary: "#0051FA",
    primaryHover: "#0043CC",
    primarySoft: "#EAF1FF",
    accent: "#FFC21A",
    success: "#16A34A",
    background: "#FFFFFF",
    alternate: "#F8FAFC",
    text: "#0F172A",
    body: "#475569",
    border: "#E2E8F0",
    error: "#DC2626",
    whatsapp: "#25D366",
  },
  logo: {
    path: "/logo.png",
    width: 2169,
    height: 725,
  },
  copy: {
    cta: "Book My Free Consultation",
    hero: {
      heading: "You Don't Receive Order !",
      subheadingBefore: "Get a",
      subheadingHighlight: "30 minutes Free AI Marketing Plan",
      subheadingAfter: "for Your Business.",
      description: [
        "This is a free one-to-one call for small and medium business owners who are struggling to sell their products or services.",
        "I look at your business. I show you what to do next.",
        "You get a plan made for your business, not a copy-paste guide.",
      ],
    },
    problem: {
      heading: "Sound familiar?",
      closing: "You need to know what to fix first.",
    },
    benefitsHeading: "What you get from this consultation",
    processHeading: "How it works",
    form: {
      heading: "Book Your Free Consultation",
      subtext: "Fill out the form below. It takes less than 2 minutes.",
      badges: ["One-to-One Consultation", "Customized Strategy for Your Business"],
      trust: "We respect your privacy. No spam.",
    },
  },
  problemLines: [
    "Your page gets likes, but not orders.",
    "You boosted posts, but real customers did not come.",
    "Customers ask the price, then disappear.",
    "You are doing marketing alone, with no clear plan.",
  ],
  benefits: [
    "Understand why your marketing is not bringing customers",
    "Get a customized digital marketing plan in PDF format",
    "Know exactly what to do first",
    "Start using the plan right away",
    "Speak to a real person, one-to-one",
  ],
  processSteps: [
    {
      title: "Fill out the form",
      description: "Tell us about your business. It takes less than 2 minutes.",
    },
    {
      title: "Join your free one-hour call",
      description: "We talk one-to-one about your business and your goals.",
    },
    {
      title: "Receive your PDF plan",
      description: "You get a customized digital marketing plan you can start using immediately.",
    },
  ],
  showUrgency: false,
  urgencyText: "",
  // Paste the full Vimeo video URL here, for example: https://vimeo.com/123456789
  // Temporary public demo video. Replace this with your own Vimeo URL before launch.
  vimeoUrl: "https://vimeo.com/739755578",
  // Paste the WhatsApp number here using digits only, including country code, with no + sign.
  whatsappNumber: "9779851034580",
} as const;
