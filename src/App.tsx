import "./assets/styles/global.scss";
import BtnTopo from "./components/BtnTopo.tsx";
import Contato from "./sessions/Contato.tsx";
import Footer from "./sessions/Footer.tsx";
import Header from "./sessions/Header.tsx";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

function App() {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t("tituloHome")}</title>
                <meta
                    name="description"
                    content={t("descHome")}
                />
            </Helmet>

            <div className="page-container">
                <Header />
                <BtnTopo />
                <Outlet />
                <Contato />
                <Footer />
            </div>
        </>
    );
}

export default App;
