import { MessageCircle } from "lucide-react";
import { siteContent as c } from "../siteContent.js";
import { openWhatsApp } from "../helpers.js";
import Brand from "./Brand";
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white pb-24 pt-10 sm:pb-8">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 pb-8 md:flex-row">
          <div>
            <a href="#" aria-label={c.brand.home}>
              <Brand />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              {c.footer.description}
            </p>
          </div>
          <nav
            aria-label={c.footer.navigation}
            className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-600"
          >
            {c.navigation.links
              .filter(
                (l) => c.visibility[l.section as keyof typeof c.visibility],
              )
              .map((l) => (
                <a
                  key={l.section}
                  href={`#${c.sections[l.section as keyof typeof c.sections]}`}
                >
                  {l.label}
                </a>
              ))}
            <button
              className="flex items-center gap-2 text-left text-green-700"
              onClick={() => openWhatsApp(c.contact.defaultMessage)}
            >
              <MessageCircle size={17} />
              {c.contact.whatsappLabel}
            </button>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-gray-100 pt-6 text-xs leading-6 text-gray-500 sm:flex-row sm:pr-14">
          <p>
            © {c.footer.year} {c.footer.copyright}
          </p>
          <p>{c.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
