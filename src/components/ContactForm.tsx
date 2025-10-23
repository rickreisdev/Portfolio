import { useState, FormEvent, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

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

const ContactForm = () => {
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

    return (
        <div className="content-form" aria-label="Formulário de contato">
            {formStatus.submitted ? (
                <div className="success-message">
                    <h3>
                        {t("contact.successMessage") ||
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
                            {t("contact.newMessage") ||
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
                                value={formData.nome}
                                onChange={handleInputChange}
                                required
                                placeholder={t(
                                    "contact.namePlaceholder"
                                )}
                                aria-label={t("contact.namePlaceholder")}
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="input-container">
                            <FiMail className="input-icon" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Email *"
                                aria-label={t("contact.emailPlaceholder") || "Email"}
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="input-container">
                            <FiMessageSquare className="input-icon textarea-icon" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={t(
                                    "contact.messagePlaceholder"
                                )}
                                cols={30}
                                rows={10}
                                required
                                aria-label={t("contact.messagePlaceholder")}
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
                        disabled={formStatus.loading}
                    >
                        <FiSend className="send-icon" />
                        <h4>
                            {formStatus.loading
                                ? t("contact.sending") ||
                                  "Sending..."
                                : t("contact.btnLabel")}
                        </h4>
                    </button>

                    {formStatus.error && (
                        <p className="error-message">
                            {t("contact.error") ||
                                "Ocorreu um erro. Tente novamente."}
                        </p>
                    )}
                </form>
            )}
        </div>
    );
};

export default ContactForm;
