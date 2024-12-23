import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "../assets/styles/btnTopo.scss";

const BtnTopo: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            className="btnTopo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
                isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3 }}
        >
            <FaArrowUp
                className="btnTopo-icon"
            />
        </motion.button>
    );
};

export default BtnTopo;
