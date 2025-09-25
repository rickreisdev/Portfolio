import { useState, useEffect } from "react";
import "../assets/styles/intro-sobre.scss";

interface TypingIntroProps {
  typingText?: string;
  content: string;
}

const TypingIntro: React.FC<TypingIntroProps> = ({ typingText: fullText, content }) => {
  const [typingText, setTypingText] = useState<string>("");
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  useEffect(() => {
    setTypingText("");
    setIsTypingComplete(false);
  }, [fullText]);

  useEffect(() => {
    if (!fullText) {
      setIsTypingComplete(true);
      return;
    }

    if (typingText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(fullText.slice(0, typingText.length + 1));
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
            <span className="highlight">Reis</span>
          </h1>
          <div className="animated-underline"></div>
        </div>

        {fullText && (
          <div className="typing-container">
            <p className="typing-text">{typingText}</p>
            <span
              className={`typing-cursor ${isTypingComplete ? "blink" : ""}`}
            >
              |
            </span>
          </div>
        )}

        <h5 className={`fade-in ${isTypingComplete ? "visible" : ""}`}>
          {content}
        </h5>
      </div>
    </div>
  );
};

export default TypingIntro;