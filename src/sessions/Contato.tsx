import { useTranslation } from "react-i18next";
import "../assets/styles/contato.scss";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { useLocation } from "react-router-dom";

const Contato = () => {
    const { t } = useTranslation();

    const location = useLocation();
    const { pathname } = location;

    const whatsappMessage = pathname.startsWith("/dev")
        ? "Olá! Vim do seu site e gostaria de saber mais sobre o seu trabalho como desenvolvedor!"
        : "Olá! Vim do seu site e gostaria de saber mais sobre o seu trabalho como editor de vídeos!";

    const encodedMessage =
        encodeURIComponent(whatsappMessage);

    const socialLinks = [
        {
            id: "github",
            icon: <FaGithub />,
            url: "https://github.com/rickreisdev",
            color: "github",
            alt: "GitHub",
        },
        {
            id: "linkedin",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/ricksonreis/",
            color: "linkedin",
            alt: "LinkedIn",
        },
        {
            id: "instagram",
            icon: <FaInstagram />,
            url: "https://www.instagram.com/rickreisme/",
            color: "instagram",
            alt: "Instagram",
        },
        {
            id: "whatsapp",
            icon: <FaWhatsapp />,
            url: `https://api.whatsapp.com/send/?phone=5516993943494&text=${encodedMessage}`,
            color: "whatsapp",
            alt: "Whatsapp",
        },
    ];

    return (
        <div className="contato" id="contato">
            <h2 className="title-animation">
                {pathname.startsWith("/dev") ? (
                    <>
                        &lt;
                        <span>{t("contact.title")}</span>
                        /&gt;
                    </>
                ) : (
                    <span>{t("contact.title")}</span>
                )}
            </h2>

            <div className="contato-container">
                <div className="content-contato">
                    <h3 className="estou fade-in">
                        {t("contact.desc")}
                    </h3>

                    <div
                        className="sociais sociais-animation"
                        aria-label="Links para redes sociais"
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-icon ${social.color}`}
                                aria-label={social.id}
                                title={social.alt}
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
