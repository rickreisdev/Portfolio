import { useTranslation } from "react-i18next";
import "../../assets/styles/experiencia-formacao.scss";
import BoxExperiencia from "../../components/BoxExperiencia";

const ExperienciaDev = () => {
    const { t } = useTranslation();
    return (
        <div className="experiencia">
            <h2 className="tituloxp">
                &lt;
                <span>{t("experience.careerTitle")}</span>
                /&gt;
            </h2>

            <BoxExperiencia
                titulo={t("experience.insany.title")}
                nomeEmpresa="Insany"
                data={t("experience.insany.date")}
                descricao={t(
                    "experience.insany.description"
                )}
                tecnologias={t(
                    "experience.insany.skills"
                )}
            />

            <BoxExperiencia
                titulo={t("experience.fairy.title")}
                nomeEmpresa="Fairy"
                data={t("experience.fairy.date")}
                descricao={t(
                    "experience.fairy.description"
                )}
                tecnologias={t(
                    "experience.fairy.skills"
                )}
            />

            <BoxExperiencia
                titulo={t("experience.conecta.title")}
                nomeEmpresa="Connect Direct"
                data={t("experience.conecta.date")}
                descricao={t(
                    "experience.conecta.description"
                )}
                tecnologias={t(
                    "experience.conecta.skills"
                )}
            />

            <BoxExperiencia
                titulo={t("experience.fatec.title")}
                nomeEmpresa="Faculdade de Tecnologia de Ribeirão Preto"
                data={t("experience.fatec.date")}
                descricao={t(
                    "experience.fatec.description"
                )}
                tecnologias={t(
                    "experience.fatec.skills"
                )}
            />
            <BoxExperiencia
                titulo={t("experience.brasilCenter.title")}
                nomeEmpresa="Brasil Center Comunicações"
                data={t("experience.brasilCenter.date")}
                descricao={t(
                    "experience.brasilCenter.skills"
                )}
                tecnologias={t(
                    "experience.brasilCenter.skills"
                )}
            />
        </div>
    );
};

export default ExperienciaDev;
