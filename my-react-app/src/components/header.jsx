import logo from '../assets/img/logo.png';

export default function Header() {
  return (
    <header className="logo-header">
      <section className="position-banner">
      <img src={logo} alt="Logo du site" className="h-10" />
    <ul className="nav-links">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">A propos</a></li>
      </ul>
      </section>
    </header>
  );
}
