import "../assets/styles/experiencia-formacao.scss";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface BoxExperienciaProps {
    titulo: string;
    nomeEmpresa: string;
    data: string;
    descricao: string;
    linkEmpresa?: string;
    tecnologias: string;
}

const BoxExperiencia: React.FC<BoxExperienciaProps> = ({
    titulo,
    nomeEmpresa,
    data,
    descricao,
    linkEmpresa,
    tecnologias,
}) => {
    const { i18n: language } = useTranslation();
    const currentLng = language.language;

    return (
        <motion.div
            className="box-experiencia"
            title={titulo}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
        >
            <div className="detalhes-experiencia">
                {" "}
                <h2 className="nome-experiencia">
                    {titulo}
                </h2>
                <h3>{nomeEmpresa}</h3>
                <h4>{data}</h4>
                <p>{descricao}</p>
                <div className="btns-experiencia">
                    {linkEmpresa && (
                        <a
                            className="btn-link-site"
                            href={linkEmpresa}
                            target="_blank"
                            title={
                                currentLng === 'pt'
                                    ? "Visit site"
                                    : "Visitar site"
                            }
                        >
                            <RiExternalLinkFill className="link-icon" />
                            {currentLng === 'pt' ? "Site da empresa" : "Company's website"}
                        </a>
                    )}
                </div>
                <h4>{tecnologias}</h4>
            </div>
        </motion.div>
    );
};

export default BoxExperiencia;
