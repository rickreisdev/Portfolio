import "../assets/styles/habilidades-projetos.scss";
import ModalImagem from "./ModalImagem";
import { useState } from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface BoxProjetoProps {
    imagem?: string;
    titulo: string;
    descricao: string;
    linkSite?: string;
    linkRepo?: string;
    tecnologias: string;
}

const BoxProjeto: React.FC<BoxProjetoProps> = ({
    imagem,
    titulo,
    descricao,
    linkSite,
    linkRepo,
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
                    </div>
                )}

                <div className="detalhes-projeto">
                    <h2 className="nome-projeto">
                        {titulo}
                    </h2>
                    <p>{descricao}</p>
                    <div className="btns-projeto">
                        {linkSite && (
                            <a
                                className="btn-link-site"
                                href={linkSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={
                                    currentLng !== "pt"
                                        ? "Visit page"
                                        : "Visitar site"
                                }
                            >
                                <RiExternalLinkFill className="link-icon" />
                                Site
                            </a>
                        )}

                        {linkRepo && (
                            <a
                                className="btn-link-git"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={linkRepo}
                                title={
                                    currentLng !== "pt"
                                        ? "See repository"
                                        : "Ver repositório"
                                }
                            >
                                <RiExternalLinkFill className="link-icon" />
                                {currentLng !== "pt"
                                    ? "Repository"
                                    : "Repositório"}
                            </a>
                        )}
                    </div>
                    <h4>{tecnologias}</h4>
                </div>
            </motion.div>
            {imagem && (
                <ModalImagem
                    src={imagem}
                    alt={`${titulo} logo`}
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </>
    );
};

export default BoxProjeto;
