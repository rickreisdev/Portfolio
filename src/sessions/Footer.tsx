import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/footer.scss";
import logo from "../assets/imagens/logo-rickreis-white.png";

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="copyright">
                        <span className="year">{currentYear}</span>
                        <span className="brand-name">
                            <img src={logo} alt="logo rickreis" />
                        </span>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="made-with">
                        {t('footerLabel')} 
                        <span className="author-name">Rick Reis</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;