import { useTranslation } from "react-i18next";

import "../assets/styles/habilidades-projetos.scss";

import BoxProjeto from "../components/BoxProjeto";
import japacasa from "../assets/imagens/japacasa.png";
import crudEstudantes from "../assets/imagens/crudEstudantes.png";
import eventos from "../assets/imagens/eventos.png";
import budget from "../assets/imagens/budget.png";
import notificador from "../assets/imagens/notificador.png";
import portalServicos from "../assets/imagens/portalservicos.png";
import epp from "../assets/imagens/epp.png";
import pagamento from "../assets/imagens/pagamento.png";
import gerSenhas from "../assets/imagens/senha.png";
import tarefas from "../assets/imagens/tarefas.png";
import imc from "../assets/imagens/imc.png";
import insany from "../assets/imagens/insany.png";

const Projetos = () => {
    const { t } = useTranslation();
    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                &lt;<span>{t("projetosTitle")}</span>/&gt;
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
                    imagem={insany}
                    titulo="InsanyShop"
                    descricao={t(
                        "boxProjetos-Insany-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/insanyshop"
                    linkSite="https://insanyshop.vercel.app"
                    tecnologias="NextJs - Typescript - Styled Components - API REST"
                />

                <BoxProjeto
                    imagem={eventos}
                    titulo="EventosBR"
                    descricao={t(
                        "boxProjetos-EventosBR-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/vivid-event-scape"
                    linkSite="https://vivid-event-scape.vercel.app/"
                    tecnologias="Vite React - Typescript - Lovable - Cursor - Supabase"
                />

                <BoxProjeto
                    imagem={budget}
                    titulo="BudgetControl"
                    descricao={t(
                        "boxProjetos-BudgetControl-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/budget-smart-cycle"
                    linkSite="https://budget-smart-control.vercel.app/"
                    tecnologias="Vite React - Typescript - Lovable - Supabase"
                />
            </div>

            <h3>{t("projetosTodos")}</h3>

            <div className="projetos" id="projetos">
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
                    imagem={notificador}
                    titulo={t(
                        "boxProjetos-Notificador-title"
                    )}
                    descricao={t(
                        "boxProjetos-Notificador-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/notification-queue"
                    tecnologias="Angular - NestJs - RabbitMQ - Jest - Jasmine - Karma"
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

                <BoxProjeto
                    titulo="ContactMVC"
                    descricao={t(
                        "boxProjetos-ContactMVC-Desc"
                    )}
                    linkRepo="https://github.com/rickreisdev/ContactMVC"
                    tecnologias="ASP.NET - HTML - CSS - Javascript - Docker - PostgreSQL"
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
