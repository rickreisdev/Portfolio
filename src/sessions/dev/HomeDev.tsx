import { useEffect, useRef, useState } from "react";
import Intro from "../../components/Intro";
import Resumo from "../../components/Resumo";
import "../../assets/styles/home.scss";
import { useTranslation } from "react-i18next";

const HomeDev = () => {
    const [isVisible, setIsVisible] = useState({
        intro: false,
        resumo: false,
    });

    const introRef = useRef<HTMLDivElement>(null);
    const resumoRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === introRef.current) {
                        setIsVisible((prev) => ({
                            ...prev,
                            intro: entry.isIntersecting,
                        }));
                    } else if (
                        entry.target === resumoRef.current
                    ) {
                        setIsVisible((prev) => ({
                            ...prev,
                            resumo: entry.isIntersecting,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (introRef.current)
            observer.observe(introRef.current);
        if (resumoRef.current)
            observer.observe(resumoRef.current);

        return () => {
            if (introRef.current)
                observer.unobserve(introRef.current);
            if (resumoRef.current)
                observer.unobserve(resumoRef.current);
        };
    }, []);

    return (
        <div className="home-container">
            <div
                ref={introRef}
                className={`fade-in-section ${
                    isVisible.intro ? "is-visible" : ""
                }`}
            >
                <Intro
                    typingText={t("introLabelDev")}
                    content={t("introDescDev")}
                />
            </div>
            <div
                ref={resumoRef}
                className={`fade-in-section ${
                    isVisible.resumo ? "is-visible" : ""
                }`}
            >
                <Resumo
                    resumoDesc1={t("resumoDescDev1")}
                    resumoDesc2={t("resumoDescDev2")}
                    btnSobreLabel={t("resumoBtnSobreLabel")}
                    btnProjetosLabel={t("resumoBtnProjetosLabel")}
                    showSkills={true}
                    showProjectsButton={true}
                    showAboutButton={true}
                    showModesButtons={false}
                />
            </div>
        </div>
    );
};

export default HomeDev;
