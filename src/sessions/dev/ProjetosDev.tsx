import { useTranslation } from "react-i18next";

import "../../assets/styles/habilidades-projetos.scss";

import BoxProjeto from "../../components/BoxProjeto";
import japacasa from "../../assets/imagens/japacasa.png";
import crudEstudantes from "../../assets/imagens/crudEstudantes.png";
import eventos from "../../assets/imagens/eventos.png";
import budget from "../../assets/imagens/budget.png";
import notificador from "../../assets/imagens/notificador.png";
import portalServicos from "../../assets/imagens/portalservicos.png";
import epp from "../../assets/imagens/epp.png";
import pagamento from "../../assets/imagens/pagamento.png";
import gerSenhas from "../../assets/imagens/senha.png";
import tarefas from "../../assets/imagens/tarefas.png";
import imc from "../../assets/imagens/imc.png";
import insany from "../../assets/imagens/insany.png";
import portfolioLais from "../../assets/imagens/portfolioLais.png";

const ProjetosDev = () => {
    const { t } = useTranslation();
    const showAllProjects = false;

    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                &lt;
                <span>{t("projects.projectsTitle")}</span>
                /&gt;
            </h2>

            <h3>{t("projects.highlights")}</h3>

            <div className="destaque-projetos">
                <BoxProjeto
                    imagem={japacasa}
                    titulo="JapaCasa!"
                    descricao={t(
                        "projects.japaCasa.description"
                    )}
                    linkRepo="https://github.com/rickreisdev/JapaCasa"
                    linkSite="https://japacasa.vercel.app"
                    tecnologias="React - Bootstrap - SASS - API REST - Node.js - Express"
                />

                <BoxProjeto
                    imagem={insany}
                    titulo="InsanyShop"
                    descricao={t(
                        "projects.insanyEcommerce.description"
                    )}
                    linkRepo="https://github.com/rickreisdev/insanyshop"
                    linkSite="https://insanyshop.vercel.app"
                    tecnologias="NextJs - Typescript - Styled Components - API REST"
                />

                <BoxProjeto
                    imagem={portalServicos}
                    titulo={t(
                        "projects.portalServices.title"
                    )}
                    descricao={t(
                        "projects.portalServices.description"
                    )}
                    linkRepo="https://github.com/rickreisdev/PortalServicos"
                    tecnologias="React - Auth0 - API REST - SASS - Express"
                />
            </div>

            {showAllProjects && (
                <>
                    <h3>{t("projects.allProjects")}</h3>

                    <div className="projetos" id="projetos">
                        <BoxProjeto
                            imagem={portfolioLais}
                            titulo={t(
                                "projects.portfolioLais.title"
                            )}
                            descricao={t(
                                "projects.portfolioLais.description"
                            )}
                            linkSite="https://laisamoroso.com.br"
                            tecnologias="React - Typescript - Lovable - shadcn-ui - Tailwind"
                        />

                        <BoxProjeto
                            imagem={budget}
                            titulo="BudgetControl"
                            descricao={t(
                                "projects.budgetControl.description"
                            )}
                            linkRepo="https://github.com/rickreisdev/budget-smart-cycle"
                            linkSite="https://budget-smart-control.vercel.app/"
                            tecnologias="React - Typescript - Lovable - Supabase"
                        />

                        <BoxProjeto
                            imagem={eventos}
                            titulo="EventosBR"
                            descricao={t(
                                "projects.eventosBR.description"
                            )}
                            linkRepo="https://github.com/rickreisdev/vivid-event-scape"
                            linkSite="https://vivid-event-scape.vercel.app/"
                            tecnologias="React - Typescript - Lovable - Cursor - Supabase"
                        />

                        <BoxProjeto
                            imagem={crudEstudantes}
                            titulo={t(
                                "projects.crudStudents.title"
                            )}
                            descricao={t(
                                "projects.crudStudents.description"
                            )}
                            linkRepo="https://github.com/rickreisdev/CrudEstudantes"
                            linkSite="https://crudestudantes.onrender.com"
                            tecnologias="Vue.js - Node.js - Express - API REST - Bootstrap - Docker - PostgreSQL"
                        />

                        <BoxProjeto
                            imagem={notificador}
                            titulo={t(
                                "projects.notificationQueue.title"
                            )}
                            descricao={t(
                                "projects.notificationQueue.description"
                            )}
                            linkRepo="https://github.com/rickreisdev/notification-queue"
                            tecnologias="Angular - NestJs - RabbitMQ - Jest - Jasmine - Karma"
                        />

                        <BoxProjeto
                            imagem={epp}
                            titulo="E++"
                            descricao={t(
                                "projects.eppApp.description"
                            )}
                            linkRepo="https://github.com/rickreisdev/Epp"
                            tecnologias="Flutter - Firebase - Figma"
                        />

                        <BoxProjeto
                            imagem={pagamento}
                            titulo={t(
                                "projects.paymentPage.title"
                            )}
                            descricao={t(
                                "projects.paymentPage.description"
                            )}
                            linkSite="https://desafio-front-end-woovi.vercel.app"
                            linkRepo="https://github.com/rickreisdev/DesafioFrontEndWoovi"
                            tecnologias="React - MUI - CSS in TS - Typescript - Figma - Vitest"
                        />

                        <BoxProjeto
                            imagem={gerSenhas}
                            titulo={t(
                                "projects.passwordManager.title"
                            )}
                            descricao={t(
                                "projects.passwordManager.description"
                            )}
                            linkRepo="https://github.com/rickreisdev/GerenciadorSenhas"
                            tecnologias="React - Python - SASS - Javascript - Docker - PostgreSQL"
                        />

                        <BoxProjeto
                            imagem={tarefas}
                            titulo={t(
                                "projects.taskList.title"
                            )}
                            descricao={t(
                                "projects.taskList.description"
                            )}
                            linkSite="https://lista-de-tarefas-zeta-ivory.vercel.app"
                            linkRepo="https://github.com/rickreisdev/ListaDeTarefas"
                            tecnologias="HTML - CSS - Javascript"
                        />

                        <BoxProjeto
                            imagem={imc}
                            titulo={t(
                                "projects.calculateBMI.title"
                            )}
                            descricao={t(
                                "projects.calculateBMI.description"
                            )}
                            linkSite="https://rickreisdev.github.io/CalculaIMC/"
                            linkRepo="https://github.com/rickreisdev/CalculaIMC"
                            tecnologias="HTML - CSS - Javascript"
                        />

                        <BoxProjeto
                            titulo="ContactMVC"
                            descricao={t(
                                "projects.contactMVC.description"
                            )}
                            linkRepo="https://github.com/rickreisdev/ContactMVC"
                            tecnologias="ASP.NET - HTML - CSS - Javascript - Docker - PostgreSQL"
                        />
                    </div>
                </>
            )}

            <a
                className="btn5"
                href="https://github.com/rickreisdev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title={t("projects.githubBtnTitle")}
            >
                <h2>{t("projects.githubBtnLabel")}</h2>
            </a>
        </div>
    );
};

export default ProjetosDev;
