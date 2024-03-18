<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-card elevation="0">
            <v-card-title class="text-h4 font-weight-regular mb-4 secondary--text" style="white-space: nowrap;">
              {{ $t('ourContacts.title')}}
            </v-card-title>
            <v-card-text class="text-h6 mb-4">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-row v-for="ourContact in ourContacts" :key="ourContact.id">
                    <v-col cols="2">
                      <v-icon size="x-large" color="primary" class="mt-4">
                        {{ ourContact.icon }}
                      </v-icon>
                    </v-col>
                    <v-col cols="10">
                      <h5 class="text-h6 font-weight-regular secondary--text"> {{ ourContact.title }}</h5>
                      <p class="text-body-1 font-weight-regular mb-4 secondary--text d-inline-block"> {{
                    ourContact.description
                  }}</p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img :src="require(`../../../public/img/qr.png`)" class="mb-4 justify-center" width="200"></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="0">
            <v-card-title class="text-h4 font-weight-regular mb-4 secondary--text">{{ $t('contactForm.title')}}</v-card-title>
            <v-card-text class="text-h6 mb-4">
              <v-row>
                <v-col cols="6">
                  <v-text-field v-model="dataForm.name" :label="$t('contactForm.name')"
                    :rules="[(v) => !!v || 'Nombre requerido']"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="dataForm.surnames" :label="$t('contactForm.surname')"
                    :rules="[(v) => !!v || 'Apellidos requerido']"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="dataForm.mail" label="Email"
                    :rules="[(v) => !!v || 'Email requerido']"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="dataForm.phone" :label="$t('contactForm.phone')"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="dataForm.comments" name="input-7-4" :label="$t('contactForm.text')"
                    :rules="[(v) => !!v || 'Dudas o consultas requerido']"></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary" class="ma-2" @click="contact" :disabled="!validateForm">
                {{ $t('contactForm.button')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5848763364697!2d2.1634641150931606!3d41.49159867925469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bddd461e9a53%3A0x83c0015da6e1106c!2sHIELO%20EXPRESS!5e0!3m2!1ses!2ses!4v1676628842949!5m2!1ses!2ses"
            style="border:0; width:100%; height:400px;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>


export default {
  props: {
    mini: Boolean,
  },
  components: {

  },
  data() {
    return {
      dataForm: {
        mail: "",
        name: "",
        surnames: "",
        phone: "",
        comments: "",
        toMail: "",
        subject: "Contacto",
      },
    };
  },
  methods: {
    async contact() {
      this.$store.dispatch("loader/show");
      this.dataForm.toMail = "consultanqi@gmail.com";
      this.$store.dispatch("loader/hide");
      this.$emit("close");
      this.$store.dispatch("showEmail/show");
    },
  },
  computed: {
    ourContacts() {
      return [
        { id: 0, title: this.$t('ourContacts.location'), icon: "mdi-map-marker", description: "Hielo Express, er de Milà, 12 Pol. Ind. Cadesbank, 08291 Ripollet, Barcelona" },
        { id: 1, title: this.$t('ourContacts.phone'), icon: "mdi-cellphone", description: "932 419 999" },
        { id: 2, title: "Email", icon: "mdi-email", description: "comercial@hieloexpress.com" }
      ]
    },
    validateForm: function () {
      return (
        !!this.dataForm.mail &&
        !!this.dataForm.name &&
        !!this.dataForm.surnames &&
        !!this.dataForm.comments
      );
    },
  }
}
</script>