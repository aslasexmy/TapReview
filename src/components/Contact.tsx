import { ArrowRight, MessageCircle } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
import { openWhatsApp } from "../helpers.js";
export default function Contact() {
  return (
    <section id={c.sections.contact} className="section pt-0">
      <div className="wrap">
        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-green-50/40 px-6 py-14 text-center sm:p-16">
          <p className="eyebrow">{c.contact.eyebrow}</p>
          <h2 className="mx-auto max-w-3xl">{c.contact.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600">
            {c.contact.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {c.visibility.products && (
              <a className="btn btn-primary" href={`#${c.sections.products}`}>
                {c.contact.primary}
                <ArrowRight size={18} />
              </a>
            )}
            <button
              className="btn btn-secondary"
              onClick={() => openWhatsApp(c.contact.defaultMessage)}
            >
              {c.contact.secondary}
              <MessageCircle size={18} />
            </button>
          </div>
          <button
            className="mt-6 text-sm text-gray-600 underline decoration-gray-300 underline-offset-4"
            onClick={() => openWhatsApp(c.contact.defaultMessage)}
          >
            {c.contact.whatsappLabel}: {c.contact.displayNumber}
          </button>
        </div>
      </div>
    </section>
  );
}
