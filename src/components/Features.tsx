import { Battery, Bluetooth, Globe, QrCode, RefreshCw, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  { icon: Smartphone, title: 'Works with every phone', desc: 'iPhone and Android — any device with NFC simply taps and opens. No app to download, no login required.', color: 'bg-blue-50 text-blue-600' },
  { icon: QrCode, title: 'QR code fallback', desc: 'Older phone without NFC? A printed QR code on the gadget covers every device, so no customer is left out.', color: 'bg-green-50 text-green-600' },
  { icon: Battery, title: 'No batteries, no charging', desc: 'The NFC chip is passive — it draws power from the phone. Set it on the counter and forget about it forever.', color: 'bg-yellow-50 text-yellow-600' },
  { icon: RefreshCw, title: 'Re-linkable anytime', desc: 'Changed your Google Business page? Re-link the gadget to any new URL in seconds through our portal.', color: 'bg-red-50 text-red-600' },
  { icon: ShieldCheck, title: 'Durable & premium build', desc: 'Crafted with a scratch-resistant acrylic surface and a weighted base that stays put on any counter.', color: 'bg-purple-50 text-purple-600' },
  { icon: Globe, title: 'Direct to Google', desc: 'No middleman platform. Reviews go straight to your Google Business profile — you own everything.', color: 'bg-cyan-50 text-cyan-600' },
  { icon: Zap, title: 'Instant setup', desc: 'We link your gadget before shipping. When it arrives, just place it down — reviews start the same day.', color: 'bg-orange-50 text-orange-600' },
  { icon: Bluetooth, title: 'NFC + QR dual tech', desc: 'Two technologies in one sleek gadget. Whether customers prefer tap or scan, TapReview has them covered.', color: 'bg-teal-50 text-teal-600' },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Why TapReview</span>
          <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Every detail engineered for more reviews</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">From the chip inside to the finish on top, every part of TapReview is designed to remove friction and collect more genuine feedback.</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-gray-100 bg-gray-50/40 p-6 transition-all hover:border-transparent hover:bg-white hover:shadow-xl hover:shadow-gray-200/60">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-google text-base font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
