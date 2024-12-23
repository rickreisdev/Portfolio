import { useTranslation } from "react-i18next";
import "../assets/styles/experiencia-formacao.scss";
import BoxExperiencia from "../components/BoxExperiencia";

const Experiencia = () => {
    const { t } = useTranslation();
    return (
        <div className="experiencia">
            <h2 className="tituloxp">
                &#123;rickreisdev&#47;
                <span>{t("experienciaTitle")}</span>&#125;
            </h2>

            <BoxExperiencia
                titulo={t("boxExperienciaConectaTitle")}
                nomeEmpresa="Conecta Transportes"
                data={t("boxExperienciaConectaData")}
                descricao={t("boxExperienciaConectaDesc")}
                linkEmpresa="https://conecta.ind.br"
                tecnologias="PHP - Vue - Azure DevOps - Scrum"
            />

            <BoxExperiencia
                titulo={t("boxExperienciaFatecTitle")}
                nomeEmpresa="Faculdade de Tecnologia de Ribeirão Preto"
                data={t("boxExperienciaFatecData")}
                descricao={t("boxExperienciaFatecDesc")}
                linkEmpresa="http://www.fatecrp.edu.br"
                tecnologias="React - Node.js - Auth0 - NPM - Notion"
            />
        </div>
    );
};

export default Experiencia;