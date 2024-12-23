import "./assets/styles/global.scss";
import BtnTopo from "./components/BtnTopo.tsx";
import Contato from "./sessions/Contato.tsx";
import Footer from "./sessions/Footer.tsx";
import Header from "./sessions/Header.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="page-container">
        <Header />
        <BtnTopo />
        <Outlet/>
        <Contato />
        <Footer />
      </div>
    </>
  );
}

export default App;
