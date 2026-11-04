import { siteContent as c } from '../siteContent.js';
import ProductVisual from './ProductVisual';

export default function Hero() {
  return (
    <section id={c.sections.hero} className="hero-section">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">A small tap. A closer connection.</p>
          <h1>Good connections<br />start with <span>Gootap.</span></h1>
          <p className="hero-description">Your reviews, menu and contact links.<br className="hidden sm:block" /> Right where your customers are.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#devices">Find your device <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#products">See planned systems <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-note">NFC & QR solutions for everyday business.</p>
        </div>
        <figure className="hero-product">
          <div className="hero-product-top"><span>Made for the counter.</span><span>NFC + QR</span></div>
          <ProductVisual product={c.products[0]} compact />
          <figcaption><div><strong>PVC NFC</strong><span>A simple way to invite honest feedback.</span></div><a href="#devices" aria-label="View PVC NFC device">↗</a></figcaption>
          <p className="hero-illustration-note">Product illustration</p>
        </figure>
      </div>
      <div className="wrap solution-intro"><p>Two ways to Gootap.</p><a href="#devices"><strong>Devices</strong><span>Standalone tap-and-scan formats</span></a><a href="#products"><strong>Systems</strong><span>Planned counter packages</span></a></div>
    </section>
  );
}
