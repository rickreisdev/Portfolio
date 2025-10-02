import { useTranslation } from "react-i18next";
import "../../assets/styles/experiencia-formacao.scss";
import BoxExperiencia from "../../components/BoxExperiencia";

const ExperienciaAudiovisual = () => {
    const { t } = useTranslation();
    return (
        <div className="experiencia">
            <h2 className="tituloxp">
                <span>{t("experienciaTitle")}</span>
            </h2>

            <BoxExperiencia
                titulo={t("boxExperienciaRickReisTitle")}
                nomeEmpresa="RickReis (YouTube)"
                data={t("boxExperienciaRickReisData")}
                descricao={t("boxExperienciaRickReisDesc")}
                tecnologias="Premiere - Photoshop - Cinema 4D - HitFilm - Vegas Pro"
            />

            <BoxExperiencia
                titulo={t("boxExperienciaProjetosPessoaisTitle")}
                nomeEmpresa={t("boxExperienciaProjetosPessoaisCompany")}
                data={t("boxExperienciaProjetosPessoaisData")}
                descricao={t("boxExperienciaProjetosPessoaisDesc")}
                tecnologias="Premiere - Photoshop - Illustrator - Cinema 4D - HitFilm - Vegas Pro"
            />
        </div>
    );
};

export default ExperienciaAudiovisual;
