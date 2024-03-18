<template>
  <v-app>
    <!-- Menu normal -->
    <v-app-bar elevation="1" :color="color" dark app :hide-on-scroll="!mini" height="80px">
      <router-link to="/">
        <div class="header-container">
          <img :src="logo" alt="Logo" class="logo-image">
          <div class="header-text">Hielo Express</div>
        </div>
      </router-link>
      <v-spacer />
      <v-list class="list" color="primary" v-if="mini && $route.name == 'home'">
        <v-list-item v-for="(item, i) in items" :key="i" @click="goTo(item.link)">
          <v-list-item-title :class="classText"> {{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <languageComponent/>
      <v-app-bar-nav-icon @click="navigationDrawer" v-if="!mini"></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- Menu hamburguesa -->
    <v-navigation-drawer v-if="!mini" color="primary" v-model="drawer" :mini-variant="mini" mini-variant-width="70"
      :expand-on-hover="expandOnHover" :temporary="temporary" dark right app mobile-breakpoint="0">
      <router-link to="/">
        <v-img width="50%" :src="logo" alt="nqi-logo" />
      </router-link>
      <span class="font-weight-black white--text text-h6 ml-2 mr-2" v-if="!mini">{{ nameApp }}</span>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list v-if="$route.name == 'home'">
            <v-list-item v-for="(item, i) in items" :key="i" @click="goTo(item.link)">
              <v-list-item-title :class="classText"> {{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <router-view ref="home"></router-view>

    <div v-if="loading" :style="loader" />

    <footerComponent />
  </v-app>
</template>

<script>
import footerComponent from "./FooterComponent.vue";
import languageComponent from "./LanguageComponent.vue";
import { mapState } from "vuex";
import config from '../../config';

export default {
  components: { footerComponent, config, languageComponent },
  data() {
    return {
      nameApp: config.other.nameApp,
      color: "primary",
      drawer: false,
      group: null,
      expandOnHover: false,
      temporary: false,
      loader: `position: fixed; left: 0px; top: 0%; width: 100%; height: 100%; z-index: 9999; background: url(${require("../../../public/img/loader.gif")}) 50% 50% no-repeat;`,
      classText: "white--text text-h8",
      classTextIcon: "font-weight-black white--text text-h6 ml-n16 mx-auto",
      logo: require("../../../public/img/logo-white.png"),
    };
  },
  methods: {
    goTo(refName) {
      var element = this.$refs.home.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top - 20);
    },
    navigationDrawer() {
      this.drawer = !this.drawer;
      this.goTo("div0");
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    items() {
      return [
        {
          title: this.$t('home.menu.init'),
          link: "div0",
        },
        {
          title: this.$t('home.menu.us'),
          link: "div1",
        },
        {
          title: this.$t('home.menu.products'),
          link: "div2",
        },
        {
          title: this.$t('home.menu.contact'),
          link: "div3",
        },
      ]
    },
    ...mapState("loader", ["loading"]),
    navBarHideOnScroll() {
      return this.$vuetify.breakpoint.name == "xs" ||
        this.$vuetify.breakpoint.name == "sm"
        ? true
        : false;
    },
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

<style scoped>
.list {
  list-style: none;
  display: flex;
  gap: 25px;
}

.header-container {
  display: flex;
  /* Activa Flexbox para alinear elementos horizontalmente */
  align-items: center;
  /* Alinea los elementos verticalmente en el centro */
  justify-content: start;
  /* Alinea los elementos al inicio (izquierda) */
  /* Puedes añadir más estilos aquí para ajustar el contenedor como margenes o padding */
}

.logo-image {
  /* Establece un tamaño adecuado para tu logo */
  width: 100px;
  /* Ajusta según sea necesario */
  height: auto;
  /* Mantiene la proporción del logo */
  margin-right: 20px;
  /* Añade espacio entre el logo y el texto */
}

.header-text {
  /* Estilos para el texto */
  color: white;
  /* O cualquier color que se ajuste a tu diseño */
  font-size: 24px;
  /* Ajusta según sea necesario */
  /* Añade más estilos de texto como fuente, peso, etc. */
}
</style>
