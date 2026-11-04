import { siteContent as c } from '../siteContent.js';
export default function Objective() {
 return <section id={c.sections.how} className="section how-section"><div className="wrap how-layout"><div><p className="eyebrow">At your counter</p><h2>Keep the conversation<br />going after the visit.</h2><p className="section-description">A helpful invitation, at a natural moment.</p></div><ol className="workflow">{c.how.steps.map((step,i)=><li key={step.title}><span>0{i+1}</span><div><h3>{step.title}</h3><p>{step.text}</p>{step.example&&<blockquote>{step.example}</blockquote>}</div></li>)}</ol></div></section>;
}
