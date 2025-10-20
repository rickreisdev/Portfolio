import { useTranslation } from "react-i18next";
import "../../assets/styles/experiencia-formacao.scss";
import BoxExperiencia from "../../components/BoxExperiencia";

const ExperienciaAudiovisual = () => {
    const { t } = useTranslation();
    return (
        <div className="experiencia">
            <h2 className="tituloxp">
                <span>{t("experience.careerTitle")}</span>
            </h2>

            <BoxExperiencia
                titulo={t("experience.rickReis.title")}
                nomeEmpresa="RickReis (YouTube)"
                data={t("experience.rickReis.date")}
                descricao={t("experience.rickReis.description")}
                tecnologias="Premiere - Photoshop - Cinema 4D - HitFilm - Vegas Pro"
            />

            <BoxExperiencia
                titulo={t("experience.personalProjects.title")}
                nomeEmpresa={t("experience.personalProjects.company")}
                data={t("experience.personalProjects.date")}
                descricao={t("experience.personalProjects.description")}
                tecnologias="Premiere - Photoshop - Illustrator - Cinema 4D - HitFilm - Vegas Pro"
            />
        </div>
    );
};

export default ExperienciaAudiovisual;
