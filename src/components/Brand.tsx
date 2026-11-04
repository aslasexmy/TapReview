import { siteContent as c } from '../siteContent.js';

export default function Brand() {
  return <img className="brand-lockup" src={c.brand.logo} alt={c.brand.logoAlt} width="884" height="213" />;
}
