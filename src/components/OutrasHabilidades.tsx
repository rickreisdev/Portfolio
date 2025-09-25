import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { FaPaintBrush, FaPlayCircle  } from "react-icons/fa";
import { LuLayout } from "react-icons/lu";
import { DiScrum } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";
import { RiTranslate2 } from "react-icons/ri";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { SiTaichigraphics } from "react-icons/si";

const OutrasHabilidades = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { pathname } = location;

    return (
        <div className="diferenciais">
            {pathname.startsWith("/dev") && (
                <div className="card">
                    <div className="card-body">
                        <RiTranslate2
                            className="card-icon"
                            id="english-icon"
                        />

                        <div className="card-titulo">
                            <h3>
                                {t("diferenciaisIngles")}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            {pathname.startsWith("/audiovisual") && (
                <div className="card">
                    <div className="card-body">
                        <LiaPhotoVideoSolid
                            className="card-icon"
                            id="video-icon"
                        />

                        <div className="card-titulo">
                            <h3>
                                {t("diferenciaisEdição")}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

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

            {pathname.startsWith("/dev") && (
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
            )}

            {pathname.startsWith("/dev") && (
                <div className="card">
                    <div className="card-body">
                        <DiScrum
                            className="card-icon"
                            id="scrum-icon"
                        />

                        <div className="card-titulo">
                            <h3>
                                {t("diferenciaisScrum")}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            {pathname.startsWith("/dev") && (
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
            )}

            {pathname.startsWith("/audiovisual") && (
                <div className="card">
                    <div className="card-body">
                        <FaPlayCircle
                            className="card-icon"
                            id="intro-icon"
                        />

                        <div className="card-titulo">
                            <h3>
                                {t("diferenciaisIntros")}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            {pathname.startsWith("/audiovisual") && (
                <div className="card">
                    <div className="card-body">
                        <SiTaichigraphics 
                            className="card-icon"
                            id="motion-icon"
                        />

                        <div className="card-titulo">
                            <h3>
                                {t("diferenciaisMotion")}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OutrasHabilidades;
