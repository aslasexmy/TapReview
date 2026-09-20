import { Store, Nfc, MessageSquare } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
const icons = [Store, Nfc, MessageSquare];
export default function Objective() {
  return (
    <section id={c.sections.how} className="section bg-blue-50/40">
      <div className="wrap">
        <div className="section-heading">
          <p className="eyebrow">{c.how.eyebrow}</p>
          <h2>{c.how.title}</h2>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {c.how.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={step.title}
                className="rounded-3xl border border-gray-100 bg-white p-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="feature-icon mb-0">
                    <Icon />
                  </span>
                  <span className="text-3xl font-medium tracking-tight text-gray-300">
                    0{i + 1}
                  </span>
                </div>
                <h3>{step.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
                {step.example && (
                  <blockquote className="mt-5 border-l-2 border-blue-200 pl-4 text-sm leading-6 text-gray-600">
                    {step.example}
                  </blockquote>
                )}
              </li>
            );
          })}
        </ol>
        <p className="mx-auto mt-7 max-w-2xl text-center text-sm leading-6 text-gray-500">
          {c.how.note}
        </p>
      </div>
    </section>
  );
}
