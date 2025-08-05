import { useState, useEffect } from "react";
import "../assets/styles/intro-sobre.scss";
import { useTranslation } from "react-i18next";

const Intro = () => {
    const { t } = useTranslation();
    const [typingText, setTypingText] = useState("");
    const [isTypingComplete, setIsTypingComplete] =
        useState(false);
    const fullText = t("introLabel");

    useEffect(() => {
        setTypingText("");
        setIsTypingComplete(false);
    }, [fullText]);

    useEffect(() => {
        if (typingText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypingText(
                    fullText.slice(0, typingText.length + 1)
                );
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setIsTypingComplete(true);
        }
    }, [typingText, fullText]);

    return (
        <div className="intro" id="intro">
            <div className="saudacao">
                <div className="name-container">
                    <h1>
                        Rick{" "}
                        <span className="highlight">
                            Reis
                        </span>
                    </h1>
                    <div className="animated-underline"></div>
                </div>

                <div className="typing-container">
                    <p className="typing-text">
                        {typingText}
                    </p>
                    <span
                        className={`typing-cursor ${
                            isTypingComplete ? "blink" : ""
                        }`}
                    >
                        |
                    </span>
                </div>

                <h5
                    className={`fade-in ${
                        isTypingComplete ? "visible" : ""
                    }`}
                >
                    {t("introDesc")}
                </h5>
            </div>
        </div>
    );
};

export default Intro;
