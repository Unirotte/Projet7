import React, {useState} from "react";
import "../assets/slidesCSS/slides.css";

export default function Slides({data}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = data.pictures;
  const noSlides = pictures.length <= 1; 

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel-container">
      <div className="banner-slide">
        <img
          className="slides-img"
          src={pictures[currentIndex]}
          alt={`${data.title} image ${currentIndex + 1}`}
        />

        {!noSlides && (
        <div className="arrow-container">
          <button className="arrow left" onClick={goToPrevious}>
            <i className="fa-sharp fa-solid fa-angle-left" alt="précédent" />
          </button>
          <button className="arrow right" onClick={goToNext}>
            <i className="fa-sharp fa-solid fa-angle-right" alt="suivant" />
          </button>
        </div>
        )}
      </div>
    </div>
  );
}
