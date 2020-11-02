<template>
  <div>
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <div v-if="currentUser" id="Loginas">
        <h4>Logged in as: {{ currentUser.email }}</h4>
      </div>

      <ul>
        <router-link tag="li" to="/">
          <v-icon color="orange">home</v-icon> Home</router-link
        >
        <router-link tag="li" to="/recipies">
          <v-icon color="orange">restaurant_menu</v-icon> Recipies</router-link
        >
        <router-link tag="li" to="/About"
          ><v-icon color="inprogress">info</v-icon>About</router-link
        >
        <router-link tag="li" to="/login"
          ><v-icon color="inprogress">mdi-account</v-icon>Login</router-link
        >
        <router-link tag="li" to="/admin"
          ><v-icon color="inprogress">lock</v-icon>Admin</router-link
        >
      </ul>
    </v-navigation-drawer>

    <v-app-bar app color="#e5b285">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span>RECIPIES BY</span>
        <span class="font-weight-light"> BO BO </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link tag="li" to="/login"
        ><v-icon color="pastry">mdi-account-circle</v-icon></router-link
      >
    </v-app-bar>
  </div>
</template>

<script>
/* eslint-disable
*/
import { db } from "../../firebase";

import firebase from "firebase";
import "firebase/firestore";
import store from "../store/index.js";

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
});
export default {
  data: () => ({
    drawer: null,
  }),
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
.headline {
  @include infobox_mixin(none, none, none, none, map-get($colorz, white));
}

#Loginas{
  color: white;
  
  display:flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style-type: none;
}
nav ul {
  padding: 0;
  margin: 20px;
  text-decoration: none;
}
nav li {
  color: map-get($colorz, orange);
  margin-left: 15%;
  padding: 5px 20px;
  list-style-type: none;
}
nav li i {
  margin-right: 10px;
}
nav li:last-child {
  position: absolute;
  bottom: 40px;
  color: map-get($colorz, inprogress);
}
</style>