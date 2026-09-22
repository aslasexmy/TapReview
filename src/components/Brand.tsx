import { useState } from "react";
import { siteContent as c } from "../siteContent.js";
export default function Brand() {
  const [failed, setFailed] = useState(false);
  const crop = c.brand.logoCrop;
  return c.brand.logo && !failed ? (
    <span
      className={`brand-logo ${crop ? "brand-logo-cropped" : ""}`}
      style={crop ? { aspectRatio: `${crop.width} / ${crop.height}` } : undefined}
    >
    <img
      src={c.brand.logo}
      alt={c.brand.logoAlt}
      width="220"
      height="48"
      className={crop ? "brand-logo-source" : "brand-logo-fit"}
      style={crop ? {
        width: `${(crop.sourceWidth / crop.width) * 100}%`,
        left: `${(-crop.x / crop.width) * 100}%`,
        top: `${(-crop.y / crop.height) * 100}%`,
      } : undefined}
      onError={() => setFailed(true)}
    />
    </span>
  ) : (
    <span className="text-2xl font-semibold tracking-tight text-gray-900">
      {c.brand.name}
    </span>
  );
}
