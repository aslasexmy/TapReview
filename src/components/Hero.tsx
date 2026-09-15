import { ArrowRight, Check, Nfc, QrCode, ShieldCheck, Star, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(66,133,244,0.12),transparent_28%),radial-gradient(circle_at_95%_25%,rgba(52,168,83,0.10),transparent_24%)]" />
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <Zap className="h-4 w-4 text-blue-600" />
            One tap. One review. Zero friction.
          </div>

          <h1 className="font-google max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-gray-950 sm:text-5xl lg:text-[4.25rem]">
            Make your happy customers{' '}
            <span className="shimmer-text">easy to find.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
            Let customers review your business while the experience is still fresh. Place TapReview on your counter and turn a simple tap into lasting trust.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-medium text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl">
              Get Your TapReview
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#solution" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-4 font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50">
              See how it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</span>
              <strong className="text-gray-800">4.9/5</strong> customer rating
            </span>
            <span className="hidden h-5 w-px bg-gray-300 sm:block" />
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Built for local businesses</span>
          </div>

          {/* Feature pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['NFC + QR', 'No batteries', 'Works with iPhone & Android', 'One-time payment'].map((pill) => (
              <span key={pill} className="flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-gray-200/60">
                <Check className="h-3 w-3 text-green-500" strokeWidth={3} />
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in-up lg:pl-5" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-100/70 via-white to-green-100/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-gray-200 shadow-2xl shadow-blue-200/60">
            <img src="https://images.pexels.com/photos/6612717/pexels-photo-6612717.jpeg?auto=compress&cs=tinysrgb&w=940&h=700&fit=crop" alt="Customer tapping TapReview at a cafe counter" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">The review moment</p>
                <p className="mt-1 font-google text-xl font-bold sm:text-2xl">A better way to be remembered.</p>
              </div>
              <div className="hidden rounded-2xl bg-white/95 p-3 text-gray-900 shadow-lg sm:block">
                <Nfc className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-3 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl shadow-gray-300/40 sm:-left-8 sm:p-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-green-500">
              <div className="absolute inset-0 animate-pulse-ring rounded-xl bg-green-300/40" />
              <Nfc className="relative h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <div><p className="text-sm font-bold text-gray-900">Tap to review</p><p className="text-xs text-gray-500">NFC + QR ready</p></div>
          </div>

          <div className="absolute -right-2 -top-5 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-gray-300/40 sm:-right-7 sm:px-5">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 rounded-full bg-green-100 p-0.5 text-green-600" /><p className="font-google text-xl font-bold text-gray-900">+340%</p></div>
            <p className="mt-0.5 text-xs text-gray-500">more reviews</p>
          </div>

          {/* QR badge */}
          <div className="absolute -bottom-2 right-4 flex items-center gap-2 rounded-xl bg-gray-900 px-3 py-2 shadow-lg sm:right-8">
            <QrCode className="h-4 w-4 text-green-400" />
            <span className="text-xs font-medium text-white">QR fallback</span>
          </div>
        </div>
      </div>
    </section>
  );
}
