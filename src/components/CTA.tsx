import { ArrowRight, Nfc, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-6 py-14 text-center shadow-2xl shadow-blue-300/40 sm:px-12 sm:py-20">
          {/* Decorative elements */}
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
          <div className="absolute right-10 top-8 hidden sm:block">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Nfc className="h-8 w-8 text-white/80" strokeWidth={2} />
            </div>
          </div>
          <div className="absolute left-10 bottom-10 hidden sm:block">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/15 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-yellow-300" />
            </div>
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              Limited-time: Free setup with every order
            </span>

            <h2 className="font-google mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Every customer leaves happy. Now they\u2019ll tell the world.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-blue-100">
              Join 500+ Malaysian businesses turning counter moments into Google reviews. Your gadget ships pre-linked and ready — just place it down.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-blue-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl">
                Get Your TapReview
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-medium text-white transition-all hover:bg-white/10">
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
