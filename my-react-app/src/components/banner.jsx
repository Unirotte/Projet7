export default function Banner({title, image, alt, className = ""}) {
  return (
    <div className="Banner">
      <div className="banner-content">
        <h1 className="banner-title" >{title}</h1>
        <img className={`banner-img${className}`} src={image} alt={alt} />
      </div>
    </div>
  );
}
