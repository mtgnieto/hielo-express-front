import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#003b5c',//rgb(0, 59, 92),
        secondary: "#5b6770",
        header: '#CEE3F6',
        background: 'white',
        footer: '#424242',
        error: '#b71c1c',
      },
    },
  },
})

export default vuetify