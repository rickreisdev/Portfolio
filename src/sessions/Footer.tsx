import React from "react";
import { useTranslation } from "react-i18next";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../assets/styles/footer.scss";
import LogoAnimated from "../components/Logo";

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
                            <LogoAnimated />
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