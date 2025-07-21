export default function Banner({title, image, alt}) {
  return (
    <div className="Banner">
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <img className="banner-img" src={image} alt={alt} />
      </div>
    </div>
  );
}
