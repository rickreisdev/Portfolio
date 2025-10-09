import { useTranslation } from "react-i18next";
import "../../assets/styles/experiencia-formacao.scss";
import BoxExperiencia from "../../components/BoxExperiencia";

const ExperienciaDev = () => {
    const { t } = useTranslation();
    return (
        <div className="experiencia">
            <h2 className="tituloxp">
                &lt;<span>{t("experienciaTitle")}</span>
                /&gt;
            </h2>

            <BoxExperiencia
                titulo={t("boxExperienciaInsanyTitle")}
                nomeEmpresa="Insany"
                data={t("boxExperienciaInsanyData")}
                descricao={t("boxExperienciaInsanyDesc")}
                tecnologias="React - Styled Components - Figma - Clickup - Scrum"
            />

            <BoxExperiencia
                titulo={t("boxExperienciaFairyTitle")}
                nomeEmpresa="Fairy"
                data={t("boxExperienciaFairyData")}
                descricao={t("boxExperienciaFairyDesc")}
                tecnologias="React - Typescript - Node - Clickup - Scrum"
            />

            <BoxExperiencia
                titulo={t("boxExperienciaConectaTitle")}
                nomeEmpresa="Connect Direct"
                data={t("boxExperienciaConectaData")}
                descricao={t("boxExperienciaConectaDesc")}
                tecnologias="PHP - Laravel - Vue - MySQL - Azure DevOps - Scrum"
            />

            <BoxExperiencia
                titulo={t("boxExperienciaFatecTitle")}
                nomeEmpresa="Faculdade de Tecnologia de Ribeirão Preto"
                data={t("boxExperienciaFatecData")}
                descricao={t("boxExperienciaFatecDesc")}
                tecnologias="React - Node.js - Figma - SCSS - Auth0 - Notion"
            />
        </div>
    );
};

export default ExperienciaDev;
