import { Sparkles } from 'lucide-react';

const items = [
  'Restaurants & Cafes',
  'Beauty Salons',
  'Clinics & Pharmacies',
  'Hotels & Homestays',
  'Auto Workshops',
  'Gyms & Studios',
  'Bakeries',
  'Fashion Boutiques',
  'Pet Shops',
  'Print Shops',
  'Barbershops',
  'Tailors',
];

export default function Marquee() {
  return (
    <div className="border-y border-gray-100 bg-white py-6">
      <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-400">
        <Sparkles className="h-4 w-4 text-blue-500" />
        <span className="font-medium">Trusted by businesses across Malaysia</span>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-100 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-600"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-green-500" />
              {item}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
