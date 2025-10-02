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
                <span>{t("projetosTitle")}</span>
            </h2>

            <h3>{t("projetosDestaques")}</h3>

            <div className="destaque-projetos">
                <BoxProjetoAudiovisual
                    imagem={showreel}
                    videoUrl="https://www.youtube.com/watch?v=1ihE3BB1YWg"
                    titulo={t("box-Projetos-RickReisReel-title")}
                    descricao={t(
                        "box-Projetos-RickReisReel-Desc"
                    )}
                    tecnologias={
                        "Showreel" +
                        " - " +
                        t("box-Projetos-tag-edicao") +
                        " - " +
                        t("box-Projetos-tag-animacao") +
                        " - " +
                        t("box-Projetos-tag-vinheta") +
                        " - " +
                        "Adobe Premiere"
                    }
                />
            </div>

            <h3>{t("projetosTodos")}</h3>

            <div className="projetos" id="projetos">
                <BoxProjetoAudiovisual
                    imagem={rio}
                    videoUrl="https://www.youtube.com/watch?v=LsOkxqUQFsg"
                    titulo="Rio 2025"
                    descricao={t(
                        "box-Projetos-Rio2025-Desc"
                    )}
                    tecnologias={
                        t("box-Projetos-tag-vlogViagem") +
                        " - " +
                        t("box-Projetos-tag-edicao") +
                        " - " +
                        "Adobe Premiere"
                    }
                />

                <BoxProjetoAudiovisual
                    imagem={seashore}
                    videoUrl="https://www.youtube.com/watch?v=yEevkBzwt8c"
                    titulo="MSC Seashore Vlog"
                    descricao={t(
                        "box-Projetos-VlogSeashore-Desc"
                    )}
                    tecnologias={
                        t("box-Projetos-tag-vlogViagem") +
                        " - " +
                        t("box-Projetos-tag-edicao") +
                        " - " +
                        "HitFilm Express"
                    }
                />

                <BoxProjetoAudiovisual
                    imagem={titanic}
                    videoUrl="https://www.youtube.com/watch?v=rQaELZsSNr0"
                    titulo="The Sinking of Titanic - Minecraft Animation"
                    descricao={t(
                        "box-Projetos-TitanicAnimation-Desc"
                    )}
                    tecnologias={
                        t("box-Projetos-tag-animacao") +
                        " - " +
                        t("box-Projetos-tag-edicao") +
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
                title={t("projetosBtnTitle")}
            >
                <h2>{t("projetosBtnLabel")}</h2>
            </a> */}
        </div>
    );
};

export default ProjetosAudiovisual;
