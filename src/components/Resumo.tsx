import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface ResumoProps {
    resumoDesc1: string;
    resumoDesc2?: string;
    btnSobreLabel: string;
    btnProjetosLabel: string;
    showSkills?: boolean;
    showProjectsButton?: boolean;
    showAboutButton?: boolean;
    showModesButtons?: boolean;
}

const Resumo: React.FC<ResumoProps> = ({
    resumoDesc1,
    resumoDesc2,
    btnSobreLabel,
    btnProjetosLabel,
    showSkills = true,
    showProjectsButton = true,
    showAboutButton = true,
    showModesButtons = true,
}) => {
    const [hoveredButton, setHoveredButton] = useState<
        string | null
    >(null);

    const location = useLocation();
    const { pathname } = location;

    const { t } = useTranslation();

    // if(pathname.startsWith('/dev')){

    // }

    return (
        <div className="resumo-container">
            {showSkills && (
                <div className="tech-icons">
                    <div className="tech-icon react">
                        React
                    </div>
                    <div className="tech-icon html">
                        HTML
                    </div>
                    <div className="tech-icon css">
                        CSS/SCSS
                    </div>
                    <div className="tech-icon js">
                        JS/TS
                    </div>
                    <div className="tech-icon php">PHP</div>
                    <div className="tech-icon node">
                        Node
                    </div>
                </div>
            )}

            <div className="resumo-desc">
                <p className="paragraph-animate">
                    {resumoDesc1}
                </p>
                {resumoDesc2 && (
                    <p className="paragraph-animate delay-1">
                        {resumoDesc2}
                    </p>
                )}
            </div>

            <div className="resumo-btns">
                {showModesButtons && (
                    <a
                        href="/dev"
                        className={`resumo-btn-sobre ${
                            hoveredButton === "dev"
                                ? "hovered"
                                : ""
                        }`}
                        onMouseEnter={() =>
                            setHoveredButton("dev")
                        }
                        onMouseLeave={() =>
                            setHoveredButton(null)
                        }
                    >
                        <span className="btn-text">
                            {t("resumoBtnSobreDevLabel")}
                        </span>
                    </a>
                )}

                {showModesButtons && (
                    <a
                        href="/audiovisual"
                        className={`resumo-btn-sobre ${
                            hoveredButton === "audiovisual"
                                ? "hovered"
                                : ""
                        }`}
                        onMouseEnter={() =>
                            setHoveredButton("audiovisual")
                        }
                        onMouseLeave={() =>
                            setHoveredButton(null)
                        }
                    >
                        <span className="btn-text">
                            {t(
                                "resumoBtnSobreAudiovisualLabel"
                            )}
                        </span>
                    </a>
                )}

                {showAboutButton && !showModesButtons && (
                    <a
                        href={pathname.startsWith("/dev") ? "/dev/sobre" : "/audiovisual/sobre"}
                        className={`resumo-btn-sobre ${
                            hoveredButton === "sobre"
                                ? "hovered"
                                : ""
                        }`}
                        onMouseEnter={() =>
                            setHoveredButton("sobre")
                        }
                        onMouseLeave={() =>
                            setHoveredButton(null)
                        }
                    >
                        <span className="btn-text">
                            {btnSobreLabel}
                        </span>
                    </a>
                )}

                {showProjectsButton && (
                    <a
                        href={pathname.startsWith("/dev") ? "/dev/projetos" : "/audiovisual/projetos"}
                        className={`resumo-btn-projetos ${
                            hoveredButton === "projetos"
                                ? "hovered"
                                : ""
                        }`}
                        onMouseEnter={() =>
                            setHoveredButton("projetos")
                        }
                        onMouseLeave={() =>
                            setHoveredButton(null)
                        }
                    >
                        <span className="btn-text">
                            {btnProjetosLabel}
                        </span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Resumo;
