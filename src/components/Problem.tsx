import { Clock, Frown, Search, TrendingDown } from 'lucide-react';

const problems = [
  { icon: Search, title: 'Hard to find you', desc: 'Customers have to search for your business on Google before they can even start writing — most won\u2019t bother.', color: 'bg-red-50 text-red-600' },
  { icon: Clock, title: 'Too many steps', desc: 'Open Google, look up your shop, scroll to reviews, tap \u201cwrite a review\u201d\u2026 the intent fades with every step.', color: 'bg-orange-50 text-orange-600' },
  { icon: TrendingDown, title: 'Lower Google ranking', desc: 'Fewer reviews keep you off the top results. Competitors with more reviews show up first.', color: 'bg-amber-50 text-amber-600' },
  { icon: Frown, title: 'Lost trust', desc: 'Without fresh reviews, new customers hesitate. Trust is the currency of every local business.', color: 'bg-rose-50 text-rose-600' },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-red-500">The problem</span>
          <h2 className="font-google mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Collecting reviews shouldn\u2019t slow you down</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">You deliver great service every day. But when the moment passes, that goodwill never turns into the reviews your business needs to grow.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <div key={p.title} className="group relative rounded-2xl border border-gray-100 bg-gray-50/60 p-6 transition-all hover:border-transparent hover:bg-white hover:shadow-xl hover:shadow-gray-200/60">
              <span className="absolute right-5 top-5 font-google text-3xl font-bold text-gray-200 transition-colors group-hover:text-blue-100">0{i + 1}</span>
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${p.color} transition-transform group-hover:scale-110`}>
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-google text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
