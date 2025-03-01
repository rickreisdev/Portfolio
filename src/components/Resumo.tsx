import { useState } from "react";
import { useTranslation } from "react-i18next";

const Resumo = () => {
    const { t } = useTranslation();
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    
    return (
        <div className="resumo-container">
            <div className="tech-icons">
                <div className="tech-icon react">React</div>
                <div className="tech-icon html">HTML</div>
                <div className="tech-icon css">CSS/SCSS</div>
                <div className="tech-icon js">JS/TS</div>
                <div className="tech-icon php">PHP</div>
                <div className="tech-icon node">Node</div>
            </div>
            
            <div className="resumo-desc">
                <p className="paragraph-animate">
                    {t('resumoDesc1')}
                </p>

                <p className="paragraph-animate delay-1">
                    {t('resumoDesc2')}
                </p>
            </div>

            <div className="resumo-btns">
                <a
                    href="/sobre"
                    className={`resumo-btn-sobre ${hoveredButton === 'sobre' ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredButton('sobre')}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    <span className="btn-text">{t('resumoBtnSobreLabel')}</span>
                    <span className="btn-icon">→</span>
                </a>

                <a
                    href="/projetos"
                    className={`resumo-btn-projetos ${hoveredButton === 'projetos' ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredButton('projetos')}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    <span className="btn-text">{t('resumoBtnProjetosLabel')}</span>
                    <span className="btn-icon">→</span>
                </a>
            </div>
        </div>
    );
};

export default Resumo;