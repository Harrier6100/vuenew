import { createI18n } from 'vue-i18n';
import ja from './localizes/ja.json';
import en from './localizes/en.json';

export const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    messages: { ja, en },
});