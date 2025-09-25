import { useTranslation } from "react-i18next";

import "../../assets/styles/habilidades-projetos.scss";

import japacasa from "../../assets/imagens/japacasa.png";
import crudEstudantes from "../../assets/imagens/crudEstudantes.png";
import BoxProjetoAudiovisual from "../../components/BoxProjetoAudiovisual";

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
                    titulo="JapaCasa!"
                    descricao={t(
                        "boxProjetos-JapaCasa-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/JapaCasa"
                    linkSite="https://japacasa.vercel.app"
                    tecnologias="Vite React - Bootstrap - SASS - API REST - Node.js - Express"
                />
            </div>

            <h3>{t("projetosTodos")}</h3>

            <div className="projetos" id="projetos">
                <BoxProjetoAudiovisual
                    imagem={crudEstudantes}
                    titulo={t(
                        "boxProjetos-Estudantes-title"
                    )}
                    descricao={t(
                        "boxProjetos-Estudantes-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/CrudEstudantes"
                    linkSite="https://crudestudantes.onrender.com"
                    tecnologias="Vue.js - Node.js - Express - API REST - Bootstrap - Docker - PostgreSQL"
                />
            </div>

            <a
                className="btn5"
                href="https://github.com/rickreisdev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title={t("projetosBtnTitle")}
            >
                <h2>{t("projetosBtnLabel")}</h2>
            </a>
        </div>
    );
};

export default ProjetosAudiovisual;
