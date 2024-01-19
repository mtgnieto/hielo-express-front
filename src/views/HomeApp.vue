<template>
  <v-main ref="div0" >
    <v-container class="fill-height" fluid>
      <v-row v-if="$store.state.userData.userRol">
      <v-col cols="12">
        <admin-screen ref="adminScreen"></admin-screen>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" >
        <user-screen ref="userScreen"></user-screen>
      </v-col>
    </v-row>
    </v-container>
  </v-main>
</template>

<script>
import UserScreen from "@/views/Users/UserScreen.vue";
import AdminScreen from "@/views/Admin/adminScreen.vue";

export default {
  components: { UserScreen, AdminScreen },
};
</script>
