import {Banner, Collaps,} from '../components/Index';
import "../assets/CollapsCSS/collaps.css";
import collapsData from "../assets/data/collapsTableau.json";
import bannerImgAbout from "../assets/img/bannerImgAbout.png";
export default function AboutPage() {
  return (
    <>
      <Banner image={bannerImgAbout} alt={"Image de la bannière"} className="About"/>
       <div className="collaps-container">
      {collapsData.map((collaps) => (
       
        <Collaps
          key={collaps.id}
          id={collaps.id}
          title={collaps.title}
          text={collaps.text}
        />
        
      ))}
      </div>
    </>
  );
}
