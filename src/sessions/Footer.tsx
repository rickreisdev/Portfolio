import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
                            {/* <span className="tag-open">&lt;</span>
                            rickreis
                            <span className="accent">dev</span>
                            <span className="tag-close">/&gt;</span> */}
                            <LogoAnimated />
                        </span>
                    </div>
                </div>

                <div className="footer-center">
                    <div className="made-with">
                        {t('footerLabel')} 
                        <span className="author-name">Rick Reis</span>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="social-links">
                        <a 
                            href="https://github.com/rickreisdev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="social-link"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://linkedin.com/in/ricksonreis" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="social-link"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;