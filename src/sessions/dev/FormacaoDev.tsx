import "../../assets/styles/experiencia-formacao.scss";
import { FaGraduationCap } from "react-icons/fa";
import BoxFormacao from "../../components/BoxFormacao";
import { useTranslation } from "react-i18next";

const FormacaoDev = () => {
    const { t } = useTranslation();
    return (
        <div className="formacao">
            <h2 className="tituloxp">
                &lt;<span>{t("education.educationTitle")}</span>/&gt;
            </h2>

            <BoxFormacao
                Icon={FaGraduationCap}
                titulo={t("education.mbaUSP.label")}
                nomeCurso={t("education.mbaUSP.course")}
                data={t("education.mbaUSP.date")}
                nomeEscola={t("education.mbaUSP.institution")}
            />

            <BoxFormacao
                Icon={FaGraduationCap}
                titulo={t("education.fatec.label")}
                nomeCurso={t("education.fatec.course")}
                data={t("education.fatec.date")}
                nomeEscola={t("education.fatec.institution")}
            />
        </div>
    );
};

export default FormacaoDev;
