import { useTranslation } from "react-i18next";
import "../assets/styles/contato.scss";

import {
    FaGithub,
    FaLinkedin,
    FaBehanceSquare,
    FaInstagram,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Contato = () => {
    const { t } = useTranslation();

    const socialLinks = [
        {
            id: "github",
            icon: <FaGithub />,
            url: "https://github.com/rickreisdev",
            color: "github",
        },
        {
            id: "linkedin",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/ricksonreis/",
            color: "linkedin",
        },
        {
            id: "instagram",
            icon: <FaInstagram />,
            url: "https://www.instagram.com/rickreisme/",
            color: "instagram",
        },
        {
            id: "behance",
            icon: <FaBehanceSquare />,
            url: "https://www.behance.net/rickreis1",
            color: "behance",
        },
    ];

    return (
        <div className="contato" id="contato">
            <h2 className="title-animation">
                &lt;<span>{t("contatoTitle")}</span>/&gt;
            </h2>

            <div className="contato-container">
                <div className="content-contato">
                    <h3 className="estou fade-in">
                        {t("contatoDesc")}
                    </h3>

                    <div className="sociais sociais-animation">
                        {socialLinks.map((social) => (
                            <a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-icon ${social.color}`}
                                aria-label={social.id}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contato;
