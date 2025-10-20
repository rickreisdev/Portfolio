import "../../assets/styles/intro-sobre.scss";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ExperienciaAudiovisual from "./ExperienciaAudiovisual";
import FormacaoAudiovisual from "./FormacaoAudiovisual";

const SobreAudiovisual = () => {
    const { t, i18n: language } = useTranslation();
    const currentLng = language.language;

    const urlCV = import.meta.env.VITE_AV_CV_URL;
    const urlResume = import.meta.env.VITE_AV_RESUME_URL;

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
                        <span>{t("about.sobreTitle")}</span>
                    </h2>
                </div>

                <div className="paragrafo">
                    <p>{t("about.sobreDescAudiovisual1")}</p>

                    <p>{t("about.sobreDescAudiovisual2")}</p>

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
                                    "about.sobreBtnLabelCurriculo"
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
                                {t("about.sobreBtnLabelEmail")}
                            </h2>
                        </a>
                    </div>
                </div>
            </motion.div>

            <ExperienciaAudiovisual />

            <FormacaoAudiovisual />
        </div>
    );
};

export default SobreAudiovisual;
