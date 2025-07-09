import './assets/index.css';
import Header from './components/Header';
import Card from './components/Cards';
import { getAllLogements } from './assets/data/loadLogement';

export default function App() {
  const logements = getAllLogements();

  return (
    <>
    <Header />
    <div className="container-card">
       {logements.map((logement) => (
      <Card 
            key={logement.id} // toujours mettre une key unique dans une liste
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
            />
       ))}
      
    
      </div>
    {/* <Footer /> */}
    </>
  );
}
