import "../assets/styles/intro-sobre.scss";
import imgIntro from "../assets/imagens/rick-sobre3.png";
import { useTranslation } from "react-i18next";

const Intro = () => {
    const {t} = useTranslation()
    
    return (
        <div className="intro" id="intro">
            <div className="saudacao">
                <h1>Rick Reis</h1>
                <p>{t('introLabel')}</p>
                <h5>{t('introDesc')}</h5>
            </div>

            <div className="imagem-intro">
                <img src={imgIntro}></img>
            </div>
        </div>
    );
};

export default Intro;
