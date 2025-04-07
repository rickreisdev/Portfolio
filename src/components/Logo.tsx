import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const frameModules = import.meta.glob(
    "../assets/SVGs/LogoFrames/frame*.svg",
    {
        eager: true,
        import: "default",
    }
);

const sortedFrames = Object.entries(frameModules)
    .sort(([a], [b]) => {
        const getNumber = (filename: string) =>
            Number(
                filename.match(/frame(\d+)\.svg$/)?.[1] || 0
            );
        return getNumber(a) - getNumber(b);
    })
    .map(([, path]) => path as string);

const LogoAnimated = () => {
    const [index, setIndex] = useState(
        sortedFrames.length - 1
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const location = useLocation();

    const startAnimation = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        let i = 0;
        const interval = setInterval(() => {
            setIndex(i);
            i++;
            if (i >= sortedFrames.length) {
                clearInterval(interval);
                setIsAnimating(false);
            }
        }, 60);
    };

    useEffect(() => {
        startAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <a href="/">
            <img
                src={sortedFrames[index]}
                alt="Logo animado"
                style={{
                    objectFit: "contain",
                    cursor: "pointer",
                }}
                onMouseEnter={startAnimation}
                className="portfolio-logo"
            />
        </a>
    );
};

export default LogoAnimated;
