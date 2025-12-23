import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import {
    FaPython,
    FaBootstrap,
    FaVuejs,
    FaFigma,
} from "react-icons/fa";
import {
    SiAxios,
    SiI18Next,
    SiLaravel,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import MaterialUI from "../assets/imagens/materialUI.svg";

const Tecnologias2 = () => {
    return (
        <div className="habilidades-wrapper tecnology-2">
            <HabilidadeCard
                id="Axios"
                className="btn2"
                Icon={SiAxios}
                nome="Axios"
            />

            <HabilidadeCard
                id="Firebase"
                className="btn2b"
                Icon={IoLogoFirebase}
                nome="Firebase"
            />

            <HabilidadeCard
                id="Laravel"
                className="btn2"
                Icon={SiLaravel}
                nome="Laravel"
            />

            <HabilidadeCard
                id="i18n"
                className="btn2"
                Icon={SiI18Next}
                nome="i18n"
            />

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
                id="Python"
                className="btn2b"
                Icon={FaPython}
                nome="Python"
            />
        </div>
    );
};

export default Tecnologias2;
