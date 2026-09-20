import { ArrowRight, MessageCircle, Nfc } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
import { openWhatsApp } from "../helpers.js";
import ProductVisual from "./ProductVisual";
export default function Hero() {
  const main = c.products.find((p) => p.id === c.hero.mainProductId);
  return (
    <section id={c.sections.hero} className="hero-section">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="animate-fade-in-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-medium text-blue-700">
            <Nfc size={16} />
            {c.hero.eyebrow}
          </p>
          <h1 className="max-w-2xl text-[2.6rem] font-semibold leading-[1.08] tracking-[-.05em] text-gray-950 sm:text-6xl lg:text-[4rem]">
            {c.hero.title}{" "}
            <span className="text-blue-600">{c.hero.highlight}</span>
          </h1>
          <p className="mt-6 text-xl font-medium tracking-tight text-gray-900">
            {c.hero.supporting}
          </p>
          <p className="mt-3 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            {c.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {c.visibility.products && (
              <a className="btn btn-primary" href={`#${c.sections.products}`}>
                {c.hero.primary}
                <ArrowRight size={18} />
              </a>
            )}
            <button
              className="btn btn-secondary"
              onClick={() => openWhatsApp(c.contact.chooseMessage)}
            >
              {c.hero.secondary}
              <MessageCircle size={18} />
            </button>
          </div>
          <p className="mt-6 flex items-center gap-3 text-sm text-gray-600">
            <span className="color-dots" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            {c.hero.note}
          </p>
        </div>
        <div className="hero-family">
          <p className="text-center text-sm font-medium text-gray-600">
            {c.hero.visualTitle}
          </p>
          {main && (
            <>
              <ProductVisual product={main} />
              <div className="mb-5 flex flex-wrap items-center justify-center gap-3 text-sm">
                <strong>{main.name}</strong>
                <span className="text-gray-500">{main.dimensions}</span>
                <span className="status available">
                  {c.productSection[main.status as "available" | "comingSoon"]}
                </span>
              </div>
            </>
          )}
          <div className="grid grid-cols-3 gap-3">
            {c.hero.previews
              .map((id) => c.products.find((p) => p.id === id))
              .filter((p): p is (typeof c.products)[number] => !!p)
              .map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-gray-100 bg-white pb-3 text-center"
                >
                  <ProductVisual product={p} compact />
                  <p className="text-xs font-semibold">{p.name}</p>
                  <p className="mt-1 text-[11px] text-gray-500">
                    {c.productSection[p.status as "available" | "comingSoon"]}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
