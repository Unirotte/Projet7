import starFull from "../assets/img/star-full.png";
import starEmpty from "../assets/img/star-empty.png";

export default function Star({ rating }) {
    const totalStars = 5;

    return (
        <div className="star-container">
            {[...Array(totalStars)].map((_,index) => (
                <img
                    key={index}
                    src={index < rating ? starFull : starEmpty}
                    alt={index < rating ? "Étoile pleine" : "Étoile vide"}
                    className="star"
                />
            ))}
            </div>
    );
}