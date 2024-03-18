<template>
    <div>
        <v-btn x-small icon v-for="language in languages" :key="language.locale"
            @click="changeLanguage(language.locale)">
            <v-img :src="require(`../../../public/img/${language.icon}`)" width="20px"></v-img>
        </v-btn>
    </div>
</template>

<script>
import { i18n } from '@/plugins/i18n'
export default {
    name: 'LanguageComponent',
    computed: {
        languages() {
            return [
                { locale: 'es', icon: "es.png" },
                { locale: 'ca', icon: "ca.png" }
            ]
        }
    },
    methods: {
        changeLanguage(locale) {
            i18n.locale = locale
        }
    }
}
</script>
