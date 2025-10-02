import "../../assets/styles/intro-sobre.scss";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Experiencia from "./ExperienciaDev";
import Formacao from "./FormacaoDev";
import { useTranslation } from "react-i18next";

const SobreDev = () => {
    const { t, i18n: language } = useTranslation();
    const currentLng = language.language;

    const urlCV = import.meta.env.VITE_DEV_CV_URL;
    const urlResume = import.meta.env.VITE_DEV_RESUME_URL;

    return (
        <div className="sobre-container" id="sobre">
            <motion.div
                className="sobre"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                <div className="sobre-titulo">
                    <h2 className="h2s">
                         &lt;<span>{t("sobreTitle")}</span>/&gt;
                    </h2>
                </div>

                <div className="paragrafo">
                    <p>{t("sobreDesc")}</p>

                    <p>{t("sobreDesc2")}</p>

                    <div className="btns-sobre">
                        <a
                            className="btn"
                            href={
                                currentLng === "pt"
                                    ? urlCV
                                    : urlResume
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RiExternalLinkFill className="link-icon" />
                            <h2>
                                {t(
                                    "sobreBtnLabelCurriculo"
                                )}
                            </h2>
                        </a>

                        <a
                            className="btn"
                            href="mailto:ricksonreisamoroso@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>
                                {t("sobreBtnLabelEmail")}
                            </h2>
                        </a>
                    </div>
                </div>
            </motion.div>

            <Experiencia />

            <Formacao />
        </div>
    );
};

export default SobreDev;
