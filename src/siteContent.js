// EDIT ALL WEBSITE WORDING HERE. Use normal punctuation, not literal Unicode escape codes.
export const siteContent = {
  // Replace this image with your own logo, or change its path. A readable wordmark appears if the image cannot load.
  brand: {
    name: "Gootap",
    logo: "/images/gootap-logo.png",
    // Display just the logo area of the original image; the uploaded file stays unchanged.
    // Set logoCrop to null when replacing it with an image that has no outer white margins.
    logoCrop: null,
    logoAlt: "Gootap",
    home: "Gootap home",
  },
  // Search results and social sharing. The build inserts this into the HTML.
  seo: {
    title: "Gootap | NFC Devices & Merchant Counter Systems",
    description:
      "Help customers find your review, menu and contact links with Gootap NFC and QR solutions.",
  },
  // Turn sections on or off. The navigation automatically excludes hidden sections.
  visibility: {
    hero: true,
    why: true,
    how: true,
    products: true,
    devices: true,
    services: false,
    faq: true,
    contact: true,
  },
  sections: {
    hero: "home",
    why: "why-gootap",
    how: "how-it-works",
    products: "products",
    devices: "devices",
    services: "whats-included",
    faq: "faq",
    contact: "contact",
  },
  navigation: {
    links: [
      { section: "devices", label: "Devices" },
      { section: "products", label: "Systems" },
      { section: "how", label: "How It Works" },
      { section: "why", label: "Why Gootap" },
      { section: "services", label: "What’s Included" },
      { section: "faq", label: "FAQ" },
    ],
    primary: "Find your device",
    open: "Open menu",
    close: "Close menu",
    label: "Main navigation",
    skip: "Skip to content",
  },
  // Hero: business value comes first. No invented ratings, customers, or performance figures.
  hero: {
    eyebrow: "Google Reviews & Ratings for Local Businesses",
    title: "Make every visit a chance to",
    stars: "",
    highlight: "connect",
    supporting: "Give customers a simple way to share their experience.",
    description:
      "Make it easier for customers to find your review, menu and contact links with a simple tap or scan.",
    primary: "Explore Our Solutions",
    secondary: "Help Me Choose",
    note: "Your clients are more than just sales.",
    // Hero illustration: an example checkout moment, not a guaranteed payment duration.
    visual: {
      eyebrow: "The payment moment",
      title: "3 minutes. One simple invitation.",
      description: "Your customer is right in front of you. Make this moment an invitation to share their experience.",
      timer: "3 min",
      timerLabel: "Example checkout window",
      invitation: "How was your experience? Tap here to leave a review.",
      ownerLabel: "Business owner",
      customerLabel: "Customer",
      deviceLabel: "Tap or scan",
      caption: "A natural moment to ask for honest feedback.",
      timingNote: "Illustrative scenario. Payment time and customer attention vary.",
      imageAlt: "A business owner and customer face one another across a payment counter. The owner invites the customer to tap an NFC display and review their experience.",
    },
  },
  // Why genuine feedback matters.
  why: {
    eyebrow: "Why Gootap",
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
        title: "Introduce Gootap at Payment",
        text: "Invite them to tap or scan before they leave.",
        example:
          "“Would you like to share your experience on Google? Just tap or scan here.”",
      },
      {
        title: "Customers Leave a Review & Rating",
        text: "They open your Google Review page and share their honest feedback.",
      },
    ],
    note: "Customers choose whether to leave a review and what to say.",
  },
  // Products: prices must be numbers. Status is either available or comingSoon. Images go in public/images/.
  // Leave image blank to use a clearly labelled illustration. Replace imageAlt with a description of your real photograph.
  products: [
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
  systems: [
    {
      id: "starter", name: "Starter", price: 1390, status: "comingSoon",
      badge: "Proposed package", description: "A 7-inch Android counter display, branded NFC/QR stand and basic audio device, with setup and 12 months of limited hosting and support.",
      image: "", imageAlt: "", dimensions: "7-inch display target", button: "Enquire about Starter",
    },
    {
      id: "plus", name: "Plus", price: 2390, status: "comingSoon",
      badge: "Proposed package", description: "A 10.1-inch Android counter display, branded NFC/QR stand and upgraded audio device, with setup and 12 months of limited hosting and support.",
      image: "", imageAlt: "", dimensions: "10.1-inch display target", button: "Enquire about Plus",
    },
  ],
  productSection: {
    eyebrow: "Our solutions",
    title: "A counter system for your business.",
    description:
      "Starter and Plus are planned packages. Specifications and availability are subject to testing and confirmation.",
    instruction: "Prices are proposed one-time package prices. Contact us for current availability and terms.",
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
        title: "Early Access to the Gootap Ecosystem",
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
        question: "What does Gootap do?",
        answer:
          "Gootap helps businesses direct customers to review, menu and contact links. Our proposed counter systems bring a display and NFC/QR stand together.",
      },
      {
        question: "Which product should I choose?",
        answer:
          "Choose a standalone NFC device for a simple tap-and-scan point, or ask about our planned Starter and Plus counter systems.",
      },
      {
        question: "Are the systems available to order?",
        answer:
          "Starter and Plus are planned packages. Their hardware, software and service terms are subject to testing and confirmation. You can enquire about them on WhatsApp.",
      },
      {
        question: "What if a customer cannot use NFC?",
        answer: "A QR code can direct customers to your review page when they cannot use NFC.",
      },
      {
        question: "Does the customer need internet access?",
        answer:
          "Yes. Their phone needs internet access to open Google and submit feedback.",
      },
      {
        question: "Will Gootap guarantee higher ratings?",
        answer:
          "No. Ratings depend on honest customer feedback. Gootap makes it easier for customers to share their experience.",
      },
      {
        question: "What support is available?",
        answer:
          "Contact us for the current setup and support terms for your chosen product.",
      },
    ],
  },
  // WhatsApp: international digits only. Malaysian 01162988960 becomes 601162988960.
  contact: {
    whatsappNumber: "601162988960",
    displayNumber: "011-6298 8960",
    whatsappLabel: "WhatsApp",
    floatingLabel: "Chat on WhatsApp",
    defaultMessage: "Hi, I’m interested in Gootap. I’d like to know more.",
    chooseMessage:
      "Hi, I’m interested in Gootap. Can you help me choose the right product for my business?",
    enquiryMessage:
      "Hi, I’m interested in {product} from Gootap. Please tell me more about its availability.",
    setup: "WhatsApp is not configured yet. Please check back soon.",
    eyebrow: "Let’s talk about your business",
    title: "Your Next Business Investment Starts With Your Customers.",
    description:
      "Build a stronger foundation for customer trust. Let us help you choose the right Gootap solution.",
    primary: "Explore Products",
    secondary: "Talk to Us",
  },
  // Order modal and message. A WhatsApp enquiry is not a payment or a confirmed order.
  order: {
    title: "Enquire about your device.",
    eyebrow: "Your Gootap solution",
    close: "Close order form",
    quantity: "Quantity",
    unitPrice: "Device price",
    total: "Product total",
    product: "Product",
    button: "Continue on WhatsApp",
    note: "Confirm delivery and payment details with us on WhatsApp.",
    privacy:
      "Your details are shared only when you continue to WhatsApp. You still need to send the message there.",
    intro: "Hi, I’m interested in ordering from Gootap.",
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
      "Gootap. Simple connections for everyday business.",
    year: 2026,
    copyright: "Gootap. All rights reserved.",
    disclaimer:
      "Independent business solutions. Not affiliated with or endorsed by Google.",
    navigation: "Footer navigation",
  },
};
