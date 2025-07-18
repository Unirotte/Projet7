import "./assets/index.css";
import "./assets/headerCSS/header.css";
import "./assets/footerCSS/footer.css";
import "./assets/bannerCSS/banner.css";
import "./assets/cardsCSS/cards.css";
import Header from "./components/Header";
import Card from "./components/Cards";
import {getAllLogements} from "./assets/data/loadLogement";
import Banner from "./components/banner";
import Footer from "./components/footer";

export default function App() {
  const logements = getAllLogements();

  return (
    <>
      <Header />
      <Banner />
      <div className="container-card">
        <div className="Card-zone">
          {logements.map((logement) => (
            <Card
              key={logement.id} // toujours mettre une key unique dans une liste
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
