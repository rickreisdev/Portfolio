import "../assets/styles/experiencia-formacao.scss";
import { FaGraduationCap } from "react-icons/fa";
import BoxFormacao from "../components/BoxFormacao";
import { useTranslation } from "react-i18next";

const Formacao = () => {
    const { t } = useTranslation();
    return (
        <div className="formacao">
            <h2 className="tituloxp">
                &#123;rickreis&#47;
                <span>{t('educacaoTitle')}</span>&#125;
            </h2>

            <BoxFormacao
                Icon={FaGraduationCap}
                titulo={t('educacaoLabelUSP')}
                nomeCurso={t('educacaoCursoUSP')}
                data={t('educacaoDataUSP')}
                nomeEscola={t('educacaoNomeUSP')}
            />

            <BoxFormacao
                Icon={FaGraduationCap}
                titulo={t('educacaoLabelFatec')}
                nomeCurso={t('educacaoCursoFatec')}
                data={t('educacaoDataFatec')}
                nomeEscola={t('educacaoNomeFatec')}
            />
        </div>
    );
};

export default Formacao;
