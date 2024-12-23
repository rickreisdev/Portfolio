import "../assets/styles/experiencia-formacao.scss";
import { FaGraduationCap } from "react-icons/fa";
import BoxFormacao from "../components/BoxFormacao";
import { useTranslation } from "react-i18next";

const Formacao = () => {
    const { t } = useTranslation();
    return (
        <div className="formacao">
            <h2 className="tituloxp">
                &#123;rickreisdev&#47;
                <span>{t('educacaoTitle')}</span>&#125;
            </h2>

            <BoxFormacao
                Icon={FaGraduationCap}
                titulo={t('educacaoLabel')}
                nomeCurso={t('educacaoCurso')}
                data={t('educacaoData')}
                nomeEscola="Faculdade de Tecnologia de Ribeirão Preto - Fatec"
            />
        </div>
    );
};

export default Formacao;
