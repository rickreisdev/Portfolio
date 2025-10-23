import React from "react";
import "../assets/styles/modalImagem.scss";

interface ModalImagemProps {
    src: string;
    alt?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ModalImagem: React.FC<ModalImagemProps> = ({
    src,
    alt,
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;
    return (
        <div
            className="modal-imagem-overlay"
            onClick={onClose}
        >
            <div
                className="modal-imagem-content"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Imagem em modal"
            >
                <button
                    className="modal-imagem-close"
                    onClick={onClose}
                    aria-label="Fechar modal"
                >
                    &times;
                </button>
                <img
                    src={src}
                    alt={alt || "Imagem do projeto"}
                />
            </div>
        </div>
    );
};

export default ModalImagem;
