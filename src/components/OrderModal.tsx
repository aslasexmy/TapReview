import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, MessageCircle } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
import {
  formatPrice,
  validQuantity,
  orderTotal,
  orderMessage,
  openWhatsApp,
} from "../helpers.js";
type Product = (typeof c.products)[number];
export default function OrderModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [quantity, setQuantity] = useState("1");
  useEffect(() => {
    const dialog = ref.current;
    const before = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      if (before?.isConnected) before.focus();
    };
  }, []);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validQuantity(quantity) || product.status !== "available") return;
    openWhatsApp(
      orderMessage(
        product,
        quantity,
        Object.fromEntries(new FormData(e.currentTarget)),
      ),
    );
  }
  return (
    <dialog
      ref={ref}
      className="order-dialog"
      aria-labelledby="order-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={(e) => {
        if (e.key !== "Tab") return;
        const nodes = Array.from(
          e.currentTarget.querySelectorAll<HTMLElement>(
            "button:not([disabled]),input:not([disabled]),textarea:not([disabled]),a[href]",
          ),
        );
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }}
    >
      <button
        className="icon-button absolute right-3 top-3"
        aria-label={c.order.close}
        onClick={onClose}
      >
        <X size={20} />
      </button>
      <p className="eyebrow pr-10">{c.order.eyebrow}</p>
      <h2 id="order-title" className="pr-5 text-3xl">
        {c.order.title}
      </h2>
      <div className="my-5 flex items-center justify-between gap-4 rounded-2xl bg-gray-50 p-4">
        <div>
          <h3>{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {c.order.unitPrice}: {formatPrice(product.price)}
          </p>
        </div>
        <span className="status available">{c.productSection.available}</span>
      </div>
      <form onSubmit={submit}>
        <div className="mb-5 flex items-center justify-between gap-5">
          <label className="max-w-28" htmlFor="quantity">
            {c.order.quantity}
            <input
              id="quantity"
              type="number"
              min="1"
              step="1"
              required
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                e.target.setCustomValidity(
                  validQuantity(e.target.value) ? "" : c.order.invalidQuantity,
                );
              }}
            />
          </label>
          <div className="text-right">
            <p className="text-sm text-gray-500">{c.order.total}</p>
            <output
              aria-live="polite"
              className="text-3xl font-semibold tracking-tight"
            >
              {formatPrice(orderTotal(product, quantity))}
            </output>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.order.fields.map((field) => (
            <label
              key={field.name}
              htmlFor={field.name}
              className={field.type === "textarea" ? "sm:col-span-2" : ""}
            >
              {field.label}
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={2}
                  autoComplete={field.autocomplete}
                  required={field.required}
                  maxLength={800}
                  onInput={(e) =>
                    e.currentTarget.setCustomValidity(
                      e.currentTarget.value.trim() ? "" : c.order.required,
                    )
                  }
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  autoComplete={field.autocomplete}
                  maxLength={160}
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.setCustomValidity("");
                    if (field.required && !el.value.trim())
                      el.setCustomValidity(c.order.required);
                    else if (
                      field.type === "tel" &&
                      (!/^\+?[\d\s().-]{7,22}$/.test(el.value) ||
                        el.value.replace(/\D/g, "").length < 7)
                    )
                      el.setCustomValidity(c.order.invalidPhone);
                  }}
                />
              )}
            </label>
          ))}
        </div>
        <p className="my-5 text-sm text-gray-600">{c.order.note}</p>
        <button type="submit" className="btn btn-primary w-full">
          <MessageCircle size={18} />
          {c.order.button}
        </button>
        <p className="mt-3 text-center text-xs leading-5 text-gray-500">
          {c.order.privacy}
        </p>
      </form>
    </dialog>
  );
}
