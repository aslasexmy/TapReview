import { Check, X } from 'lucide-react';
import Reveal from './Reveal';

const rows = [
  { label: 'Time to collect a review', tap: '< 10 seconds', qr: '30–60 seconds', manual: '2–5 minutes' },
  { label: 'Customer effort', tap: 'One tap', qr: 'Open camera, scan', manual: 'Search, navigate, type' },
  { label: 'Requires staff help', tap: 'No', qr: 'Sometimes', manual: 'Often' },
  { label: 'Works without internet', tap: 'Yes (NFC)', qr: 'No', manual: 'No' },
  { label: 'Direct to Google Reviews', tap: 'Yes', qr: 'Yes', manual: 'Yes' },
  { label: 'Ongoing cost', tap: 'None (one-time)', qr: 'Printing costs', manual: 'Your time' },
  { label: 'Premium branded look', tap: 'Yes', qr: 'Paper printout', manual: 'None' },
  { label: 'Re-linkable to new URL', tap: 'Yes', qr: 'Reprint needed', manual: 'N/A' },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  if (value === 'Yes') {
    return <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${highlight ? 'bg-blue-100' : 'bg-green-100'}`}><Check className={`h-3.5 w-3.5 ${highlight ? 'text-blue-600' : 'text-green-600'}`} strokeWidth={3} /></span>;
  }
  if (value === 'No' || value === 'None' || value === 'None (one-time)') {
    if (value === 'None (one-time)') return <span className="text-xs font-semibold text-blue-600">None (one-time)</span>;
    return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100"><X className="h-3.5 w-3.5 text-gray-400" strokeWidth={3} /></span>;
  }
  return <span className={`text-sm ${highlight ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>{value}</span>;
}

export default function Comparison() {
  return (
    <section className="bg-[#f8fbff] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-green-600">The difference</span>
          <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">TapReview vs everything else</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">See why businesses are switching from QR codes and manual requests to TapReview.</p>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-6 py-5 text-sm font-semibold text-gray-400">Feature</th>
                    <th className="px-6 py-5 text-center">
                      <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">TapReview NFC</span>
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-500">QR Code</th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-500">Manual Ask</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50/40' : ''}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.label}</td>
                      <td className="px-6 py-4 text-center"><Cell value={row.tap} highlight /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.qr} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.manual} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
