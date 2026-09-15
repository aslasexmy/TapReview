import { Quote, Star, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

const stars = [...Array(5)];

const reviews = [
  { name: 'Siti', business: 'Beauty Salon', text: 'Customer tap je, terus buka review page. Mudah gila!' },
  { name: 'Raj', business: 'Restaurant Owner', text: 'More walk-in customers now. My Google ranking went up significantly.' },
  { name: 'Lim', business: 'Auto Workshop', text: 'Setup senang, letak je kat kaunter. Review masuk tiap hari sekarang.' },
  { name: 'Nadia', business: 'Boutique Owner', text: 'Brand kedai nampak profesional. Customer impressed dengan gadget ni.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Real businesses. Real results.</span>
          <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for the moments customers remember</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">A thoughtful touch at the counter can make it effortless for customers to share what they loved.</p>
        </Reveal>

        <div className="grid auto-rows-[190px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Large testimonial */}
          <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-800 p-7 text-white shadow-xl shadow-blue-200">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <Quote className="h-10 w-10 text-white/35" />
              <div className="relative">
                <p className="text-lg font-medium leading-8 sm:text-xl">\u201CSejak pasang TapReview ni, review Google kedai aku naik dari 12 ke 87 dalam masa dua bulan. Customer suka sebab senang \u2014 tak payah cari-cari.\u201D</p>
                <div className="mt-7 flex items-center gap-3">
                  <img src="https://images.pexels.com/photos/19420186/pexels-photo-19420186.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop" alt="Business owner at a cafe" className="h-12 w-12 rounded-full border-2 border-white/30 object-cover" />
                  <div><p className="font-semibold">Ahmad Fauzi</p><p className="text-sm text-blue-200">Owner, Kedai Kopi Senang</p></div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stat card */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] bg-white p-6 text-center shadow-sm">
              <TrendingUp className="mb-2 h-8 w-8 text-green-500" />
              <p className="font-google text-3xl font-bold text-gray-900">340%</p>
              <p className="mt-1 text-sm text-gray-500">average review growth</p>
            </div>
          </Reveal>

          {/* Image card */}
          <Reveal delay={150}>
            <div className="group relative h-full overflow-hidden rounded-[2rem]">
              <img src="https://images.pexels.com/photos/36729753/pexels-photo-36729753.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" alt="Customers at a busy cafe counter" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <p className="absolute bottom-4 left-5 text-sm font-medium text-white">More trust at the counter</p>
            </div>
          </Reveal>

          {/* Review 1 */}
          <Reveal delay={200}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm">
              <div><div className="mb-3 flex">{stars.map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div><p className="text-sm leading-6 text-gray-700">\u201C{reviews[0].text}\u201D</p></div>
              <p className="mt-3 text-xs font-semibold text-gray-500">\u2014 {reviews[0].name}, {reviews[0].business}</p>
            </div>
          </Reveal>

          {/* Stat card 2 */}
          <Reveal delay={250}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-green-50 p-6">
              <img src="https://images.pexels.com/photos/4226270/pexels-photo-4226270.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" alt="TapReview NFC product" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply" />
              <div className="relative flex h-full flex-col justify-end"><p className="font-google text-3xl font-bold text-green-700">10 sec</p><p className="mt-1 text-sm text-gray-700">from tap to review</p></div>
            </div>
          </Reveal>

          {/* Review 2 */}
          <Reveal delay={300}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm">
              <div><div className="mb-3 flex">{stars.map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div><p className="text-sm leading-6 text-gray-700">\u201C{reviews[1].text}\u201D</p></div>
              <p className="mt-3 text-xs font-semibold text-gray-500">\u2014 {reviews[1].name}, {reviews[1].business}</p>
            </div>
          </Reveal>

          {/* Review 3 */}
          <Reveal delay={350}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm">
              <div><div className="mb-3 flex">{stars.map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div><p className="text-sm leading-6 text-gray-700">\u201C{reviews[2].text}\u201D</p></div>
              <p className="mt-3 text-xs font-semibold text-gray-500">\u2014 {reviews[2].name}, {reviews[2].business}</p>
            </div>
          </Reveal>

          {/* Review 4 */}
          <Reveal delay={400}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm">
              <div><div className="mb-3 flex">{stars.map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div><p className="text-sm leading-6 text-gray-700">\u201C{reviews[3].text}\u201D</p></div>
              <p className="mt-3 text-xs font-semibold text-gray-500">\u2014 {reviews[3].name}, {reviews[3].business}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
