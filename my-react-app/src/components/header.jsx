import logo from '../assets/img/logo.png';
import banner from '../assets/img/banner.png';

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
      <div className="Banner">
        <img src={banner} alt="Bannière du site" className="banner-image" />
      </div>
      
    </header>
  );
}

// export default function Footer() {
//   return (
//     <footer className="footer-base">
//     </footer>
//   );
// }