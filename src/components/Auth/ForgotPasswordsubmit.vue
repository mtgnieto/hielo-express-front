<template>
  <div>
    <v-dialog v-model="show" max-width="500">
      <auth-card>
        <template slot="header">
          <h2>Código de verificación</h2>
        </template>
        <template slot="content">
          <span>Introduce el código de verificación enviado al email proporcionado.</span>
          <v-form>
            <v-text-field
              label="Código..."
              name="code"
              prepend-icon="code"
              type="text"
              v-model="code"
            />
            <v-text-field
              id="password"
              label="Nueva contraseña..."
              name="password"
              prepend-icon="lock"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
            <v-text-field
              v-model="repeatPassword"
              id="repeatPassword"
              label="Repetir contraseña..."
              name="lock_outline"
              prepend-icon="lock"
              :type="showRepeatPassword ? 'text' : 'password'"
              :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showRepeatPassword = !showRepeatPassword"
            />
            <span v-if="validate" style="color: red; font-size: 100%; font-weight: bold">
              Código no válido</span
            >
          </v-form>
        </template>
        <template slot="signIn">
          <v-btn
            color="primary"
            :disabled="!validateForgotPassword"
            @click="forgotPasswordSubmit"
          >
            <span>Validar</span>
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
  components: {
    AuthCard,
  },
  props: {
    showForm: Boolean,
    userName: String,
  },
  data() {
    return {
      code: "",
      showPassword: false,
      showRepeatPassword: false,
      password: null,
      repeatPassword: null,
      validate: false,
    };
  },
  methods: {
    async forgotPasswordSubmit() {
      this.$store.dispatch("loader/show");
      awsServiceAuth
        .forgotPasswordSubmit(this.userName, this.code, this.password)
        .then((value) => {
          this.$emit("close");
        })
        .catch((e) => {
          console.log(e);
          this.validate = true;
        });
      this.$store.dispatch("loader/hide");
    },
  },
  watch: {
    code() {
      this.validate = false;
    },
  },
  computed: {
    validateForgotPassword: function () {
      return !!this.userName && !!this.password && this.password === this.repeatPassword;
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
