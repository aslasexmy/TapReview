import { siteContent as c } from '../siteContent.js';
export default function Problem() {
 return <section id={c.sections.why} className="section why-section"><div className="wrap why-layout"><div><p className="eyebrow">The Gootap idea</p><h2>Small moments.<br />Lasting connections.</h2></div><div>{c.why.cards.map(card=><article className="why-item" key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></section>;
}
