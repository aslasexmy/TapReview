import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  { q: 'How does TapReview actually work?', a: 'TapReview contains an NFC chip programmed with your Google Review page link. When a customer taps their phone against it, the link opens automatically in their browser — no app, no search, no typing. They just pick a star rating, write a few words, and post.' },
  { q: 'Do I need internet or Wi-Fi at my shop?', a: 'No. The NFC chip works without any internet connection on the gadget itself. The customer\u2019s phone uses its own data to open the link and submit the review. TapReview never needs charging, batteries, or Wi-Fi.' },
  { q: 'What if a customer\u2019s phone doesn\u2019t have NFC?', a: 'Every TapReview gadget also has a printed QR code as a fallback. Customers with older phones can simply scan the code with their camera to open the same review page. No one is left out.' },
  { q: 'Can I change the Google Review link later?', a: 'Yes. If you change your business name, open a new location, or want to link a different Google Business profile, we can re-program your gadget remotely or through our portal. No need to buy a new one.' },
  { q: 'Will the reviews go directly to my Google Business profile?', a: 'Absolutely. TapReview links straight to your Google Business review page. There is no middleman platform — every review is posted publicly on Google, owned by you, and visible to anyone searching for your business.' },
  { q: 'How long does shipping take?', a: 'We ship nationwide across Malaysia. Standard delivery takes 2–4 business days. Business and Enterprise packages include free shipping, and Enterprise includes express delivery with on-site setup assistance.' },
  { q: 'Is there any monthly subscription or hidden fee?', a: 'No. TapReview is a one-time purchase. You pay once and use it forever. There are no subscriptions, no per-review fees, and no ongoing costs of any kind.' },
  { q: 'What if the gadget stops working?', a: 'Every package includes a replacement warranty — 30 days for Starter, 90 days for Business, and 1 full year for Enterprise. If the NFC chip or QR code fails under normal use, we replace it free of charge.' },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all ${open ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className={`font-google text-sm font-bold transition-colors ${open ? 'text-blue-600' : 'text-gray-300'}`}>0{index + 1}</span>
          <span className="font-google text-base font-semibold text-gray-900">{q}</span>
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180 text-blue-600' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pl-12 text-sm leading-7 text-gray-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">FAQ</span>
          <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you want to know</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">Still curious? Message us on WhatsApp — we reply fast.</p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <FaqItem q={f.q} a={f.a} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
