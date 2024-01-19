<template>
  <div>
    <v-dialog v-model="show" max-width="400" persistent>
      <auth-card>
        <template slot="content">
          <span
            >Haz clic en el enlace de verificación enviado al email proporcionado.</span
          >
        </template>
        <template slot="signIn">
          <v-btn color="primary" @click="confirmSignUp">
            <v-progress-circular
              v-show="loading"
              :indeterminate="true"
              :rotate="2"
              :size="14"
              :width="2"
              color="primary"
            ></v-progress-circular>
            <span>¡De acuerdo!</span>
          </v-btn>
        </template>
        <template slot="footer">
          <v-btn text small color="primary" @click="resendSignUp">
            <span>Reenviar enlace</span>
          </v-btn>
        </template>
      </auth-card>
    </v-dialog>
  </div>
</template>

<script>
import AuthCard from "@/components/Auth/AuthCard.vue";
import awsServiceAuth from "@/services/AWSService/awsServiceAuth.js";
export default {
  name: "confirmation-code",
  props: {
    showForm: Boolean,
    userName: String,
  },
  components: { AuthCard },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async confirmSignUp() {
      this.$emit("close");
    },
    async resendSignUp() {
      awsServiceAuth
        .resendSignUp(this.userName)
        .then((value) => {})
        .catch((e) => {
          console.log(e);
        });
    },
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
