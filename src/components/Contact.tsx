import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', business: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-blue-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Get in touch</span>
            <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to boost your Google reviews?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Order your TapReview gadget today or ask us anything. We\u2019ll get you set up and collecting 5-star reviews in no time.</p>

            <div className="mt-8 space-y-4">
              <a href="https://wa.me/60123456789" className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition-colors group-hover:bg-green-500">
                  <MessageCircle className="h-6 w-6 text-green-600 transition-colors group-hover:text-white" />
                </div>
                <div><p className="text-sm font-semibold text-gray-900">WhatsApp</p><p className="text-sm text-gray-500">Fastest response \u2014 chat with us</p></div>
              </a>
              <a href="tel:+60123456789" className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-600">
                  <Phone className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white" />
                </div>
                <div><p className="text-sm font-semibold text-gray-900">Call us</p><p className="text-sm text-gray-500">+60 12-345 6789</p></div>
              </a>
              <a href="mailto:hello@tapreview.my" className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 transition-colors group-hover:bg-yellow-500">
                  <Mail className="h-6 w-6 text-yellow-600 transition-colors group-hover:text-white" />
                </div>
                <div><p className="text-sm font-semibold text-gray-900">Email</p><p className="text-sm text-gray-500">hello@tapreview.my</p></div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div><p className="text-sm font-semibold text-gray-900">Service area</p><p className="text-sm text-gray-500">Nationwide shipping across Malaysia</p></div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-100/50 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-9 w-9 text-green-600" />
                </div>
                <h3 className="font-google text-xl font-bold text-gray-900">Message sent!</h3>
                <p className="mt-2 text-sm text-gray-600">Terima kasih! We\u2019ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-google text-xl font-bold text-gray-900">Send us a message</h3>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Your name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="John Doe" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Business name</label>
                  <input type="text" required value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="Your shop / restaurant" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone number</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="012-345 6789" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Message (optional)</label>
                  <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="Tell us about your business or ask anything\u2026" />
                </div>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200">
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
