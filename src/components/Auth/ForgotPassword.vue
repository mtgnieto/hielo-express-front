<template>
  <div>
    <v-dialog v-model="show" max-width="500">
      <auth-card>
        <template slot="header">
          <h2>Recordar contraseña</h2>
        </template>
        <template slot="content">
          <v-form>
            <v-text-field
              id="username"
              v-model="userName"
              label="Email"
              name="username"
              prepend-icon="mdi-account"
            />
            <span v-if="validate" style="color: red; font-size: 100%; font-weight: bold">
              Email no válido</span
            >
          </v-form>
        </template>
        <template slot="signIn">
          <v-btn
            color="primary"
            :disabled="!validateForgotPassword"
            @click="confirmSignUp"
          >
            <span>Validar</span>
          </v-btn>
        </template>
      </auth-card>
    </v-dialog>
    <forgot-passwordsubmit
      v-if="showForgotPasswordsubmit"
      ref="ForgotPassword"
      :userName="userName"
      :showForm="showForgotPasswordsubmit"
      @close="close"
    >
    </forgot-passwordsubmit>
  </div>
</template>

<script>
import AuthCard from "@/components/Auth/AuthCard.vue";
import awsServiceAuth from "@/services/AWSService/awsServiceAuth.js";
import ForgotPasswordsubmit from "@/components/Auth/ForgotPasswordsubmit.vue";

export default {
  components: {
    AuthCard,
    ForgotPasswordsubmit,
  },
  props: {
    showForm: Boolean,
  },
  data() {
    return { showForgotPasswordsubmit: false, validate: false, userName: null };
  },
  methods: {
    close() {
      this.showForgotPasswordsubmit = false;
      this.$emit("close");
    },
    async confirmSignUp() {
      this.$store.dispatch("loader/show");
      awsServiceAuth
        .forgotPassword(this.userName)
        .then((value) => {
          this.showForgotPasswordsubmit = true;
        })
        .catch((e) => {
          console.log(e);
          this.validate = true;
        });
      this.$store.dispatch("loader/hide");
    },
  },
  watch: {
    userName() {
      this.validate = false;
    },
  },
  computed: {
    validateForgotPassword: function () {
      return !!this.userName;
    },
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
<style></style>
