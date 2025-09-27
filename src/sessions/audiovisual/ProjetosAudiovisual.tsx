import { useTranslation } from "react-i18next";

import "../../assets/styles/habilidades-projetos.scss";
import BoxProjetoAudiovisual from "../../components/BoxProjetoAudiovisual";

import japacasa from "../../assets/imagens/japacasa.png";
import seashore from "../../assets/imagens/seashore.jpg";
import titanic from "../../assets/imagens/titanic.png";

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
                    imagem={japacasa}
                    videoUrl="https://www.youtube.com/watch?v=IUpJIBrsBdY"
                    titulo="RickReis Reel"
                    descricao={t(
                        "box-Projetos-RickReisReel-Desc"
                    )}
                    tecnologias={
                        "Vlog" +
                        " - " +
                        t("box-Projetos-tag-edicao") +
                        " - " +
                        t("box-Projetos-tag-vlogViagem") +
                        " - " +
                        "Adobe Premiere"
                    }
                />
            </div>

            <h3>{t("projetosTodos")}</h3>

            <div className="projetos" id="projetos">
                <BoxProjetoAudiovisual
                    imagem={seashore}
                    videoUrl="https://www.youtube.com/watch?v=yEevkBzwt8c"
                    titulo="MSC Seashore Vlog"
                    descricao={t(
                        "box-Projetos-VlogSeashore-Desc"
                    )}
                    tecnologias={
                        "Reel" +
                        " - " +
                        t("box-Projetos-tag-edicao") +
                        " - " +
                        t("box-Projetos-tag-animacao") +
                        " - " +
                        t("box-Projetos-tag-vinheta") +
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
