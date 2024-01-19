<template>
  <v-app-bar dark app :style="navBarStyle" :hide-on-scroll="navBarHideOnScroll">
    <router-link to="/">
      <v-img max-height="450" max-width="250" :src="logo" alt="nqi-logo" />
    </router-link>
    <span :class="classTextIcon" v-if="!mini">No Quiero Inmobiliarias</span>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      v-on:click="$parent.$parent.drawer = !$parent.$parent.drawer"
    ></v-app-bar-nav-icon>
    <!-- <v-btn text x-small color="white" @click="handleLogout()">
      cerrar sesión
      <v-icon small right dark>mdi-logout</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "top-navbar",
  data() {
    return {
      logo: require("../../../public/img/logo-white.png"),
      classTextIcon: "font-weight-black primary--text text-h6 ml-n16 mx-auto",
    };
  },
  components: {},
  methods: {
    handleLogout() {
      logout();
    },
  },
  computed: {
    navBarStyle() {
      if (window.scrollY > 660) {
        this.color = "primary";
        this.classText = "secondary--text text-h8";
        this.classTextIcon = "font-weight-black secondary--text text-h6 ml-n16 mx-auto";
        this.logo = require("../../../public/img/logo-purple.png");
      } else if (this.$route.name == "homeApp") {
        this.color = "primary";
        this.classTextIcon = "font-weight-black secondary--text text-h6 ml-n16 mx-auto";
      } else {
        this.color = "transparent";
        this.classText = "white--text text-h8";
        this.classTextIcon = "font-weight-black primary--text text-h6 ml-n16 mx-auto";
        this.logo = require("../../../public/img/logo-white.png");
      }
      return this.$route.path == "/"
        ? "background-color: rgba(91,103,112,0.6);"
        : "background-color: rgba(91,103,112,1);";
    },
    navBarHideOnScroll() {
      return this.$vuetify.breakpoint.name == "xs" ||
        this.$vuetify.breakpoint.name == "sm"
        ? true
        : false;
    },
    mini: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;

        case "sm":
          return true;

        case "md":
          return false;

        case "lg":
          return false;

        case "xl":
          return false;
      }
    },
  },
};
</script>
