import { Link } from "react-router-dom";

export default function Cards({ id, title, cover }) {
  return (
    <Link to={`/PageLocation/${id}`} className="card">
      <div className="imgText">
      <img src={cover} alt={title} className="card-image" />
      <p className="titleCards">{title}</p>
      </div>
      </Link>
  );
}
