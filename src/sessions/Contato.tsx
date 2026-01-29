import { useTranslation } from "react-i18next";
import "../assets/styles/contato.scss";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { useLocation } from "react-router-dom";

type RouteContext = |"home" | "dev" | "audiovisual";

type SocialLink = {
    id: string;
    icon: JSX.Element;
    url: string;
    color: string;
    alt: string;
    visibleOn: Exclude<RouteContext, null>[];
};

const Contato = () => {
    const { t } = useTranslation();

    const location = useLocation();
    const { pathname } = location;

    const whatsappMessage = pathname.startsWith("/dev")
        ? t("contact.whatsappMessage.default")
        : pathname.startsWith("/audiovisual")
        ? t("contact.whatsappMessage.audiovisual")
        : t("contact.whatsappMessage.default");

    const encodedMessage =
        encodeURIComponent(whatsappMessage);

    const socialLinks: SocialLink[] = [
        {
            id: "linkedin",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/ricksonreis/",
            color: "linkedin",
            alt: "LinkedIn",
            visibleOn: ["home", "dev", "audiovisual"],
        },
        {
            id: "whatsapp",
            icon: <FaWhatsapp />,
            url: `https://api.whatsapp.com/send/?phone=5516993943494&text=${encodedMessage}`,
            color: "whatsapp",
            alt: "Whatsapp",
            visibleOn: ["home", "dev", "audiovisual"],
        },
        {
            id: "instagram",
            icon: <FaInstagram />,
            url: "https://www.instagram.com/rickreisav/",
            color: "instagram",
            alt: "Instagram",
            visibleOn: ["home", "audiovisual"],
        },
        {
            id: "youtube",
            icon: <FaYoutube />,
            url: "https://www.youtube.com/RickReis10/",
            color: "youtube",
            alt: "YouTube",
            visibleOn: ["audiovisual"],
        },
        {
            id: "github",
            icon: <FaGithub />,
            url: "https://github.com/rickreisdev",
            color: "github",
            alt: "GitHub",
            visibleOn: ["dev"],
        },
    ];

    const context: RouteContext = pathname.startsWith(
        "/dev"
    )
        ? "dev"
        : pathname.startsWith("/audiovisual")
        ? "audiovisual"
        : "home";

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
                        {socialLinks
                            .filter(
                                (social) =>
                                    context &&
                                    social.visibleOn.includes(
                                        context
                                    )
                            )
                            .map((social) => (
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
