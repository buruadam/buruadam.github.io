import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enRes from './locales/en/translation.json';
import huRes from './locales/hu/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enRes },
            hu: { translation: huRes },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;
