import { ArrowRight, MessageCircle, Nfc } from "lucide-react";
import { siteContent as c } from "./siteContent.js";
import { openWhatsApp } from "./helpers.js";
export default function Hero() {
  const visual = c.hero.visual;
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
            <span className="hero-stars">{c.hero.stars}</span>
            <span className="hero-shimmer">{c.hero.highlight}</span>
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
        <figure className="checkout-preview">
          <div className="checkout-intro">
            <p className="eyebrow">{visual.eyebrow}</p>
            <h2>{visual.title}</h2>
            <p className="checkout-description">{visual.description}</p>
          </div>
          <div className="checkout-scene">
            <div className="checkout-timer">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 1.5M9 2h6M12 2v3M18 5l2 2" />
              </svg>
              <div><strong>{visual.timer}</strong><span>{visual.timerLabel}</span></div>
            </div>
            <svg className="checkout-art" viewBox="0 0 520 340" role="img" aria-label={visual.imageAlt}>
              <defs>
                <linearGradient id="checkout-wall" x2="0" y2="1"><stop stopColor="#f4f8ff" /><stop offset="1" stopColor="#e8f0fc" /></linearGradient>
                <linearGradient id="checkout-counter" x2="0" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#edf2fa" /></linearGradient>
              </defs>
              <rect x="20" y="28" width="480" height="284" rx="32" fill="url(#checkout-wall)" />
              <path d="M45 283h430" stroke="#d8e3f4" strokeWidth="2" />
              <rect x="48" y="82" width="56" height="72" rx="8" fill="white" stroke="#dce6f3" />
              <path d="M62 135v-15m12 15v-30m12 30v-23" stroke="#4285f4" strokeWidth="7" strokeLinecap="round" />
              <path d="M440 238v-68" stroke="#669a7c" strokeWidth="4" />
              <ellipse cx="429" cy="182" rx="10" ry="23" fill="#8ebba0" transform="rotate(-38 429 182)" />
              <ellipse cx="451" cy="168" rx="10" ry="23" fill="#0f9d58" transform="rotate(32 451 168)" />
              <path d="M421 226h39l-5 33h-29z" fill="#dbe6f0" />
              {/* Owner faces the customer and gestures toward the NFC stand. */}
              <path d="M118 235v-55q1-30 32-30h13q29 0 35 31l10 54" fill="#4285f4" />
              <path d="M147 146v19q10 8 19 0v-20" fill="#c78964" />
              <ellipse cx="158" cy="119" rx="27" ry="33" fill="#dfa17a" />
              <path d="M132 120q-12-43 22-44 36-2 35 35l-16-9q-17 15-41 9" fill="#27354c" />
              <path d="M175 120h2m-3 14q5 3 9-1" stroke="#6d4333" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M138 158l19 18 19-18 10 70h-53z" fill="#fff" opacity=".94" />
              <path d="M190 181l22 28 31-4" fill="none" stroke="#dfa17a" strokeWidth="14" strokeLinecap="round" />
              <path d="M188 175l14 21" stroke="#4285f4" strokeWidth="22" strokeLinecap="round" />
              {/* Customer holds a phone and faces the owner. */}
              <path d="M335 242l-4-54q-2-31 30-36h16q30 6 33 39l4 51" fill="#0f9d58" />
              <path d="M351 145v18q10 7 19-1v-18" fill="#9f6045" />
              <ellipse cx="358" cy="119" rx="26" ry="32" fill="#b97855" />
              <path d="M332 111q-4-34 26-37 30-3 32 32l-5 46h-14v-41l-13-13q-8 13-26 13" fill="#27354c" />
              <path d="M341 120h-2m4 15q-5 2-9-2" stroke="#573a30" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M342 182l-21 31-26-6" fill="none" stroke="#b97855" strokeWidth="14" strokeLinecap="round" />
              <path d="M344 178l-13 22" stroke="#0f9d58" strokeWidth="23" strokeLinecap="round" />
              <g transform="rotate(-15 297 191)"><rect x="284" y="168" width="26" height="44" rx="5" fill="#27354c" /><rect x="288" y="174" width="18" height="30" rx="2" fill="#edf6ff" /><path d="m292 189 3 3 6-7" fill="none" stroke="#0f9d58" strokeWidth="2" /></g>
              <rect x="89" y="234" width="345" height="66" rx="10" fill="url(#checkout-counter)" stroke="#d4dfee" />
              <rect x="81" y="228" width="362" height="12" rx="6" fill="#c4d4e8" />
              <path d="M118 282h112" stroke="#dce5f1" strokeWidth="4" strokeLinecap="round" />
              <g transform="translate(243 178)"><path d="M0 48 6 0h35l7 48z" fill="#fff" stroke="#becfe5" strokeWidth="2" /><path d="M15 13q6 7 0 14m6-18q10 11 0 22m6-26q14 15 0 30" fill="none" stroke="#4285f4" strokeWidth="2.5" strokeLinecap="round" /><circle cx="11" cy="20" r="2" fill="#4285f4" /><path d="M0 48h48" stroke="#8da6c6" strokeWidth="3" /></g>
              <path d="M295 159q-15-13-30 0" fill="none" stroke="#4285f4" strokeWidth="2" strokeDasharray="4 5" />
              <circle cx="265" cy="159" r="3" fill="#4285f4" />
            </svg>
            <div className="checkout-labels"><span>{visual.ownerLabel}</span><span className="checkout-tap-label"><Nfc size={14} aria-hidden="true" />{visual.deviceLabel}</span><span>{visual.customerLabel}</span></div>
            <div className="checkout-invitation"><MessageCircle size={17} aria-hidden="true" /><p>{visual.invitation}</p></div>
          </div>
          <figcaption className="checkout-caption"><strong>{visual.caption}</strong><span>{visual.timingNote}</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
