import { useTranslation } from "react-i18next";
import "../assets/styles/contato.scss";

import {
    FaGithub,
    FaLinkedin,
    FaBehanceSquare,
    FaInstagram,
} from "react-icons/fa";

const Contato = () => {

    const {t} = useTranslation()

    return (
        <div className="contato" id="contato">
            <h2>
                &#123;rickreisdev&#47;<span>{t('contatoTitle')}</span>&#125;
            </h2>

            <div className="colunaC">
                <div className="content-contato">
                    <h3 className="estou">
                    {t('contatoDesc')}
                    </h3>

                    <div className="sociais">
                        <a
                            href="https://github.com/rickreisdev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="gith">
                                {" "}
                                <FaGithub />{" "}
                            </i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ricksonreis/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="linkd">
                                {" "}
                                <FaLinkedin />{" "}
                            </i>
                        </a>

                        <a
                            href="https://www.instagram.com/rickreisme/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="insta">
                                <FaInstagram />
                            </i>
                        </a>

                        <a
                            href="https://www.behance.net/rickreis1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="beh">
                                {" "}
                                <FaBehanceSquare />{" "}
                            </i>
                        </a>
                    </div>
                </div>

                <div className="content-form">
                    <form
                        action="https://formspree.io/f/mvoyobkd"
                        method="POST"
                        className="form-contato"
                    >
                        <label>
                            <input
                                type="text"
                                name="nome"
                                required
                                placeholder={t('contatoNomePlacehoder')}
                            />
                        </label>

                        <label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email *"
                            />
                        </label>

                        <label>
                            <textarea
                                name="message"
                                placeholder={t('contatoMensagemPlacehoder')}
                                cols={30}
                                rows={10}
                                required
                            ></textarea>
                        </label>

                        <button type="submit">
                            <h4>{t('contatoBtnLabel')}</h4>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contato;
