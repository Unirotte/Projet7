import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/headerCSS/header.css";
import "./assets/footerCSS/footer.css";

export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}


