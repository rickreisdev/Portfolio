import { useTranslation } from "react-i18next";
import { useState, FormEvent, ChangeEvent } from "react";
import "../assets/styles/contato.scss";

import {
    FaGithub,
    FaLinkedin,
    FaBehanceSquare,
    FaInstagram,
} from "react-icons/fa";
import {
    FiSend,
    FiUser,
    FiMail,
    FiMessageSquare,
} from "react-icons/fi";

interface FormData {
    nome: string;
    email: string;
    message: string;
}

interface FormStatus {
    submitted: boolean;
    loading: boolean;
    error: boolean;
}

const Contato = () => {
    const { t } = useTranslation();
    const [formStatus, setFormStatus] =
        useState<FormStatus>({
            submitted: false,
            loading: false,
            error: false,
        });
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        email: "",
        message: "",
    });

    const handleInputChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const url = import.meta.env.VITE_FORMSPREE_URL;

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setFormStatus({
            submitted: false,
            loading: true,
            error: false,
        });

        try {
            const response = await fetch(url, {
                method: "POST",
                body: new FormData(e.currentTarget),
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setFormStatus({
                    submitted: true,
                    loading: false,
                    error: false,
                });
                setFormData({
                    nome: "",
                    email: "",
                    message: "",
                });
            } else {
                setFormStatus({
                    submitted: false,
                    loading: false,
                    error: true,
                });
            }
        } catch (error) {
            setFormStatus({
                submitted: false,
                loading: false,
                error: true,
            });
        }
    };

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

                <div className="content-form">
                    {formStatus.submitted ? (
                        <div className="success-message">
                            <h3>
                                {t("contatoEnviado") ||
                                    "Mensagem enviada com sucesso!"}
                            </h3>
                            <button
                                onClick={() =>
                                    setFormStatus({
                                        submitted: false,
                                        loading: false,
                                        error: false,
                                    })
                                }
                                className="nova-mensagem"
                            >
                                <span className="btn-text">
                                    {t(
                                        "contatoNovaMensagem"
                                    ) ||
                                        "Enviar nova mensagem"}
                                </span>
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="form-contato"
                            method="POST"
                        >
                            <div className="form-group">
                                <label className="input-container">
                                    <FiUser className="input-icon" />
                                    <input
                                        type="text"
                                        name="nome"
                                        value={
                                            formData.nome
                                        }
                                        onChange={
                                            handleInputChange
                                        }
                                        required
                                        placeholder={t(
                                            "contatoNomePlacehoder"
                                        )}
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label className="input-container">
                                    <FiMail className="input-icon" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={
                                            formData.email
                                        }
                                        onChange={
                                            handleInputChange
                                        }
                                        required
                                        placeholder="Email *"
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label className="input-container">
                                    <FiMessageSquare className="input-icon textarea-icon" />
                                    <textarea
                                        name="message"
                                        value={
                                            formData.message
                                        }
                                        onChange={
                                            handleInputChange
                                        }
                                        placeholder={t(
                                            "contatoMensagemPlacehoder"
                                        )}
                                        cols={30}
                                        rows={10}
                                        required
                                    ></textarea>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className={
                                    formStatus.loading
                                        ? "loading"
                                        : ""
                                }
                                disabled={
                                    formStatus.loading
                                }
                            >
                                <FiSend className="send-icon" />
                                <h4>
                                    {formStatus.loading
                                        ? t(
                                              "contatoEnviando"
                                          ) || "Enviando..."
                                        : t(
                                              "contatoBtnLabel"
                                          )}
                                </h4>
                            </button>

                            {formStatus.error && (
                                <p className="error-message">
                                    {t("contatoErro") ||
                                        "Ocorreu um erro. Tente novamente."}
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contato;
