import "../assets/styles/intro-sobre.scss";
import { RiExternalLinkFill } from "react-icons/ri";

const Sobre = () => {
    return (
        <div className="sobre-container" id="sobre">
            <div className="sobre">
                <div className="sobre-titulo">
                    <h2 className="h2s">
                        &#123;rickreisme&#47;<span>sobre</span>&#125;
                    </h2>
                </div>

                <div className="paragrafo">
                    <p>
                        Sempre fui muito curioso e apaixonado por
                        tecnologia e inovações. Tive o meu primeiro
                        contato com linguagens de programação em um
                        curso que fiz aos 13/14 anos, que foi a mesma
                        época em que eu me apaixonei também por
                        design. Mas foi quando eu entrei para o curso
                        de Análise e Desenvolvimento de Sistemas na
                        Faculdade de Tecnologia de Ribeirão Preto, que
                        eu me encontrei de vez nesse mundo da
                        programação e defini que era isso o que eu
                        queria para a minha vida. Me considero uma
                        pessoa com facilidade para resolver problemas
                        e um aprendiz rápido que está constantemente
                        buscando se aprimorar.
                    </p>

                    <p>
                        Hoje, já graduado acumulo conhecimento e
                        experiência em desenvolvimento, tendo
                        habilidades sólidas em React,
                        HTML/CSS/JavaScript, Sass, TypeScript e
                        Node.js somadas a um conhecimento relevante em
                        SQL, Flutter, Docker, API REST, Bootstrap,
                        Firebase entre outras tecnologias. <br />
                        Te convido a conhecer, aqui no meu portfólio,
                        um pouco mais da minha experiência e
                        habilidades.
                    </p>

                    <div className="btns-sobre">
                        <a
                            className="btn"
                            href="https://drive.google.com/file/d/1JqwzlRzxOmRHyj4rFPqQ4ceiSdLMRNB5/view?usp=sharing"
                            target="_blank"
                        >
                            <RiExternalLinkFill className="link-icon" />
                            <h2>Meu currículo</h2>
                        </a>

                        <a
                            className="btn"
                            href="mailto:ricksonreisamoroso@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h2>Enviar e-mail</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
