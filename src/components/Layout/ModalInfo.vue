<template>
  <div>
    <v-dialog v-model="show" scrollable max-width="700">
      <v-card>
        <v-card-title
          class="headline font-weight-regular secondary white--text justify-center"
          >Solicitud realizada
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <span
                >¡Gracias por contactar con nosotros!, un técnico se pondrá en contacto
                con usted</span
              >
            </v-col></v-row
          >
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            color="secondary"
            class="ma-2"
            @click="$store.dispatch('showEmail/hide')"
          >
            ¡De acuerdo!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showForm: Boolean,
    data: Object,
  },
  components: {},
  data() {
    return {};
  },

  computed: {
    show: {
      get() {
        return this.showForm;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>
