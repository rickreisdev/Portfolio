import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslate from '../locale/en.json'
import ptTranslate from '../locale/pt.json'

const navigatorLng = navigator.language

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...enTranslate
        },
        pt: {
            ...ptTranslate
        }
    },
    lng: navigatorLng.includes('pt') ? 'pt' : 'en',
})