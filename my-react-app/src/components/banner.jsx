import banner from '../assets/img/banner.png';

export default function Banner() {
  return (
    <div className="Banner">
        <div className="banner-content">
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        <img src={banner} alt="Bannière du site" className="banner-image" />
      </div>
    </div>
  );
}