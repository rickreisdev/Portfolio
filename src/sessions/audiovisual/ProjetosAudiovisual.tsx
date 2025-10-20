import { useTranslation } from "react-i18next";

import "../../assets/styles/habilidades-projetos.scss";
import BoxProjetoAudiovisual from "../../components/BoxProjetoAudiovisual";

import seashore from "../../assets/imagens/seashore.jpg";
import titanic from "../../assets/imagens/titanic.png";
import rio from "../../assets/imagens/rio.jpg";
import showreel from "../../assets/imagens/showreel.png";

const ProjetosAudiovisual = () => {
    const { t } = useTranslation();
    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                <span>{t("projects.projectsTitle")}</span>
            </h2>

            <h3>{t("projects.highlights")}</h3>

            <div className="destaque-projetos">
                <BoxProjetoAudiovisual
                    imagem={showreel}
                    videoUrl="https://www.youtube.com/watch?v=1ihE3BB1YWg"
                    titulo={t(
                        "projects.rickReisReel.title"
                    )}
                    descricao={t(
                        "projects.rickReisReel.description"
                    )}
                    tecnologias={
                        "Showreel" +
                        " - " +
                        t("projects.tags.videoEditing") +
                        " - " +
                        t("projects.tags.animation") +
                        " - " +
                        t("projects.tags.intro") +
                        " - " +
                        "Adobe Premiere"
                    }
                />
            </div>

            <h3>{t("projects.allProjects")}</h3>

            <div className="projetos" id="projetos">
                <BoxProjetoAudiovisual
                    imagem={rio}
                    videoUrl="https://www.youtube.com/watch?v=LsOkxqUQFsg"
                    titulo="Rio 2025"
                    descricao={t(
                        "projects.rio2025.description"
                    )}
                    tecnologias={
                        t("projects.tags.travelVlog") +
                        " - " +
                        t("projects.tags.videoEditing") +
                        " - " +
                        "Adobe Premiere"
                    }
                />

                <BoxProjetoAudiovisual
                    imagem={seashore}
                    videoUrl="https://www.youtube.com/watch?v=yEevkBzwt8c"
                    titulo="MSC Seashore Vlog"
                    descricao={t(
                        "projects.vlogSeashore.description"
                    )}
                    tecnologias={
                        t("projects.tags.travelVlog") +
                        " - " +
                        t("projects.tags.videoEditing") +
                        " - " +
                        "HitFilm Express"
                    }
                />

                <BoxProjetoAudiovisual
                    imagem={titanic}
                    videoUrl="https://www.youtube.com/watch?v=rQaELZsSNr0"
                    titulo="The Sinking of Titanic - Minecraft Animation"
                    descricao={t(
                        "projects.titanicAnimation.description"
                    )}
                    tecnologias={
                        t("projects.tags.animation") +
                        " - " +
                        t("projects.tags.videoEditing") +
                        " - " +
                        "Cinema 4D" +
                        " - " +
                        "Adobe Premiere"
                    }
                />
            </div>

            {/* <a
                className="btn5"
                href="https://github.com/rickreisdev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title={t("projects.githubBtnTitle")}
            >
                <h2>{t("projects.githubBtnLabel")}</h2>
            </a> */}
        </div>
    );
};

export default ProjetosAudiovisual;
