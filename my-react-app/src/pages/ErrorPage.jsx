import { useRouteError, Link } from "react-router-dom";
import "../assets/ErrorPageCSS/errorPage.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
    
    <div className="error-page">
        <h1 className="Error404">404</h1>
      <h2 className="textError">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="btn-retour">Retourner sur la page d’accueil</Link>
    </div>
    
    </>
  );
}