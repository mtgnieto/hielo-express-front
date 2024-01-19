<template>
  <div>
    <v-dialog v-model="show" max-width="500">
      <auth-card>
        <template slot="content">
          <v-form class="mx-8">
            <v-text-field
              id="name"
              v-model="name"
              label="Nombre"
              name="name"
              prepend-icon="mdi-account"
              :rules="[(v) => !!v || 'Nombre requerido']"
            />
            <v-text-field
              id="lastName"
              v-model="lastName"
              label="Apellidos"
              name="lastName"
              prepend-icon="mdi-account"
              :rules="[(v) => !!v || 'Apellidos requerido']"
            />
            <v-text-field
              id="email"
              v-model="email"
              label="Email"
              name="email"
              prepend-icon="email"
              :rules="emailRules"
            />
            <v-row class="mt-n4 mb-2 ml-6" v-if="usernameExists">
              <span style="color: red; text-align: left" class="subtitle-2 ml-1">
                Ya existe una cuenta con el correo electrónico dado
              </span>
            </v-row>
            <v-text-field
              id="repeatEmail"
              v-model="repeatEmail"
              label="Repetir email"
              name="repeatEmail"
              prepend-icon="email"
              :rules="emailRules"
            />
            <v-text-field
              v-model="password"
              id="password"
              label="Contraseña"
              name="password"
              prepend-icon="lock"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              @click:append="showPassword = !showPassword"
            />
            <v-text-field
              v-model="repeatPassword"
              id="repeatPassword"
              label="Repetir contraseña"
              name="lock_outline"
              prepend-icon="lock"
              :type="showRepeatPassword ? 'text' : 'password'"
              :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              @click:append="showRepeatPassword = !showRepeatPassword"
            />
            <v-checkbox
              v-model="termAndConditions"
              color="primary"
              :rules="[(v) => !!v || 'Terminos y condiciones requerido']"
            >
              <template v-slot:label>
                <div @click.stop>
                  He leído y acepto las
                  <a href="javascript:;" @click.stop="termAndConditionsInfo = true"
                    >Condiciones de uso del Servicio</a
                  >
                </div>
              </template>
            </v-checkbox>
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
              color="primary"
            ></v-progress-circular>
            <span>Continuar</span>
          </v-btn>
        </template>
      </auth-card>
    </v-dialog>
    <confirmation-code
      v-if="showConfirmationCode"
      ref="ConfirmationCode"
      :userName="email"
      :showForm="showConfirmationCode"
      @close="close"
    >
    </confirmation-code>
    <v-dialog v-model="termAndConditionsInfo" width="100%">
      <v-card>
        <v-card-title class="title">Condiciones de uso del Servicio</v-card-title>
        <v-card-text>
          <img :src="require('../../../public/img/termAndConditions.png')" width="100%" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="termAndConditionsInfo = false"
            >Aceptar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AuthCard from "@/components/Auth/AuthCard.vue";
import ConfirmationCode from "@/components/Auth/ConfirmationCode.vue";
import awsServiceAuth from "@/services/AWSService/awsServiceAuth.js";
export default {
  props: {
    showForm: Boolean,
  },
  components: { AuthCard, ConfirmationCode },
  data() {
    return {
      usernameExists: false,
      emailRules: [
        (v) => !!v || "Email requerido",
        (v) => /.+@.+\..+/.test(v) || "El email debe ser válido",
      ],
      passwordRules: [
        (v) => !!v || "Contraseña requerida",
        (v) => (v && v.length >= 8) || "La contraseña debe tener al menos 8 caracteres",
      ],
      showConfirmationCode: false,
      showForgotPassword: false,
      show1: false,
      loading: false,
      email: null,
      name: null,
      lastName: null,
      repeatEmail: null,
      repeatPassword: null,
      password: null,
      showPassword: false,
      showRepeatPassword: false,
      termAndConditions: false,
      termAndConditionsInfo: false,
    };
  },
  methods: {
    async signIn() {
      if (this.validateForm) {
        awsServiceAuth
          .signUp(this.email, this.name, this.lastName, this.password, this.email)
          .then((value) => {
            this.showConfirmationCode = true;
          })
          .catch((e) => {
            console.log(e);
            if ("usernameExists") {
              this.usernameExists = true;
            }
          });
      }
    },
    close() {
      this.$emit("close");
      this.showConfirmationCode = false;
    },
  },
  watch: {
    validateForm() {
      this.usernameExists = false;
    },
  },
  computed: {
    validateForm: function () {
      return (
        !!this.name &&
        !!this.termAndConditions &&
        !!this.lastName &&
        !!this.password &&
        this.email === this.repeatEmail &&
        this.password === this.repeatPassword &&
        this.password.length >= 8 &&
        this.repeatPassword.length >= 8
      );
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
