<template>
  <v-footer dark padless>
    <v-row justify="center" no-gutters>
      <v-col class="text-center" cols="12">
        <v-card flat tile class="footer primary white--text text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Más de 20 años innovando y seguimos avanzando.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>{{nameApp}}</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import config from '../../config';
export default {
  components: { config },
  data: () => ({
    icons: ["mdi-facebook", "mdi-linkedin", "mdi-instagram"],
    nameApp: config.other.nameApp
  }),

};
</script>
