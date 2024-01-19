<template>
  <div>
    <v-dialog v-model="show" max-width="400">
      <auth-card>
        <template slot="content">
          <v-form class="mx-8">
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="text"
              v-model="form.username"
              :rules="[(v) => !!v || 'Email requerido']"
              v-on:keyup.enter="signIn"
            />
            <v-text-field
              id="password"
              label="Contraseña"
              name="password"
              prepend-icon="mdi-lock"
              :type="show1 ? 'text' : 'password'"
              v-model="form.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              :rules="passwordRules"
              v-on:keyup.enter="signIn"
            />
            <v-row class="mt-n4 mb-2 ml-6" v-if="password">
              <span style="color: red; text-align: left" class="subtitle-2 ml-1">
                Contraseña incorrecta. Por favor, intentelo de nuevo.
              </span>
            </v-row>
          </v-form>
        </template>

        <template slot="signIn">
          <v-btn color="primary" :disabled="!validateForm" @click="signIn">
            <v-progress-circular
              v-show="loading"
              :indeterminate="true"
              :rotate="2"
              :size="14"
              :width="2"
              color="white"
              style="margin-right: 8px"
            ></v-progress-circular>
            <span>Iniciar sesión</span>
          </v-btn>
        </template>
        <template slot="footer">
          <v-btn
            text
            x-small
            color="primary"
            class="ma-2"
            @click="showForgotPassword = true"
          >
            <span>¿Olvidaste tu contraseña?</span>
          </v-btn>
          <v-btn
            text
            x-small
            color="primary"
            class="ma-2"
            @click="showRegisterForm = true"
          >
            <span>Registrarse</span>
          </v-btn>
        </template>
      </auth-card>
    </v-dialog>
    <register
      v-if="showRegisterForm"
      ref="Register"
      :showForm="showRegisterForm"
      @close="showRegisterForm = false"
    >
    </register>
    <forgot-password
      v-if="showForgotPassword"
      ref="ForgotPassword"
      :showForm="showForgotPassword"
      @close="showForgotPassword = false"
    >
    </forgot-password>
  </div>
</template>

<script>
import AuthCard from "@/components/Auth/AuthCard.vue";
import Register from "@/components/Auth/Register.vue";
import ForgotPassword from "@/components/Auth/ForgotPassword.vue";
import { login } from "@/services/AuthServices";
export default {
  props: {
    showForm: Boolean,
  },
  components: { AuthCard, Register, ForgotPassword },
  data() {
    return {
      showRegisterForm: false,
      show1: false,
      loading: false,
      showForgotPassword: false,
      form: {
        username: "",
        password: "",
      },
      password: false,
      passwordRules: [(v) => !!v || "Contraseña requerida"],
    };
  },
  methods: {
    async signIn() {
      if (this.validateForm) {
        this.loading = true;
        let r = await login(this.form);
        if (!r) {
          this.password = true;
        } else {
          this.$router.push("/");
          this.$emit("close");
        }
        this.loading = false;
      }
    },
  },
  watch: {
    validatePassword() {
      this.password = false;
    },
  },
  computed: {
    validateForm: function () {
      return !!this.form.username && !!this.form.password;
    },
    validatePassword() {
      return this.form.password;
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
