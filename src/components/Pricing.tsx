import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
import { formatPrice, openWhatsApp } from "../helpers.js";
import ProductVisual from "./ProductVisual";
import OrderModal from "./OrderModal";
export default function Pricing() {
  const track = useRef<HTMLDivElement>(null);
  const [ends, setEnds] = useState({ start: true, end: false });
  const [selected, setSelected] = useState<(typeof c.products)[number] | null>(
    null,
  );
  useEffect(() => {
    const el = track.current!;
    const update = () =>
      setEnds({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);
  const move = (direction: number) => {
    const el = track.current!;
    const card = el.firstElementChild!;
    el.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 20),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <section id={c.sections.products} className="section">
      <div className="wrap">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">{c.productSection.eyebrow}</p>
            <h2>{c.productSection.title}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {c.productSection.description}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="icon-button"
              disabled={ends.start}
              aria-label={c.productSection.previous}
              onClick={() => move(-1)}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="icon-button"
              disabled={ends.end}
              aria-label={c.productSection.next}
              onClick={() => move(1)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div
          ref={track}
          className="product-track"
          role="region"
          aria-roledescription={c.productSection.carouselRole}
          aria-label={c.productSection.carouselLabel}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.target !== e.currentTarget) return;
            if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
              e.preventDefault();
              if (e.key === "Home") track.current!.scrollTo({ left: 0 });
              else if (e.key === "End")
                track.current!.scrollTo({ left: track.current!.scrollWidth });
              else move(e.key === "ArrowRight" ? 1 : -1);
            }
          }}
        >
          {c.products.map((p) => (
            <article
              key={p.id}
              className={`product-card ${p.id === "pvc" ? "border-blue-200" : "border-gray-200"}`}
            >
              <div className="flex items-center justify-between gap-2 bg-gray-50 px-5 pt-5">
                <span className="text-xs font-medium text-gray-600">
                  {p.badge}
                </span>
                <span
                  className={`status ${p.status === "available" ? "available" : ""}`}
                >
                  {c.productSection[p.status as "available" | "comingSoon"]}
                </span>
              </div>
              <ProductVisual product={p} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3>{p.name}</h3>
                  <p className="whitespace-nowrap text-2xl font-semibold tracking-tight">
                    {formatPrice(p.price)}
                  </p>
                </div>
                <p className="mt-3 flex-1 leading-7 text-gray-600">
                  {p.description}
                </p>
                <p className="mb-5 mt-3 min-h-5 text-xs text-gray-500">
                  {p.dimensions
                    ? `${c.productSection.formatLabel}: ${p.dimensions}`
                    : ""}
                </p>
                <button
                  className={`btn w-full ${p.status === "available" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() =>
                    p.status === "available"
                      ? setSelected(p)
                      : openWhatsApp(
                          c.contact.enquiryMessage.replace("{product}", p.name),
                        )
                  }
                >
                  {p.status === "available"
                    ? p.button
                    : c.productSection.enquiry}
                  {p.status === "available" ? (
                    <ArrowRight size={17} />
                  ) : (
                    <MessageCircle size={17} />
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-gray-500">
          {c.productSection.instruction}
        </p>
      </div>
      {selected && (
        <OrderModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
