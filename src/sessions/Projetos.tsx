import "../assets/styles/habilidades-projetos.scss";
import BoxProjeto from "../components/BoxProjeto";
import japacasa from "../assets/imagens/japacasa.png";
import crudEstudantes from "../assets/imagens/crudEstudantes.png";
import portalServicos from "../assets/imagens/portalservicos.png";
import epp from "../assets/imagens/epp.png";
import pagamento from "../assets/imagens/pagamento.png";
import gerSenhas from "../assets/imagens/senha.png";
import tarefas from "../assets/imagens/tarefas.png";
import imc from "../assets/imagens/imc.png";
import { useTranslation } from "react-i18next";

const Projetos = () => {
    const { t } = useTranslation();
    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                &#123;rickreis&#47;
                <span>{t("projetosTitle")}</span>&#125;
            </h2>

            <h3>{t("projetosDestaques")}</h3>

            <div className="destaque-projetos">
                <BoxProjeto
                    imagem={japacasa}
                    titulo="JapaCasa!"
                    descricao={t(
                        "boxProjetos-JapaCasa-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/JapaCasa"
                    linkSite="https://japacasa.vercel.app"
                    tecnologias="Vite React - Bootstrap - SASS - API REST - Node.js - Express"
                />

                <BoxProjeto
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

                <BoxProjeto
                    imagem={portalServicos}
                    titulo={t(
                        "boxProjetos-PortalServicos-title"
                    )}
                    descricao={t(
                        "boxProjetos-PortalServicos-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/PortalServicos"
                    tecnologias="Vite React - Auth0 - API REST - SASS - Express"
                />
            </div>

            <h3>{t("projetosTodos")}</h3>

            <div className="projetos" id="projetos">
                <BoxProjeto
                    titulo="ContactMVC"
                    descricao={t(
                        "boxProjetos-ContactMVC-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/ContactMVC"
                    tecnologias="ASP.NET - HTML - CSS - Javascript - Docker - PostgreSQL"
                />

                <BoxProjeto
                    imagem={epp}
                    titulo="E++"
                    descricao={t("boxProjetos-Epp-Desc")}
                    linkRepo="https://github.com/rickreisdev/Epp"
                    tecnologias="Flutter - Firebase - Figma"
                />

                <BoxProjeto
                    imagem={pagamento}
                    titulo={t(
                        "boxProjetos-Pagamento-title"
                    )}
                    descricao={t(
                        "boxProjetos-Pagamento-Desc"
                    )}
                    linkSite="https://desafio-front-end-woovi.vercel.app"
                    linkRepo="https://github.com/rickreisdev/DesafioFrontEndWoovi"
                    tecnologias="Vite React - MUI - CSS in TS - Typescript - Figma - Vitest"
                />

                <BoxProjeto
                    imagem={gerSenhas}
                    titulo={t(
                        "boxProjetos-GerSenhas-title"
                    )}
                    descricao={t(
                        "boxProjetos-GerSenhas-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/GerenciadorSenhas"
                    tecnologias="Vite React - Python - SASS - Javascript - Docker - PostgreSQL"
                />

                <BoxProjeto
                    imagem={tarefas}
                    titulo={t("boxProjetos-Tarefas-title")}
                    descricao={t(
                        "boxProjetos-Tarefas-Desc"
                    )}
                    linkSite="https://lista-de-tarefas-zeta-ivory.vercel.app"
                    linkRepo="https://github.com/rickreisdev/ListaDeTarefas"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    imagem={imc}
                    titulo={t("boxProjetos-IMC-title")}
                    descricao={t("boxProjetos-IMC-Desc")}
                    linkSite="https://rickreisdev.github.io/CalculaIMC/"
                    linkRepo="https://github.com/rickreisdev/CalculaIMC"
                    tecnologias="HTML - CSS - Javascript"
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

export default Projetos;
