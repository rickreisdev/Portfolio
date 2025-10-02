import "../../assets/styles/experiencia-formacao.scss";
import { FaGraduationCap } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import BoxFormacao from "../../components/BoxFormacao";
import { useTranslation } from "react-i18next";

const FormacaoAudiovisual = () => {
    const { t } = useTranslation();
    return (
        <div className="formacao">
            <h2 className="tituloxp">
                <span>{t("educacaoTitle")}</span>
            </h2>

            <BoxFormacao
                Icon={GrWorkshop}
                titulo={t("educacaoLabelWorkshopAv")}
                nomeCurso={t("educacaoCursoWorkshopAv")}
                data={t("educacaoDataWorkshopAv")}
                nomeEscola="AvMakers"
            />

            <BoxFormacao
                Icon={FaGraduationCap}
                titulo={t("educacaoLabelUSP")}
                nomeCurso={t("educacaoCursoUSP")}
                data={t("educacaoDataUSP")}
                nomeEscola={t("educacaoNomeUSP")}
            />

            <BoxFormacao
                Icon={FaGraduationCap}
                titulo={t("educacaoLabelFatec")}
                nomeCurso={t("educacaoCursoFatec")}
                data={t("educacaoDataFatec")}
                nomeEscola={t("educacaoNomeFatec")}
            />
        </div>
    );
};

export default FormacaoAudiovisual;
