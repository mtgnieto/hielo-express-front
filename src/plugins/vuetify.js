import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E51430',//rgb(0, 59, 92),
        secondary: "#1D1D1B",
        header: '#CEE3F6',
        background: '#DADADA',
        footer: '#1D1D1B',
        error: '#b71c1c',
      },
    },
  },
})

export default vuetify