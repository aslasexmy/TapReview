// EDIT ALL WEBSITE WORDING HERE. Use normal punctuation, not literal Unicode escape codes.
export const siteContent = {
  // Replace this image with your own logo, or change its path. A readable wordmark appears if the image cannot load.
  brand: {
    name: "TaptoGo™",
    logo: "/images/taptogo-official-logo.jpeg",
    // Display just the logo area of the original image; the uploaded file stays unchanged.
    // Set logoCrop to null when replacing it with an image that has no outer white margins.
    logoCrop: { x: 150, y: 596, width: 1244, height: 310, sourceWidth: 1536 },
    logoAlt: "TaptoGo™",
    home: "TaptoGo home",
  },
  // Search results and social sharing. The build inserts this into the HTML.
  seo: {
    title: "TaptoGo™ | Genuine Google Reviews & Customer Insights",
    description:
      "Turn customer visits into genuine Google Reviews, useful feedback, and lasting trust with TaptoGo™ NFC and QR products and three months of analytics reporting.",
  },
  // Turn sections on or off. The navigation automatically excludes hidden sections.
  visibility: {
    hero: true,
    why: true,
    how: true,
    products: true,
    services: true,
    faq: true,
    contact: true,
  },
  sections: {
    hero: "home",
    why: "why-taptogo",
    how: "how-it-works",
    products: "products",
    services: "whats-included",
    faq: "faq",
    contact: "contact",
  },
  navigation: {
    links: [
      { section: "products", label: "Products" },
      { section: "how", label: "How It Works" },
      { section: "why", label: "Why TaptoGo™" },
      { section: "services", label: "What’s Included" },
      { section: "faq", label: "FAQ" },
    ],
    primary: "Find Your Solution",
    open: "Open menu",
    close: "Close menu",
    label: "Main navigation",
    skip: "Skip to content",
  },
  // Hero: business value comes first. No invented ratings, customers, or performance figures.
  hero: {
    eyebrow: "Google Reviews & Ratings for Local Businesses",
    title: "Turn Walk-ins into",
    highlight: "⭐️⭐️⭐️⭐️⭐️ Ratings & Reviews",
    supporting: "Get instant 5⭐️ during payment with TaptoGo™.",
    description:
      "We help your business collect more genuine Google Reviews and understand customer feedback—with simple tap-and-scan products and three months of analytics reporting.",
    primary: "Explore Our Solutions",
    secondary: "Help Me Choose",
    note: "Your clients are more than just sales.",
    visualTitle: "Simple tools. Lasting connections.",
    mainProductId: "pvc",
    previews: ["card", "acrylic", "led"],
  },
  // Why genuine feedback matters.
  why: {
    eyebrow: "Why TaptoGo™",
    title: "Every Visit Can Build Lasting Trust.",
    cards: [
      {
        title: "More Than a Sale",
        text: "Your customers can leave feedback that helps the next person choose your business.",
      },
      {
        title: "A Reference Beyond the Visit",
        text: "Reviews and ratings give future customers something to refer to long after a visit ends.",
      },
      {
        title: "A Stronger Business Foundation",
        text: "Consistent, genuine feedback helps you build credibility and understand what customers value.",
      },
    ],
    note: "Make customer trust part of your business foundation.",
  },
  // Staff workflow and an example invitation. Ask every customer for honest feedback.
  how: {
    eyebrow: "How it works",
    title: "Ask at Payment. Make Reviewing Easy.",
    steps: [
      {
        title: "Welcome Your Walk-Ins",
        text: "Give your customers an experience worth sharing.",
      },
      {
        title: "Introduce TaptoGo™ at Payment",
        text: "Invite them to tap or scan before they leave.",
        example:
          "“Would you like to share your experience on Google? Just tap or scan here.”",
      },
      {
        title: "Customers Leave a Review & Rating",
        text: "They open your Google Review page and share their honest feedback.",
      },
    ],
    note: "Open the review page in seconds. Writing and submitting a review takes as long as the customer needs.",
  },
  // Products: prices must be numbers. Status is either available or comingSoon. Images go in public/images/.
  // Leave image blank to use a clearly labelled illustration. Replace imageAlt with a description of your real photograph.
  products: [
    {
      id: "card",
      name: "Card NFC",
      price: 49,
      status: "comingSoon",
      badge: "Accessible Add-On",
      description:
        "A simple, affordable card format for keeping your review invitation within reach.",
      image: "",
      imageAlt: "Illustration of an NFC card",
      dimensions: "",
      button: "Select Card NFC",
    },
    {
      id: "wall",
      name: "Wall NFC",
      price: 139,
      status: "comingSoon",
      badge: "Waterproof",
      description:
        "A waterproof resin wall sticker for a fixed, space-saving review point.",
      image: "",
      imageAlt: "Illustration of a resin NFC wall sticker",
      dimensions: "",
      button: "Select Wall NFC",
    },
    {
      id: "pvc",
      name: "PVC NFC",
      price: 139,
      status: "available",
      badge: "Value for Money",
      description:
        "A durable, practical choice for everyday use at your business counter.",
      image: "",
      imageAlt: "Illustration of a white PVC NFC display",
      dimensions: "9 cm × 12 cm",
      button: "Select PVC NFC",
    },
    {
      id: "acrylic",
      name: "Acrylic NFC",
      price: 189,
      status: "comingSoon",
      badge: "Premium",
      description:
        "A heavier, sturdier acrylic option for a premium counter presentation.",
      image: "",
      imageAlt: "Illustration of a clear acrylic NFC display",
      dimensions: "",
      button: "Select Acrylic NFC",
    },
    {
      id: "led",
      name: "LED NFC",
      price: 289,
      status: "comingSoon",
      badge: "Flagship",
      description:
        "Cast acrylic with a wooden LED base for an illuminated counter display.",
      image: "",
      imageAlt: "Illustration of cast acrylic with a wooden LED base",
      dimensions: "",
      button: "Select LED NFC",
    },
  ],
  productSection: {
    eyebrow: "Our solutions",
    title: "One Solution. A Product for Every Business.",
    description:
      "Choose the format that fits your counter, wall, or everyday customer interactions.",
    instruction: "Swipe or use the arrows to explore.",
    previous: "Previous products",
    next: "Next products",
    carouselLabel: "Product range",
    carouselRole: "carousel",
    available: "Available",
    comingSoon: "Coming Soon",
    enquiry: "Enquire on WhatsApp",
    placeholder: "Product illustration · photography coming soon",
    tapLabel: "Tap or scan",
    deviceLabel: "Share your experience",
    formatLabel: "Format",
  },
  // These services are shared by all five product ranges, including upcoming products when available.
  services: {
    eyebrow: "Included with every product",
    title: "Every Product Comes With More.",
    items: [
      {
        title: "3 Months of Analytics Reporting",
        text: "Understand your review activity and customer feedback over your first three months.",
        badge: "",
      },
      {
        title: "AI-Powered System",
        text: "Get insights that help you understand feedback and identify practical opportunities.",
        badge: "",
      },
      {
        title: "Early Access to the TaptoGo™ Ecosystem",
        text: "Access our upcoming ecosystem as it becomes available.",
        badge: "Coming Soon",
      },
    ],
    note: "One product purchase. Three months of reporting. A clearer view of your customer feedback.",
    availability:
      "Included across all five product ranges. Upcoming products receive these services when available.",
  },
  // Frequently asked questions. No lifetime access, guaranteed ratings, or unconfirmed delivery promises.
  faq: {
    eyebrow: "FAQ",
    title: "Good Questions. Clear Answers.",
    items: [
      {
        question: "What does TaptoGo™ do?",
        answer:
          "We provide tap-and-scan products and supporting services that help local businesses collect genuine Google Reviews and understand customer feedback.",
      },
      {
        question: "Which product should I choose?",
        answer:
          "Card NFC is an accessible add-on, while PVC NFC offers everyday durability and value. Wall, Acrylic, and LED options are coming soon. Message us for help choosing.",
      },
      {
        question: "What comes with my purchase?",
        answer:
          "Every product includes three months of analytics reporting, an AI-powered system, and early access to the TaptoGo™ ecosystem when it becomes available.",
      },
      {
        question: "What if a customer cannot use NFC?",
        answer: "They can use the QR option to access your review page.",
      },
      {
        question: "Does the customer need internet access?",
        answer:
          "Yes. Their phone needs internet access to open Google and submit feedback.",
      },
      {
        question: "Will TaptoGo™ guarantee higher ratings?",
        answer:
          "No. Ratings depend on honest customer feedback. TaptoGo™ makes it easier for customers to share their experience.",
      },
      {
        question: "What happens after three months?",
        answer:
          "The included analytics reporting period ends after three months. Contact us to discuss available ongoing support.",
      },
    ],
  },
  // WhatsApp: international digits only. Malaysian 01162988960 becomes 601162988960.
  contact: {
    whatsappNumber: "601162988960",
    displayNumber: "011-6298 8960",
    whatsappLabel: "WhatsApp",
    floatingLabel: "Chat on WhatsApp",
    defaultMessage: "Hi, I’m interested in TaptoGo™. I’d like to know more.",
    chooseMessage:
      "Hi, I’m interested in TaptoGo™. Can you help me choose the right product for my business?",
    enquiryMessage:
      "Hi, I’m interested in {product} from TaptoGo™. Please tell me more about its availability.",
    setup: "WhatsApp is not configured yet. Please check back soon.",
    eyebrow: "Let’s talk about your business",
    title: "Your Next Business Investment Starts With Your Customers.",
    description:
      "Build a stronger foundation for customer trust. Let us help you choose the right TaptoGo™ solution.",
    primary: "Explore Products",
    secondary: "Talk to Us",
  },
  // Order modal and message. A WhatsApp enquiry is not a payment or a confirmed order.
  order: {
    title: "Choose your next step.",
    eyebrow: "Your TaptoGo™ solution",
    close: "Close order form",
    quantity: "Quantity",
    unitPrice: "Unit price",
    total: "Product total",
    product: "Product",
    button: "Continue on WhatsApp",
    note: "Confirm delivery and payment details with us on WhatsApp.",
    privacy:
      "Your details are shared only when you continue to WhatsApp. You still need to send the message there.",
    intro: "Hi, I’m interested in ordering from TaptoGo™.",
    ending:
      "Please confirm availability, delivery and payment details. This is an enquiry, not a confirmed order.",
    invalidQuantity: "Enter a whole quantity of at least 1.",
    invalidPhone: "Enter a valid phone number with at least 7 digits.",
    required: "Please complete this field.",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        autocomplete: "name",
        required: true,
      },
      {
        name: "business",
        label: "Business name",
        type: "text",
        autocomplete: "organization",
        required: true,
      },
      {
        name: "phone",
        label: "Phone number",
        type: "tel",
        autocomplete: "tel",
        required: true,
      },
      {
        name: "email",
        label: "Email (optional)",
        type: "email",
        autocomplete: "email",
        required: false,
      },
      {
        name: "address",
        label: "Delivery address",
        type: "textarea",
        autocomplete: "street-address",
        required: true,
      },
    ],
  },
  // Footer: only real contact information. No testimonials or invented social proof.
  footer: {
    description:
      "TaptoGo™ — practical solutions for Google Reviews, Ratings, and customer trust.",
    year: 2026,
    copyright: "TaptoGo™. All rights reserved.",
    disclaimer:
      "Independent business solutions. Not affiliated with or endorsed by Google.",
    navigation: "Footer navigation",
  },
};
