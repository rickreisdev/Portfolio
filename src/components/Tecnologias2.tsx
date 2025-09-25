import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import { FaPython, FaFigma } from "react-icons/fa";
import {
    SiFlutter,
    SiOracle,
    SiMicrosoftsqlserver,
    SiCplusplus,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import MaterialUI from "../assets/imagens/materialUI.svg";

const Tecnologias2 = () => {
    return (
        <div className="habilidades">
            <HabilidadeCard
                id="Figma"
                className="btn2b"
                Icon={FaFigma}
                nome="Figma"
            />

            <HabilidadeCard
                id="MaterialUI"
                className="btn2"
                iconUrl={MaterialUI}
                nome="MaterialUI"
            />

            <HabilidadeCard
                id="Flutter"
                className="btn2b"
                Icon={SiFlutter}
                nome="Flutter"
            />

            <HabilidadeCard
                id="Firebase"
                className="btn2b"
                Icon={IoLogoFirebase}
                nome="Firebase"
            />

            <HabilidadeCard
                id="Python"
                className="btn2b"
                Icon={FaPython}
                nome="Python"
            />

            <HabilidadeCard
                id="Oracle"
                className="btn2b"
                Icon={SiOracle}
                nome="Oracle DB"
            />

            <HabilidadeCard
                id="C++"
                className="btn2b"
                Icon={SiCplusplus}
                nome="C++"
            />

            <HabilidadeCard
                id="SQL Server"
                className="btn2b"
                Icon={SiMicrosoftsqlserver}
                nome="SQL Server"
            />
        </div>
    );
};

export default Tecnologias2;
