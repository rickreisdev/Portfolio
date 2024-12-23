import { useTranslation } from "react-i18next";
import "../assets/styles/footer.scss"

const currentYear = new Date().getFullYear();

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer>
            <h3>{currentYear} <span>&lt;rickreis dev/&gt;</span></h3>

            <h3>{t('footerLabel')} Rick Reis</h3>
        </footer>
    )
}

export default Footer