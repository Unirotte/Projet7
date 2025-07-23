import { Link } from "react-router-dom";

export default function Cards({ id, title, cover }) {
  return (
    <Link to={`/PageLocation/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <p>{title}</p>
      </Link>
  );
}