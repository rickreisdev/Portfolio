import "./assets/styles/global.scss";
import BtnTopo from "./components/BtnTopo.tsx";
import Contato from "./sessions/Contato.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

function App() {
    const { t } = useTranslation();
    const location = useLocation();
    const { pathname } = location;

    const rotaAudiovisual =
        pathname.startsWith("/audiovisual");
    const rotaDev = pathname.startsWith("/dev");

    return (
        <>
            <Helmet>
                <title>
                    {rotaDev
                        ? t("tituloHomeDev")
                        : rotaAudiovisual
                        ? t("tituloHomeAudiovisual")
                        : t("tituloHome")}
                </title>
                <meta
                    name="description"
                    content={
                        rotaDev
                            ? t("descHomeDev")
                            : rotaAudiovisual
                            ? t("descHomeAudiovisual")
                            : t("descHome")
                    }
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
