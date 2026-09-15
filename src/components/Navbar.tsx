import { useEffect, useState } from 'react';
import { Menu, Nfc, X } from 'lucide-react';

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.08)] backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400 shadow-sm transition-transform group-hover:scale-105">
            <Nfc className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-google text-xl font-bold text-gray-800">Tap<span className="text-blue-600">Review</span></span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#pricing" className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 md:inline-flex">Get Started</a>

        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="space-y-3 border-t border-gray-100 bg-white px-5 py-4 shadow-lg md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-1 text-base font-medium text-gray-700 hover:text-blue-600">{l.label}</a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="block rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white">Get Started</a>
        </div>
      )}
    </header>
  );
}
