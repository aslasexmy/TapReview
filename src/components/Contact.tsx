import { siteContent as c } from '../siteContent.js';
import { openWhatsApp } from '../helpers.js';
export default function Contact() {
 return <section id={c.sections.contact} className="section contact-section"><div className="wrap"><div className="contact-panel"><img src="/images/gootap-mark.png" alt="" width="72" height="72" loading="lazy"/><div><p className="eyebrow">Let’s find your fit</p><h2>A good place to start?<br />Your counter.</h2><p>Tell us about your business. We’ll help you choose a device or discuss a planned system.</p></div><div className="contact-actions"><button className="btn btn-primary" onClick={()=>openWhatsApp(c.contact.chooseMessage)}>Talk to Gootap <span aria-hidden="true">↗</span></button><span>{c.contact.displayNumber} · WhatsApp</span></div></div></div></section>;
}
