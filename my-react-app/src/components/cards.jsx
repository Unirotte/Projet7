export default function Card({ id, title, cover }) {
  console.log("Image reçue :", cover);
  return (
    <div className="card" id={id}>
      <img src={cover} alt={title} className="card-image" />
      <p>{title}</p>
    </div>
  );
}