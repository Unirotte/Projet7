import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="logo-header">
      <section className="position-banner">
      <img src={logo} alt="Logo du site" className="h-10" />
    <ul className="nav-links">
      <li><Link to="/HomePage">Accueil</Link></li>
      <li><Link to="/AboutPage">A propos</Link></li>
      </ul>
      </section>
    </header>
  );
}
