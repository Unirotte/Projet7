import "../assets/index.css";
import "../assets/bannerCSS/banner.css";
import "../assets/cardsCSS/cards.css";
import Cards from "../components/Cards";
import {getAllLogements} from "../assets/data/loadLogement";
import Banner from "../components/Banner";
import bannerImg from '../assets/img/bannerImgHome.png';

export default function HomePage() {
  const logements = getAllLogements();
  return (
    <>
      <Banner
        title="Chez vous est partout ailleurs"
        image={bannerImg}
        alt={"Image de la bannière"}
      />
      <div className="container-card">
        <div className="Card-zone">
          {logements.map((logement) => (
            <Cards
              key={logement.id} // toujours mettre une key unique dans une liste
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </>
  );
}
