import Vue from 'vue'
import VueI18n from 'vue-i18n'
import fileEs from "./language/es";
import fileCa from "./language/ca";
Vue.use(VueI18n)

const messages = {
    ...fileEs,
    ...fileCa,
};

export const i18n = new VueI18n({
    locale: window.navigator.language.split('-')[0],
    fallbackLocale: 'ca',
    messages
})