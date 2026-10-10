import { useState } from "react";
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
import introAP from "../../assets/imagens/introAP.png";
import mulheresFibra from "../../assets/imagens/mulheresDeFibrajpg.jpg";
import ibiLogo from "../../assets/imagens/ibi.png";
import grupoNicnet from "../../assets/imagens/grupoNicnet.jpg";
import rib170 from "../../assets/imagens/ribeirao170.jpg";
import vdnreel from "../../assets/imagens/vdn.jpg";
import cabonnetlogo from "../../assets/imagens/cabonnet.jpg";

interface ProjectData {
    imagem: string;
    videoUrl: string;
    titulo: string;
    descricao: string;
    tecnologias: string;
    isVideoVertical: boolean;
}

const ProjetosAudiovisual = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] =
        useState<ProjectData | null>(null);

    const projetos: ProjectData[] = [
        {
            imagem: vdnreel,
            videoUrl: "https://www.youtube.com/watch?v=GZpuNkwGRO4",
            titulo: t("projects.vdnreel.title"),
            descricao: t("projects.vdnreel.description"),
            tecnologias:
                t("projects.tags.videoEditing") +
                " - " +
                "Motion Graphics" +
                " - " +
                "Adobe Premiere" +
                " - " +
                "Adobe After Effects",
            isVideoVertical: false,
        },
        {
            imagem: cabonnetlogo,
            videoUrl: "https://www.youtube.com/watch?v=1HG4N6sBueM",
            titulo: t("projects.cabonnetlogo.title"),
            descricao: t("projects.cabonnetlogo.description"),
            tecnologias:
                "Motion Graphics" +
                " - " +
                "Adobe Premiere" +
                " - " +
                "Adobe After Effects",
            isVideoVertical: false,
        },
        {
            imagem: mulheresFibra,
            videoUrl:
                "https://www.youtube.com/watch?v=LVmWN4tQHqo",
            titulo: t("projects.mulheresNicnet.title"),
            descricao: t(
                "projects.mulheresNicnet.description",
            ),
            tecnologias:
                t("projects.tags.videoEditing") +
                " - " +
                "Motion Graphics" +
                " - " +
                "Adobe Premiere" +
                " - " +
                "Adobe After Effects",
            isVideoVertical: false,
        },
        {
            imagem: grupoNicnet,
            videoUrl:
                "https://www.youtube.com/watch?v=zQpzY8lM6Zw",
            titulo: t("projects.grupoNicnet.title"),
            descricao: t(
                "projects.grupoNicnet.description",
            ),
            tecnologias:
                "Motion Graphics" +
                " - " +
                "Adobe After Effects" +
                " - " +
                "Logo Reveal" +
                " - " +
                "3D Animation",
            isVideoVertical: false,
        },
        {
            imagem: ibiLogo,
            videoUrl:
                "https://www.youtube.com/watch?v=lATSMNC58as",
            titulo: t("projects.ibiLogo.title"),
            descricao: t("projects.ibiLogo.description"),
            tecnologias:
                "Motion Graphics" +
                " - " +
                "Adobe After Effects" +
                " - " +
                "Logo Reveal",
            isVideoVertical: false,
        },
        {
            imagem: rib170,
            videoUrl:
                "https://www.youtube.com/watch?v=sjuzn5re97Y",
            titulo: t("projects.rib170.title"),
            descricao: t("projects.rib170.description"),
            tecnologias:
                t("projects.tags.videoEditing") +
                " - " +
                "Adobe Premiere" +
                " - " +
                "Motion Graphics" +
                " - " +
                "Adobe After Effects",
            isVideoVertical: false,
        },
        {
            imagem: rio,
            videoUrl:
                "https://www.youtube.com/watch?v=LsOkxqUQFsg",
            titulo: t("projects.rio2025.title"),
            descricao: t("projects.rio2025.description"),
            tecnologias:
                t("projects.tags.travelVlog") +
                " - " +
                t("projects.tags.videoEditing") +
                " - " +
                "Adobe Premiere",
            isVideoVertical: false,
        },
        {
            imagem: introAP,
            videoUrl:
                "https://www.youtube.com/watch?v=Ots8SDvPsc8",
            titulo: t("projects.introAP.title"),
            descricao: t("projects.introAP.description"),
            tecnologias:
                t("projects.tags.intro") +
                " - " +
                t("projects.tags.motionGraphics") +
                " - " +
                t("projects.tags.videoEditing") +
                " - " +
                "Kdenlive",
            isVideoVertical: false,
        },
        {
            imagem: gemeos,
            videoUrl: normalizeYoutubeUrl(
                "https://youtube.com/shorts/04lpdQqdJcA?si=lqvXdOEwJEGm3PEt",
            ),
            titulo: t("projects.gemeos2025.title"),
            descricao: t("projects.gemeos2025.description"),
            tecnologias:
                t("projects.tags.videoEditing") +
                " - " +
                t("projects.tags.cinematic") +
                " - " +
                t("projects.tags.birthdayFilm") +
                " - " +
                "Kdenlive" +
                " - " +
                "Microsoft Clipchamp",
            isVideoVertical: true,
        },
        {
            imagem: seashore,
            videoUrl:
                "https://www.youtube.com/watch?v=yEevkBzwt8c",
            titulo: t("projects.vlogSeashore.title"),
            descricao: t(
                "projects.vlogSeashore.description",
            ),
            tecnologias:
                t("projects.tags.travelVlog") +
                " - " +
                t("projects.tags.videoEditing") +
                " - " +
                "HitFilm Express",
            isVideoVertical: false,
        },
        {
            imagem: cravinhosNatal,
            videoUrl:
                "https://youtube.com/shorts/zP-0ken1cqg?si=QmYclXZq3WlwbVrY",
            titulo: t("projects.natalCravinhos2025.title"),
            descricao: t(
                "projects.natalCravinhos2025.description",
            ),
            tecnologias:
                t("projects.tags.videoEditing") +
                " - " +
                t("projects.tags.cinematic") +
                " - " +
                t("projects.tags.cityFilm") +
                " - " +
                "Kdenlive" +
                " - " +
                "Microsoft Clipchamp",
            isVideoVertical: true,
        },
        {
            imagem: titanic,
            videoUrl:
                "https://www.youtube.com/watch?v=rQaELZsSNr0",
            titulo: t("projects.titanicAnimation.title"),
            descricao: t(
                "projects.titanicAnimation.description",
            ),
            tecnologias:
                t("projects.tags.animation") +
                " - " +
                t("projects.tags.videoEditing") +
                " - " +
                "Cinema 4D" +
                " - " +
                "Adobe Premiere",
            isVideoVertical: false,
        },
    ];

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
                        "projects.rickReisReel.title",
                    )}
                    descricao={t(
                        "projects.rickReisReel.description",
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

            <div className="project-grid" id="projetos">
                {projetos.map((projeto, index) => (
                    <button
                        type="button"
                        key={index}
                        className="project-grid-item"
                        onClick={() =>
                            setSelectedProject(projeto)
                        }
                    >
                        <div
                            className="grid-image"
                            style={{
                                backgroundImage: `url(${projeto.imagem})`,
                            }}
                        >
                            {projeto.videoUrl && (
                                <span className="grid-play-icon">
                                    &#9658;
                                </span>
                            )}
                            <div className="grid-hover">
                                <h3>{projeto.titulo}</h3>
                                <p>{projeto.tecnologias}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {selectedProject && (
                <div
                    className="project-detail-modal"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="project-detail-content"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <button
                            type="button"
                            className="project-detail-close"
                            onClick={() =>
                                setSelectedProject(null)
                            }
                            aria-label={
                                t(
                                    "projects.closeProject",
                                ) || "Fechar projeto"
                            }
                        >
                            ×
                        </button>
                        <BoxProjetoAudiovisual
                            imagem={selectedProject.imagem}
                            videoUrl={
                                selectedProject.videoUrl
                            }
                            titulo={selectedProject.titulo}
                            descricao={
                                selectedProject.descricao
                            }
                            tecnologias={
                                selectedProject.tecnologias
                            }
                            isVideoVertical={
                                selectedProject.isVideoVertical
                            }
                        />
                    </div>
                </div>
            )}

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
