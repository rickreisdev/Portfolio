import React, { useState, useEffect } from "react";
import "../assets/styles/modalVideo.scss";
import { useTranslation } from "react-i18next";

interface ModalVideoProps {
    src: string;
    alt?: string;
    isOpen: boolean;
    isVertical: boolean;
    onClose: () => void;
}

const ModalVideo: React.FC<ModalVideoProps> = ({
    src,
    alt,
    isOpen,
    isVertical,
    onClose,
}) => {
    const [loading, setLoading] = useState(true);
    const [iframeKey, setIframeKey] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            setLoading(true);
            setIframeKey((prev) => prev + 1);
        }
    }, [isOpen, src]);

    if (!isOpen) return null;

    return (
        <div
            className="modal-imagem-overlay"
            onClick={onClose}
        >
            <div
                className="modal-imagem-content"
                onClick={(e) => e.stopPropagation()}
            >
                {!loading && (
                    <button
                        className="modal-imagem-close"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                )}

                <div
                    className={`video-wrapper ${
                        isVertical
                            ? "vertical"
                            : "horizontal"
                    }`}
                >
                    {loading && (
                        <div className="video-loading">
                            <div className="spinner" />
                            <span>
                                {t(
                                    "projects.videoPlayerLoading"
                                )}
                            </span>
                        </div>
                    )}

                    <iframe
                        key={iframeKey}
                        src={src}
                        title={
                            alt ||
                            t("modalVideo-iframe-title")
                        }
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
