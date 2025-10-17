import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import {
    FaPython,
    FaBootstrap,
    FaVuejs,
} from "react-icons/fa";
import {
    SiFlutter,
    SiOracle,
    SiMicrosoftsqlserver,
    SiAxios,
    SiAzuredevops
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import MaterialUI from "../assets/imagens/materialUI.svg";

const Tecnologias2 = () => {
    return (
        <div className="habilidades">
            <HabilidadeCard
                id="MaterialUI"
                className="btn2"
                iconUrl={MaterialUI}
                nome="MaterialUI"
            />

            <HabilidadeCard
                id="Axios"
                className="btn2"
                Icon={SiAxios}
                nome="Axios"
            />

            <HabilidadeCard
                id="Vue.js"
                className="btn2b"
                Icon={FaVuejs}
                nome="Vue.js"
            />

            <HabilidadeCard
                id="Bootstrap"
                className="btn2"
                Icon={FaBootstrap}
                nome="Bootstrap"
            />

            <HabilidadeCard
                id="Azure DevOps"
                className="btn2b"
                Icon={SiAzuredevops}
                nome="Azure DevOps"
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
                id="SQL Server"
                className="btn2b"
                Icon={SiMicrosoftsqlserver}
                nome="SQL Server"
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
        </div>
    );
};

export default Tecnologias2;
