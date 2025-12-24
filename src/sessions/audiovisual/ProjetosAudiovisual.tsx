import { useTranslation } from "react-i18next";

import "../../assets/styles/habilidades-projetos.scss";
import BoxProjetoAudiovisual from "../../components/BoxProjetoAudiovisual";
import { normalizeYoutubeUrl } from "../../utils/helpers";

import seashore from "../../assets/imagens/seashore.jpg";
import titanic from "../../assets/imagens/titanic.png";
import rio from "../../assets/imagens/rio.jpg";
import showreel from "../../assets/imagens/showreel.png";
import gemeos from "../../assets/imagens/gemeos.jpg";
import cravinhosNatal from "../../assets/imagens/cravinhosNatal.png";

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
                    isVideoVertical={false}
                />
            </div>

            <h3>{t("projects.allProjects")}</h3>

            <div className="projetos" id="projetos">
                <BoxProjetoAudiovisual
                    imagem={rio}
                    videoUrl="https://www.youtube.com/watch?v=LsOkxqUQFsg"
                    titulo={t("projects.rio2025.title")}
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
                    isVideoVertical={false}
                />

                <BoxProjetoAudiovisual
                    imagem={seashore}
                    videoUrl="https://www.youtube.com/watch?v=yEevkBzwt8c"
                    titulo={t(
                        "projects.vlogSeashore.title"
                    )}
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
                    isVideoVertical={false}
                />

                <BoxProjetoAudiovisual
                    imagem={gemeos}
                    videoUrl={normalizeYoutubeUrl(
                        "https://youtube.com/shorts/04lpdQqdJcA?si=lqvXdOEwJEGm3PEt"
                    )}
                    titulo={t("projects.gemeos2025.title")}
                    descricao={t(
                        "projects.gemeos2025.description"
                    )}
                    tecnologias={
                        t("projects.tags.videoEditing") +
                        " - " +
                        t("projects.tags.cinematic") +
                        " - " +
                        t("projects.tags.birthdayFilm") +
                        " - " +
                        "Kdenlive" +
                        " - " +
                        "Microsoft Clipchamp"
                    }
                    isVideoVertical={true}
                />

                <BoxProjetoAudiovisual
                    imagem={titanic}
                    videoUrl="https://www.youtube.com/watch?v=rQaELZsSNr0"
                    titulo={t(
                        "projects.titanicAnimation.title"
                    )}
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
                    isVideoVertical={false}
                />

                <BoxProjetoAudiovisual
                    imagem={cravinhosNatal}
                    videoUrl={normalizeYoutubeUrl(
                        "https://youtube.com/shorts/zP-0ken1cqg?si=QmYclXZq3WlwbVrY"
                    )}
                    titulo={t("projects.natalCravinhos2025.title")}
                    descricao={t(
                        "projects.natalCravinhos2025.description"
                    )}
                    tecnologias={
                        t("projects.tags.videoEditing") +
                        " - " +
                        t("projects.tags.cinematic") +
                        " - " +
                        t("projects.tags.cityFilm") +
                        " - " +
                        "Kdenlive" +
                        " - " +
                        "Microsoft Clipchamp"
                    }
                    isVideoVertical={true}
                />
            </div>

            <a
                className="btn5"
                href="https://www.youtube.com/@RickReis10/"
                target="_blank"
                rel="noopener noreferrer"
                title={t("projects.youtubeBtnLabel")}
            >
                <h2>{t("projects.youtubeBtnLabel")}</h2>
            </a>
        </div>
    );
};

export default ProjetosAudiovisual;
