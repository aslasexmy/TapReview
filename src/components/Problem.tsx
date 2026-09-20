import { Users, MessageSquare, TrendingUp } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
const icons = [Users, MessageSquare, TrendingUp];
export default function Problem() {
  return (
    <section id={c.sections.why} className="section">
      <div className="wrap">
        <div className="section-heading">
          <p className="eyebrow">{c.why.eyebrow}</p>
          <h2>{c.why.title}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {c.why.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <article
                key={card.title}
                className="rounded-3xl border border-gray-100 bg-gray-50/60 p-7 transition-shadow hover:shadow-lg"
              >
                <div className={`feature-icon tone-${i}`}>
                  <Icon />
                </div>
                <h3>{card.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{card.text}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-7 text-center text-sm text-gray-600">{c.why.note}</p>
      </div>
    </section>
  );
}
