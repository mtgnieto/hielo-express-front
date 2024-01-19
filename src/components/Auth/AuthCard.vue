<template>
  <v-card class="elevation-12 mx-auto" max-width="500">
    <v-card-title class="justify-center">
      <v-img
        max-height="550"
        max-width="350"
        :src="require('../../../public/img/logo-black.png')"
        alt="nqi-logo"
      />
    </v-card-title>
    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>
    <v-card-actions class="justify-center">
      <slot name="signIn"></slot>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <slot name="footer"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "auth-card",
  props: {
    headerColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      cardHidden: true,
    };
  },
  beforeMount() {
    setTimeout(this.showCard, 700);
  },
};
</script>
