import { MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Objective from "./components/Objective";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { siteContent as c } from "./siteContent.js";
import { openWhatsApp } from "./helpers.js";
export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {c.visibility.hero && <Hero />}
        {c.visibility.products && <Pricing />}
        {c.visibility.how && <Objective />}
        {c.visibility.why && <Problem />}
        {c.visibility.services && <Features />}
        {c.visibility.faq && <FAQ />}
        {c.visibility.contact && <Contact />}
      </main>
      <Footer />
      <button
        className="floating-whatsapp"
        aria-label={c.contact.floatingLabel}
        onClick={() => openWhatsApp(c.contact.defaultMessage)}
      >
        <MessageCircle size={25} />
      </button>
    </>
  );
}
