import { useState } from "react";
import { siteContent as c } from "../siteContent.js";
export default function Brand() {
  const [failed, setFailed] = useState(false);
  return c.brand.logo && !failed ? (
    <img
      src={c.brand.logo}
      alt={c.brand.logoAlt}
      width="220"
      height="48"
      className="brand-logo"
      onError={() => setFailed(true)}
    />
  ) : (
    <span className="text-2xl font-semibold tracking-tight text-gray-900">
      {c.brand.name}
    </span>
  );
}
