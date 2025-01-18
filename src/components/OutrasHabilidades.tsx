import { FaPaintBrush } from "react-icons/fa";
import { LuLayout } from "react-icons/lu";
import { DiScrum } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";
import { RiTranslate2 } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const OutrasHabilidades = () => {
    const { t } = useTranslation();
    return (
        <div className="diferenciais">
            <div className="card">
                <div className="card-body">
                    <RiTranslate2
                        className="card-icon"
                        id="english-icon"
                    />

                    <div className="card-titulo">
                        <h3>{t("diferenciaisIngles")}</h3>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <FaPaintBrush
                        className="card-icon"
                        id="design-icon"
                    />

                    <div className="card-titulo">
                        <h3>{t("diferenciaisDesign")}</h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <LuLayout
                        className="card-icon"
                        id="ux-icon"
                    />

                    <div className="card-titulo">
                        <h3>{t("diferenciaisUIUX")}</h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <DiScrum
                        className="card-icon"
                        id="scrum-icon"
                    />

                    <div className="card-titulo">
                        <h3>{t("diferenciaisScrum")}</h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <AiFillOpenAI
                        className="card-icon"
                        id="ai-icon"
                    />

                    <div className="card-titulo">
                        <h3>{t("diferenciaisIA")}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutrasHabilidades;
