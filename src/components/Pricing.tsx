import { Check, Crown, Rocket, Star } from 'lucide-react';

const packages = [
  {
    icon: Rocket,
    name: 'Starter',
    price: 'RM 149',
    period: 'one-time',
    desc: 'Perfect for small shops getting started with reviews.',
    features: ['1 NFC TapReview gadget', 'Linked to your Google Review page', 'Setup guide included', '30-day replacement warranty', 'Email support'],
    border: 'border-gray-200',
    btn: 'bg-gray-900 hover:bg-gray-800 text-white',
    iconBg: 'bg-blue-100 text-blue-600',
    featured: false,
  },
  {
    icon: Crown,
    name: 'Business',
    price: 'RM 399',
    period: 'one-time',
    desc: 'Best for busy counters with multiple entry points.',
    features: ['3 NFC TapReview gadgets', 'Linked to your Google Review page', 'Custom branded design', '90-day replacement warranty', 'Priority WhatsApp support', 'Free shipping nationwide', 'Setup & placement guide'],
    border: 'border-blue-500 ring-2 ring-blue-200',
    btn: 'bg-blue-600 hover:bg-blue-700 text-white',
    iconBg: 'bg-blue-600 text-white',
    featured: true,
  },
  {
    icon: Star,
    name: 'Enterprise',
    price: 'RM 999',
    period: 'one-time',
    desc: 'For multi-location businesses and franchises.',
    features: ['10 NFC TapReview gadgets', 'Multi-location Google linking', 'Fully custom branded design', '1-year replacement warranty', 'Dedicated account manager', 'Free express shipping', 'On-site setup assistance', 'Monthly performance report'],
    border: 'border-gray-200',
    btn: 'bg-gray-900 hover:bg-gray-800 text-white',
    iconBg: 'bg-green-100 text-green-600',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Pricing</span>
          <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, one-time pricing</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">No subscriptions. No hidden fees. Pay once, collect reviews forever.</p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`relative flex flex-col rounded-3xl border-2 bg-white p-8 transition-transform hover:-translate-y-2 ${pkg.border} ${pkg.featured ? 'shadow-2xl shadow-blue-200 lg:-translate-y-4' : 'shadow-sm'}`}>
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-md">MOST POPULAR</span>
                </div>
              )}

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${pkg.iconBg}`}>
                <pkg.icon className="h-7 w-7" strokeWidth={2} />
              </div>

              <h3 className="font-google text-xl font-bold text-gray-900">{pkg.name}</h3>
              <p className="mb-5 mt-1 text-sm leading-relaxed text-gray-500">{pkg.desc}</p>

              <div className="mb-6">
                <span className="font-google text-4xl font-bold text-gray-900">{pkg.price}</span>
                <span className="ml-2 text-sm text-gray-400">{pkg.period}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${pkg.featured ? 'bg-blue-100' : 'bg-green-100'}`}>
                      <Check className={`h-3 w-3 ${pkg.featured ? 'text-blue-600' : 'text-green-600'}`} strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`w-full rounded-full px-6 py-3.5 text-center font-medium text-sm transition-all hover:shadow-lg ${pkg.btn}`}>
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">All packages include free linking to your Google Business profile.</p>
      </div>
    </section>
  );
}
