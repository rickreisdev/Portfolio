import { useLocation } from "react-router-dom";
import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import {
    FaDocker,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaNodeJs,
    FaPhp,
} from "react-icons/fa";
import {
    SiMysql,
    SiAzuredevops,
    SiOracle,
    SiMicrosoftsqlserver,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbHttpGet } from "react-icons/tb";
import premiere from "../assets/SVGs/premiere-pro.svg";
import hitfilm from "../assets/SVGs/hitFilm.svg";
import photoshop from "../assets/SVGs/photoshop.svg";
import c4d from "../assets/SVGs/C4D.svg";
import figma from "../assets/SVGs/Figma.svg";

const Tecnologias = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            {pathname.startsWith("/dev") && (
                <div className="habilidades-wrapper">
                    <HabilidadeCard
                        id="HTML"
                        className="btn2"
                        Icon={FaHtml5}
                        nome="HTML"
                    />

                    <HabilidadeCard
                        id="CSS/SCSS"
                        className="btn2"
                        Icon={FaCss3Alt}
                        nome="CSS/SCSS"
                    />

                    <HabilidadeCard
                        id="JavaScript/TypeScript"
                        className="btn2"
                        Icon={FaJs}
                        nome="JS/TS"
                    />

                    <HabilidadeCard
                        id="React"
                        className="btn2"
                        Icon={FaReact}
                        nome="React"
                        title="React Router, React Hooks, Context API"
                    />

                    <HabilidadeCard
                        id="Next.js"
                        className="btn2"
                        Icon={RiNextjsFill}
                        nome="Next.js"
                    />

                    <HabilidadeCard
                        id="API"
                        className="btn2"
                        Icon={TbHttpGet}
                        nome="RESTful APIs"
                    />

                    <HabilidadeCard
                        id="Node.js"
                        className="btn2"
                        Icon={FaNodeJs}
                        nome="Node.js"
                    />

                    <HabilidadeCard
                        id="Git"
                        className="btn2"
                        Icon={FaGitAlt}
                        nome="Git/GitHub"
                    />

                    <HabilidadeCard
                        id="PHP"
                        className="btn2"
                        Icon={FaPhp}
                        nome="PHP"
                    />

                    <HabilidadeCard
                        id="PostgreSQL"
                        className="btn2"
                        Icon={BiLogoPostgresql}
                        nome="PostgreSQL"
                    />

                    <HabilidadeCard
                        id="MySQL"
                        className="btn2b"
                        Icon={SiMysql}
                        nome="MySQL"
                    />

                    <HabilidadeCard
                        id="Oracle"
                        className="btn2b"
                        Icon={SiOracle}
                        nome="Oracle DB"
                    />

                    <HabilidadeCard
                        id="SQL Server"
                        className="btn2b"
                        Icon={SiMicrosoftsqlserver}
                        nome="SQL Server"
                    />

                    <HabilidadeCard
                        id="Azure DevOps"
                        className="btn2b"
                        Icon={SiAzuredevops}
                        nome="Azure DevOps"
                    />

                    <HabilidadeCard
                        id="Docker"
                        className="btn2"
                        Icon={FaDocker}
                        nome="Docker"
                    />
                </div>
            )}

            {pathname.startsWith("/audiovisual") && (
                <div className="habilidades-wrapper">
                    <HabilidadeCard
                        id="Premiere"
                        className="btn2"
                        iconUrl={premiere}
                        nome="Premiere"
                        title="Adobe Premiere"
                    />

                    <HabilidadeCard
                        id="C4D"
                        className="btn2"
                        iconUrl={c4d}
                        nome="Cinema 4D"
                    />

                    <HabilidadeCard
                        id="Figma"
                        className="btn2"
                        iconUrl={figma}
                        nome="Figma"
                    />

                    <HabilidadeCard
                        id="Photoshop"
                        className="btn2"
                        iconUrl={photoshop}
                        nome="Photoshop"
                        title="Adobe Photoshop"
                    />

                    <HabilidadeCard
                        id="HitFilm"
                        className="btn2"
                        iconUrl={hitfilm}
                        nome="HitFilm (legacy)"
                    />
                </div>
            )}
        </>
    );
};

export default Tecnologias;
