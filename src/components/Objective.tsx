import { BarChart3, MousePointerClick, Nfc, Star } from 'lucide-react';

const steps = [
  { icon: Nfc, title: 'Tap', desc: 'A customer taps their phone on the TapReview gadget placed at your counter.', color: 'from-blue-500 to-blue-600' },
  { icon: MousePointerClick, title: 'Open', desc: 'Your Google review page opens instantly \u2014 no app to install, no searching needed.', color: 'from-green-500 to-green-600' },
  { icon: Star, title: 'Review', desc: 'They leave a 5-star review in seconds while the experience is still fresh.', color: 'from-yellow-400 to-yellow-500' },
  { icon: BarChart3, title: 'Grow', desc: 'More reviews boost your ranking, build trust, and bring in new customers.', color: 'from-red-500 to-red-600' },
];

export default function Objective() {
  return (
    <section id="solution" className="bg-[#f8fbff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-green-600">The solution</span>
          <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From tap to 5 stars in under 10 seconds</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">TapReview removes every barrier between a great experience and a public review. Four simple steps \u2014 that\u2019s all it takes.</p>
        </div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="group h-full rounded-2xl border-2 border-gray-100 bg-white p-6 text-center transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} shadow-lg transition-transform group-hover:scale-110`}>
                  <s.icon className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="text-xs font-bold text-gray-300">0{i + 1}</span>
                  <h3 className="font-google text-lg font-semibold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-sm leading-6 text-gray-600">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-0.5 w-6 bg-gradient-to-r from-gray-200 to-gray-300 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="grid items-center gap-0 md:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <h3 className="font-google text-2xl font-bold text-gray-900 sm:text-3xl">Designed for the counter, not a manual</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">Set it down once and let it work. TapReview needs no batteries, no Wi-Fi, and no app \u2014 just a phone tap or a quick QR scan for older devices.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {['Works with iPhone and Android', 'QR code fallback included', 'Re-linkable to any Google Business page', 'No subscriptions \u2014 pay once, use forever'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold">\u2713</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-full min-h-[260px]">
              <img src="/images/tap.webp" alt="TapReview NFC gadget on a counter" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent md:bg-gradient-to-l md:from-transparent md:to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
