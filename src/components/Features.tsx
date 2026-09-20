import { BarChart3, Sparkles, LayoutGrid } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
const icons = [BarChart3, Sparkles, LayoutGrid];
export default function Features() {
  return (
    <section id={c.sections.services} className="section pt-0">
      <div className="wrap">
        <div className="rounded-[2rem] border border-blue-100 bg-blue-50/40 px-6 py-10 sm:p-12">
          <div className="section-heading">
            <p className="eyebrow">{c.services.eyebrow}</p>
            <h2>{c.services.title}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {c.services.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <article key={item.title}>
                  <div className="feature-icon bg-white">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  {item.badge && (
                    <span className="status mt-3">{item.badge}</span>
                  )}
                  <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-9 border-t border-blue-100 pt-6 text-center">
            <p className="text-sm font-medium">{c.services.note}</p>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              {c.services.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
