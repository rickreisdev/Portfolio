import { useTranslation } from "react-i18next";

import "../../assets/styles/habilidades-projetos.scss";

import Tecnologias from "../../components/Tecnologias";
import OutrasHabilidades from "../../components/Habilidades";

const HabilidadesAudiovisual = () => {
    const { t } = useTranslation();

    return (
        <div className="habilidades" id="habilidades">
            <h2 className="tituloxp">
                <span>
                    {t("skills.audiovisualSkillsTitle")}
                </span>
            </h2>
            <Tecnologias />

            <br />
            <OutrasHabilidades />
        </div>
    );
};

export default HabilidadesAudiovisual;
