import { useState } from "react";
import { Nfc, QrCode } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
type Product = (typeof c.products)[number];
export default function ProductVisual({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`product-visual visual-${product.id} ${compact ? "visual-compact" : ""}`}
    >
      {product.image && !failed ? (
        <img
          className="product-photograph"
          src={product.image}
          alt={product.imageAlt}
          width="500"
          height="500"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <div
            className="material-study"
            role="img"
            aria-label={product.imageAlt}
          >
            <div className="device">
              <span className="device-brand"><img src={c.brand.logo} alt="" width="884" height="213" /></span>
              <Nfc className="device-nfc" />
              <span className="device-copy">
                {c.productSection.deviceLabel}
              </span>
              <QrCode className="device-qr" />
              <span className="device-tap">{c.productSection.tapLabel}</span>
            </div>
            {product.id === "led" && <div className="wood-base" />}
          </div>
          {!compact && (
            <p className="illustration-label">{c.productSection.placeholder}</p>
          )}
        </>
      )}
    </div>
  );
}
