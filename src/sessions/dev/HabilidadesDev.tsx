import "../../assets/styles/habilidades-projetos.scss";

import Tecnologias from "../../components/Tecnologias";
import Tecnologias2 from "../../components/Tecnologias2";
import Habilidades from "../../components/Habilidades";
import { useTranslation } from "react-i18next";
import OutrasHabilidades from "../../components/OutrasHabilidades";

const HabilidadesDev = () => {
    const { t } = useTranslation();
    return (
        <div className="habilidades" id="habilidades">
            <h2 className="tituloxp">
                &lt;<span>{t("skills.skillsTitle")}</span>
                /&gt;
            </h2>
            <Habilidades /> <br />
            <h3 className="diferenciais-titulo">
                {t("skills.technologies.title")}
            </h3>
            <Tecnologias /> <br />
            <Tecnologias2 /> <br />
            <h3 className="diferenciais-titulo">
                {t("skills.differentials.title")}
            </h3>
            <OutrasHabilidades />
        </div>
    );
};

export default HabilidadesDev;
