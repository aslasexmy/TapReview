import { siteContent as c } from "./siteContent.js";
export const formatPrice = (value) =>
  new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
export const validQuantity = (value) =>
  String(value).trim() !== "" &&
  Number.isSafeInteger(Number(value)) &&
  Number(value) > 0;
export const orderTotal = (product, quantity) =>
  validQuantity(quantity)
    ? Math.round(product.price * Number(quantity) * 100) / 100
    : 0;
export function whatsappLink(message, number = c.contact.whatsappNumber) {
  return /^[1-9]\d{7,14}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : null;
}
export function openWhatsApp(message) {
  const url = whatsappLink(message);
  if (url) window.open(url, "_blank", "noopener,noreferrer");
  else window.alert(c.contact.setup);
}
export function orderMessage(product, quantity, details) {
  return [
    c.order.intro,
    "",
    `${c.order.product}: ${product.name}`,
    `${c.order.unitPrice}: ${formatPrice(product.price)}`,
    `${c.order.quantity}: ${quantity}`,
    `${c.order.total}: ${formatPrice(orderTotal(product, quantity))}`,
    "",
    ...c.order.fields
      .filter((field) => details[field.name]?.trim())
      .map((field) => `${field.label}: ${details[field.name].trim()}`),
    "",
    c.order.ending,
  ].join("\n");
}
