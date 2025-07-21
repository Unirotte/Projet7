import Banner from "../components/Banner";
import Collaps from "../components/Collaps";
import "../assets/CollapsCSS/collaps.css";
import collapsData from "../assets/data/collapsTableau.json";
import bannerImgAbout from "../assets/img/bannerImgAbout.png";
export default function AboutPage() {
  return (
    <>
      <Banner image={bannerImgAbout} alt={"Image de la bannière"} />
      {collapsData.map((collaps) => (
        <Collaps
          key={collaps.id}
          id={collaps.id}
          title={collaps.title}
          text={collaps.text}
        />
      ))}
    </>
  );
}
