import { useTranslation } from "react-i18next";

const Resumo = () => {
  const {t} = useTranslation()
    return (
        <div className="resumo-container">
            <div className="resumo-desc">
                <p>
                {t('resumoDesc1')}
                </p>

                <p>
                {t('resumoDesc2')}
                </p>
            </div>

            <div className="resumo-btns">
                <a
                    href="/sobre"
                    className="resumo-btn-sobre"
                >
                    {t('resumoBtnSobreLabel')}
                </a>

                <a
                    href="/projetos"
                    className="resumo-btn-projetos"
                >
                    {t('resumoBtnProjetosLabel')}
                </a>
            </div>
        </div>
    );
};

export default Resumo;
