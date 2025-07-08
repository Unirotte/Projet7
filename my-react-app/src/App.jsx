import './assets/index.css';
import Header from './components/Header';
import Card from './components/Cards';

export default function App() {
  return (
    <>
    <Header />
    <div className="container-card">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    {/* <Footer /> */}
    </>
  );
}
