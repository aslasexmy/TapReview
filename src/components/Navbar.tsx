import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
import Brand from "./Brand";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const links = c.navigation.links.filter(
    (l) => c.visibility[l.section as keyof typeof c.visibility],
  );
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <a className="skip-link" href="#main-content">
        {c.navigation.skip}
      </a>
      <nav
        aria-label={c.navigation.label}
        className="wrap flex h-20 items-center justify-between gap-4"
      >
        <a href="#" aria-label={c.brand.home}>
          <Brand />
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              key={l.section}
              href={`#${c.sections[l.section as keyof typeof c.sections]}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {c.visibility.products && (
            <a
              className="btn btn-primary nav-cta"
              href={`#${c.sections.products}`}
            >
              {c.navigation.primary}
            </a>
          )}
          <button
            ref={toggle}
            className="icon-button lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? c.navigation.close : c.navigation.open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <nav
          id="mobile-nav"
          aria-label={c.navigation.label}
          className="space-y-1 border-t border-gray-100 bg-white px-5 py-4 lg:hidden"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          {links.map((l) => (
            <a
              key={l.section}
              className="block rounded-lg p-3 hover:bg-blue-50"
              href={`#${c.sections[l.section as keyof typeof c.sections]}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
