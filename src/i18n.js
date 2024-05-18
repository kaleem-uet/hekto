import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationUR from './locales/ur.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    ur: { translation: translationUR }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
