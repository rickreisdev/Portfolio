import React, { useRef, useEffect, useState } from "react";

import "../assets/styles/header.scss";
import "../assets/styles/mobile-menu.scss";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const MobileNavbar: React.FC = () => {
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const paginasRef = useRef<HTMLUListElement>(null);

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

    const [currentLanguage, setCurrentLanguage] =
        useState(language);

    const handleChangeLanguage = () => {
        const newLanguage =
            currentLanguage === "en" ? "pt" : "en";
        changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <nav className="menu">
            <div className="content">
                <a href="/" id="logo">
                    <span className="tag1">&lt; </span>
                    <span
                        className="text"
                        id="initial-text"
                    >
                        rr
                    </span>
                    <span
                        className="hidden-text"
                        id="final-text"
                    >
                        rickreis
                        <span className="hidden-text">
                            dev
                        </span>
                    </span>
                    <span className="tag2" id="close-tag">
                        /&gt;{" "}
                    </span>
                </a>

                <div
                    className="mobile-menu"
                    ref={mobileMenuRef}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <ul className="paginas" ref={paginasRef}>
                    <li>
                        <a href="/sobre" id="link-pags">
                            <span>
                                &lt;{t("sobre")}/&gt;
                            </span>
                        </a>
                    </li>

                    {/* <li>
            <a href="/experiencia" id='link-pags'>
              <span>&lt;Experiência/&gt;</span>
            </a>
          </li> */}

                    <li>
                        <a
                            href="/habilidades"
                            id="link-pags"
                        >
                            <span>
                                &lt;{t("habilidades")}/&gt;
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="/projetos" id="link-pags">
                            <span>
                                &lt;{t("projetos")}/&gt;
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#contato" id="link-pags">
                            <span>
                                &lt;{t("contato")}/&gt;
                            </span>
                        </a>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="btn-language"
                            id="link-pags"
                            onClick={handleChangeLanguage}
                            title={t("lngBtnTitle")}
                        >
                            <span>
                                {t("lngBtnLabel")}{" "}
                                <IoLanguage className="icon-language" />
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNavbar;
