import { Nfc, MessageCircle, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400 flex items-center justify-center">
                <Nfc className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-google text-xl font-bold text-white">
                Tap<span className="text-blue-400">Review</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-5">
              The simplest way to collect Google Reviews. Place the NFC gadget on your counter,
              and let your customers do the talking — one tap at a time.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/60123456789" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:hello@tapreview.my" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+60123456789" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-google text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#problem" className="hover:text-white transition-colors">The Problem</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-google text-white font-semibold mb-4 text-sm">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:+60123456789" className="hover:text-white transition-colors">+60 12-345 6789</a></li>
              <li><a href="mailto:hello@tapreview.my" className="hover:text-white transition-colors">hello@tapreview.my</a></li>
              <li>Nationwide shipping<br />across Malaysia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TapReview. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
