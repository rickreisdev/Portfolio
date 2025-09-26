import "../assets/styles/habilidades-projetos.scss";
import { useState } from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ModalVideo from "./ModalVideo";
import { youtubeToEmbed } from "../utils/helpers";

interface BoxProjetoProps {
    imagem?: string;
    videoUrl?: string;
    titulo: string;
    descricao: string;
    linkVideo?: string;
    tecnologias: string;
}

const BoxProjetoAudiovisual: React.FC<BoxProjetoProps> = ({
    imagem,
    videoUrl,
    titulo,
    descricao,
    linkVideo,
    tecnologias,
}) => {
    const { i18n: language } = useTranslation();
    const currentLng = language.language;
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <motion.div
                className="box-projeto"
                title={titulo}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
                viewport={{ once: true }}
            >
                {imagem && (
                    <div className="img-projeto">
                        <img
                            src={imagem}
                            alt={`${titulo} logo`}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                setModalOpen(true)
                            }
                        />
                        {videoUrl && (
                            <span className="play-icon-overlay">
                                &#9658;
                            </span>
                        )}
                    </div>
                )}

                <div className="detalhes-projeto">
                    <h2 className="nome-projeto">
                        {titulo}
                    </h2>
                    <p>{descricao}</p>
                    <div className="btns-projeto">
                        {linkVideo && (
                            <a
                                className="btn-link-site"
                                href={videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiExternalLinkFill className="link-icon" />
                                {currentLng !== "pt"
                                    ? "Watch Video"
                                    : "Ver Vídeo"}
                            </a>
                        )}
                    </div>
                    <h4>{tecnologias}</h4>
                </div>
            </motion.div>
            {videoUrl && (
                <ModalVideo
                    src={youtubeToEmbed(videoUrl)}
                    alt={`${titulo} thumbnail`}
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </>
    );
};

export default BoxProjetoAudiovisual;
