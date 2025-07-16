import logoFooter from '../assets/img/LOGOfooter.png';

export default function Footer() {
  return (
    <footer className="footer-base">
        <div className="footer-logo">
      <img src={logoFooter} alt="Logo du footer" className="h-20" />
      </div>
        <p className="footer-title">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}