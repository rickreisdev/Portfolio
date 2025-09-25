import React, { useState, useEffect } from "react";
import "../assets/styles/modalVideo.scss";
import { useTranslation } from "react-i18next";

interface ModalVideoProps {
    src: string;
    alt?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ModalVideo: React.FC<ModalVideoProps> = ({
    src,
    alt,
    isOpen,
    onClose,
}) => {
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) setLoading(true);
    }, [src, isOpen]);

    return (
        <div
            className={`modal-imagem-overlay ${
                isOpen ? "open" : "closed"
            }`}
            onClick={onClose}
        >
            <div
                className="modal-imagem-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-imagem-close"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div className="video-wrapper">
                    {loading && (
                        <div className="video-loading">
                            {t(
                                "boxProjetos-videoPlayer-Loading"
                            )}
                        </div>
                    )}

                    <iframe
                        key={src}
                        src={src}
                        title={alt || "Vídeo do projeto"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setLoading(false)}
                        style={
                            loading
                                ? { display: "none" }
                                : { display: "block" }
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalVideo;
