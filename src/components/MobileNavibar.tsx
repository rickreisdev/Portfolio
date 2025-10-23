import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../assets/styles/header.scss";
import "../assets/styles/mobile-menu.scss";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LogoAnimated from "./Logo";

const MobileNavbar: React.FC = () => {
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const paginasRef = useRef<HTMLUListElement>(null);

    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        const handleClick = () => {
            if (
                paginasRef.current &&
                mobileMenuRef.current
            ) {
                paginasRef.current.classList.toggle(
                    "active"
                );
                mobileMenuRef.current.classList.toggle(
                    "active"
                );
                animateLinks();
            }
        };

        const animateLinks = () => {
            if (paginasRef.current) {
                const navLinks =
                    paginasRef.current.querySelectorAll(
                        "li"
                    );
                navLinks.forEach((link, index) => {
                    link.style.animation
                        ? (link.style.animation = "")
                        : (link.style.animation = `paginasFade 0.5s ease forwards ${
                              index / 7 + 0.3
                          }s`);
                });
            }
        };

        if (mobileMenuRef.current) {
            mobileMenuRef.current.addEventListener(
                "click",
                handleClick
            );
        }

        const navLinks =
            paginasRef.current?.querySelectorAll("li");
        navLinks?.forEach((link) => {
            link.addEventListener("click", handleClick);
        });

        return () => {
            if (mobileMenuRef.current) {
                mobileMenuRef.current.removeEventListener(
                    "click",
                    handleClick
                );
            }
            navLinks?.forEach((link) => {
                link.removeEventListener(
                    "click",
                    handleClick
                );
            });
        };
    }, []);

    const {
        t,
        i18n: { changeLanguage, language },
    } = useTranslation();

    const handleChangeLanguage = () => {
        const newLanguage = language === "en" ? "pt" : "en";
        changeLanguage(newLanguage);
    };

    return (
        <nav className="menu">
            <div className="content">
                <LogoAnimated />

                <div
                    className="mobile-menu"
                    ref={mobileMenuRef}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {pathname === "/" && (
                    <ul
                        className="paginas"
                        ref={paginasRef}
                    >
                        <li>
                            <a href="/dev" id="link-pags" aria-label="Link para a página de Desenvolvimento">
                                <span>
                                    {t("header.headerOptionDev")}
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/audiovisual"
                                id="link-pags"
                                aria-label="Link para a página de Audiovisual"
                            >
                                <span>
                                    {t(
                                        "header.headerOptionAudiovisual"
                                    )}
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contato"
                                id="link-pags"
                                aria-label="Link para a seção de Contato"
                            >
                                <span>{t("header.contato")}</span>
                            </a>
                        </li>

                        <li>
                            <button
                                type="button"
                                className="btn-language"
                                id="link-pags"
                                onClick={
                                    handleChangeLanguage
                                }
                                title={t("language.lngBtnTitle")}
                                aria-label={t("language.lngBtnTitle")}
                            >
                                <span>
                                    {t("language.lngBtnLabel")}{" "}
                                    <IoLanguage className="icon-language" />
                                </span>
                            </button>
                        </li>
                    </ul>
                )}

                {pathname.startsWith("/dev") && (
                    <ul
                        className="paginas"
                        ref={paginasRef}
                    >
                        <li>
                            <a
                                href="/dev/sobre"
                                id="link-pags"
                                aria-label="Link para a página de Sobre"
                            >
                                <span>{t("header.sobre")}</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/dev/habilidades"
                                id="link-pags"
                                aria-label="Link para a página de Habilidades"
                            >
                                <span>
                                    {t("header.habilidades")}
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/dev/projetos"
                                id="link-pags"
                                aria-label="Link para a página de Projetos"
                            >
                                <span>{t("header.projetos")}</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contato"
                                id="link-pags"
                                aria-label="Link para a seção de Contato"
                            >
                                <span>{t("header.contato")}</span>
                            </a>
                        </li>

                        <li>
                            <button
                                type="button"
                                className="btn-language"
                                id="link-pags"
                                onClick={
                                    handleChangeLanguage
                                }
                                title={t("language.lngBtnTitle")}
                                aria-label={t("language.lngBtnTitle")}
                            >
                                <span>
                                    {t("language.lngBtnLabel")}{" "}
                                    <IoLanguage className="icon-language" />
                                </span>
                            </button>
                        </li>
                    </ul>
                )}

                {pathname.startsWith("/audiovisual") && (
                    <ul
                        className="paginas"
                        ref={paginasRef}
                    >
                        <li>
                            <a
                                href="/audiovisual/sobre"
                                id="link-pags"
                                aria-label="Link para a página de Sobre"
                            >
                                <span>{t("header.sobre")}</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/audiovisual/habilidades"
                                id="link-pags"
                                aria-label="Link para a página de Habilidades"
                            >
                                <span>
                                    {t("header.habilidades")}
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="/audiovisual/projetos"
                                id="link-pags"
                                aria-label="Link para a página de Projetos"
                            >
                                <span>{t("header.projetos")}</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contato"
                                id="link-pags"
                                aria-label="Link para a seção de Contato"
                            >
                                <span>{t("header.contato")}</span>
                            </a>
                        </li>

                        <li>
                            <button
                                type="button"
                                className="btn-language"
                                id="link-pags"
                                onClick={
                                    handleChangeLanguage
                                }
                                title={t("language.lngBtnTitle")}
                                aria-label={t("language.lngBtnTitle")}
                            >
                                <span>
                                    {t("language.lngBtnLabel")}{" "}
                                    <IoLanguage className="icon-language" />
                                </span>
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default MobileNavbar;
