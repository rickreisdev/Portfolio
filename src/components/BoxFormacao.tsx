import "../assets/styles/experiencia-formacao.scss";
import { motion } from "framer-motion";

interface BoxFormacaoProps {
    Icon?: React.ElementType;
    titulo: string;
    nomeCurso: string;
    nomeEscola: string;
    data: string;
}

const BoxFormacao: React.FC<BoxFormacaoProps> = ({
    Icon,
    titulo,
    nomeCurso,
    nomeEscola,
    data,
}) => {
    return (
        <motion.div
            className="box-formacao"
            title={nomeCurso}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
        >
            {Icon && (
                <i>
                    <Icon />
                </i>
            )}

            <div className="detalhes-formacao">
                {" "}
                <h2 className="nome-formacao">{titulo}</h2>
                <h3>{nomeCurso}</h3>
                <h4>{data}</h4>
                <h5>{nomeEscola}</h5>
            </div>
        </motion.div>
    );
};

export default BoxFormacao;
