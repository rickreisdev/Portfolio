import "../assets/styles/habilidades-projetos.scss";

import Tecnologias from "../components/Tecnologias";
import Tecnologias2 from "../components/Tecnologias2";
import OutrasHabilidades from "../components/OutrasHabilidades";
import { useTranslation } from "react-i18next";

const Habilidades = () => {
    const { t } = useTranslation();
    return (
        <div className="habilidades" id="habilidades">
            <h2 className="tituloxp">
                &#123;rickreis&#47;<span>{t('habilidadesTitle')}</span>&#125;
            </h2>
            <Tecnologias /> <br />
            <Tecnologias2 />
            <h3 className="diferenciais-titulo">
            {t('diferenciaisTitle')}
            </h3>
            <OutrasHabilidades />
        </div>
    );
};

export default Habilidades;
