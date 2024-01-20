<template>
  <v-main class="ma-0 pa-0 mx-auto">
    <v-row no-gutters ref="div0">
      <v-col cols="12">
        <v-img :src="require('../../../public/img/home.png')" height="735" width="2500" alt="home"
          class="d-flex justify-center align-center" style="position: relative;">
          <!-- v-card centrada con estilo adicional -->
          <v-card class="pa-5" width="400" height="400"
            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" color="primary"
            text-center>
            <v-card-title class="headline white--text justify-center">Ice Selling</v-card-title>
            <v-card-text class="white--text text-center">
              Elija su tipo y cantidad de hielo a continuación y haga su pedido con nosotros.
            </v-card-text>
            <v-form>
              <v-select :items="['Product 1', 'Product 2', 'Product 3']" label="Seleccionar producto" solo
                append-icon="mdi-chevron-down"></v-select>
              <v-text-field label="Cantidad" type="number" solo></v-text-field>
              <v-card-actions class="justify-center">
                <v-btn color="secondary" dark large>Contacto</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-img>
      </v-col>
    </v-row>
    <v-row class="ma-2" ref="div1">
      <v-col cols="12"><about-us :mini="mini" /></v-col>
    </v-row>
    <v-row ref="div2" class="ma-2">
      <v-col cols="12"><products-layout :mini="mini" /></v-col>
    </v-row>
    <v-row ref="div3" class="ma-2" :mini="mini">
      <v-col cols="12">
        <contact :mini="mini" />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import AboutUs from "@/views/Home/AboutUs.vue";
import ProductsLayout from "@/views/Home/Products/ProductsLayout.vue";
import Contact from "@/views/Home/Contact.vue";
export default {
  components: {
    AboutUs,
    Contact,
    ProductsLayout
  },
  data() {
    return {
      textPresentation: `hola buenas`,
      tagHtml: "",
      dataForm: {
        mail: "",
        name: "",
        surnames: "",
        phone: "",
        comments: "",
        toMail: "",
        plan: "No contratado",
        subject: "Contacto",
        selectedProduct: '',
        quantity: 1,
      },
    };
  },
  computed: {
    mini: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.drawer = false;
          this.expandOnHover = false;
          this.temporary = true;
          return false;

        case "sm":
          this.drawer = false;
          this.expandOnHover = false;
          this.temporary = true;
          return false;

        case "md":
          this.drawer = true;
          this.expandOnHover = true;
          this.temporary = false;
          return true;

        case "lg":
          this.drawer = true;
          this.expandOnHover = true;
          this.temporary = false;
          return true;

        case "xl":
          this.drawer = true;
          this.expandOnHover = true;
          this.temporary = false;
          return true;
      }
    },
  },
};
</script>
<style lang="css"></style>
