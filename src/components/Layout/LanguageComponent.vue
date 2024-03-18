<template>
    <div>
        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="100"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            small
            >
            <v-img :src="require(`../../../public/img/${currentLanguage.icon}`)" width="20px" class="mr-1"></v-img>
            <v-icon>mdi-web</v-icon>
            </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item 
            v-for="language in languages"
            :key="language.locale"
            @click="changeLanguage(language.locale)"
            >
              <v-list-item-avatar>
                <img
                  :src="require(`../../../public/img/${language.icon}`)"
                  :alt="language.locale"
                >
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ language.text.toUpperCase() }}</v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-list>
        </v-card>
        </v-menu>
    </div>
</template>

<script>
import { i18n } from '@/plugins/i18n'
export default {
    name: 'LanguageComponent',
    data() {
        return {
            menu: false,
        };
    },
    computed: {
        languages() {
            return [
                { locale: 'es', text: "Español", icon: "es.png" },
                { locale: 'ca', text: "Català", icon: "ca.png" },
                // Add more languages here
            ];
        },
        currentLanguage() {
            const currentLocale = i18n.locale;
            return this.languages.find(language => language.locale === currentLocale) || this.languages[0];
        }
    },
    methods: {
        changeLanguage(locale) {
            i18n.locale = locale;
            this.menu = false; // Close the menu after selection
        }
    }
}
</script>
