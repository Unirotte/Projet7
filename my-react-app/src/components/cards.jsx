export default function Cards({ id, title, cover }) {
  return (
    <div className="card" id={id}>
      <img src={cover} alt={title} className="card-image" />
      <p>{title}</p>
    </div>
  );
}