import { useEffect, useRef, useState } from 'react';
import { siteContent as c } from '../siteContent.js';
import { formatPrice, openWhatsApp } from '../helpers.js';
import ProductVisual from './ProductVisual';
import OrderModal from './OrderModal';

export default function Pricing() {
  const track = useRef<HTMLDivElement>(null);
  const [ends, setEnds] = useState({ start: true, end: false });
  const [selected, setSelected] = useState<(typeof c.products)[number] | null>(null);
  useEffect(() => {
    const el = track.current!;
    const update = () => setEnds({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    const observer = new ResizeObserver(update);
    observer.observe(el); el.addEventListener('scroll', update, { passive: true }); update();
    return () => { observer.disconnect(); el.removeEventListener('scroll', update); };
  }, []);
  const move = (direction: number) => {
    const el = track.current!;
    el.scrollBy({ left: direction * (el.firstElementChild!.getBoundingClientRect().width + 24), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <>
    <section id="devices" className="section devices-section">
      <div className="wrap">
        <div className="range-heading"><div><p className="eyebrow">01 / Devices</p><h2>A little device.<br />An open invitation.</h2><p className="section-description">Choose the format that fits your counter, wall,<br className="hidden sm:block" /> or everyday customer interactions.</p></div><div className="range-controls"><button className="icon-button" disabled={ends.start} aria-label="Previous devices" onClick={() => move(-1)}>←</button><button className="icon-button" disabled={ends.end} aria-label="Next devices" onClick={() => move(1)}>→</button></div></div>
        <div ref={track} className="product-track" role="region" aria-label="NFC devices" aria-roledescription="carousel" tabIndex={0} onKeyDown={e => { if(e.target !== e.currentTarget) return; if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) { e.preventDefault(); if(e.key==='Home') track.current!.scrollTo({left:0}); else if(e.key==='End') track.current!.scrollTo({left:track.current!.scrollWidth}); else move(e.key==='ArrowRight'?1:-1); } }}>
          {c.products.map(p => <article className="product-card" key={p.id}>
            <div className="product-art"><div className="product-meta"><span>{p.badge}</span><span className={`status ${p.status==='available'?'available':''}`}>{c.productSection[p.status as 'available'|'comingSoon']}</span></div><ProductVisual product={p} /></div>
            <div className="product-information"><div className="product-title"><h3>{p.name}</h3><span>{formatPrice(p.price)}</span></div><p>{p.description}</p><small>{p.dimensions || '\u00a0'}</small><button className={`btn ${p.status==='available'?'btn-primary':'btn-secondary'}`} onClick={() => p.status==='available'?setSelected(p):openWhatsApp(c.contact.enquiryMessage.replace('{product}',p.name))}>{p.status==='available'?p.button:'Ask about this device'}<span aria-hidden="true">↗</span></button></div>
          </article>)}
        </div>
        <p className="range-note">Five formats. The same simple tap or scan. <span>Swipe to see the range.</span></p>
      </div>
    </section>
    <section id={c.sections.products} className="section systems-section"><div className="wrap systems-layout"><div className="systems-intro"><p className="eyebrow">02 / Systems</p><h2>Your counter.<br />More connected.</h2><p className="section-description">A display, NFC/QR stand and audio device, planned together as one merchant package.</p><p className="planning-note">Planned range<br /><span>Specifications and availability are subject to testing and confirmation.</span></p></div><div className="system-options">{c.systems.map((p,i)=><article className="system-option" key={p.id}><div className="system-title"><span className="system-index">0{i+1}</span><h3>{p.name}</h3><span className="status">Planned</span></div><p className="system-price">{formatPrice(p.price)}<small>proposed package price</small></p><ul><li>{i===0?'7-inch':'10.1-inch'} Android display target</li><li>Branded NFC/QR stand</li><li>{i===0?'Basic':'Upgraded'} audio device</li><li>Setup + 12 months limited hosting/support</li></ul><button className="text-link" onClick={()=>openWhatsApp(c.contact.enquiryMessage.replace('{product}',p.name))}>Enquire about {p.name} <span aria-hidden="true">↗</span></button></article>)}</div><p className="systems-footnote">Proposed one-time package prices. Merchant supplies internet. Payment announcements depend on an approved integration and testing.</p></div></section>
    {selected && <OrderModal product={selected} onClose={()=>setSelected(null)} />}
  </>;
}
