import logo from '../assets/img/logo.png';
import { Link, useLocation  } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <header className="logo-header">
      <section className="position-banner">
        <Link to="/">
      <img src={logo} alt="Logo du site" className="h-10" /></Link>
    <ul className="nav-links">
      <li><Link to="/" className={location.pathname === "/" ? "li active" : "li"}>Accueil</Link></li>
      <li><Link to="/AboutPage" className={location.pathname === "/AboutPage" ? "li active" : "li"}>A propos</Link></li>
      </ul>
      </section>
    </header>
  );
}
