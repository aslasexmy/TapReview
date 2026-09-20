import { Plus } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
export default function FAQ() {
  return (
    <section id={c.sections.faq} className="section pt-0">
      <div className="wrap max-w-3xl">
        <div className="section-heading">
          <p className="eyebrow">{c.faq.eyebrow}</p>
          <h2>{c.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {c.faq.items.map((item) => (
            <details
              key={item.question}
              className="faq-item rounded-2xl border border-gray-100 open:border-blue-200 open:bg-blue-50/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-medium">
                <span>{item.question}</span>
                <Plus className="h-5 w-5 shrink-0 text-gray-500" />
              </summary>
              <p className="px-6 pb-6 leading-7 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
