<template>
  <div>
    <v-navigation-drawer id="navDrawer" v-model="drawer" app>
       <v-toolbar-title class="headline" id="doM">
        <span id="madeBy">RECIPIES BY</span>
        <span class="font-weight-light" id="madeBy"> BO BO </span>
      </v-toolbar-title>
      <hr>
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
          ><v-icon color="orange">info</v-icon>About</router-link
        >
        <router-link tag="li" to="/login"
          ><v-icon color="orange">mdi-account</v-icon>Login</router-link
        >
        <router-link tag="li" to="/admin"
          ><v-icon color="orange">lock</v-icon>Admin</router-link
        >
      </ul>
    </v-navigation-drawer>

    <v-app-bar app color="#e5b285">
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="headline" id="mobile">
        <span>RECIPIES BY</span>
        <span class="font-weight-light"> BO BO </span>
      </v-toolbar-title>


<v-spacer></v-spacer>
      
  <v-row class="d-flex justify-center" id="commentBox">
      <div class="heada" id="toolbarMenu">
        <v-col id="navCol">
        <router-link tag="li" to="/" id="sNone">
          <v-icon id="sNone" color="orange">home</v-icon> Home</router-link
        >
       
        <router-link tag="ol" to="/recipies" id="sNone">
          <v-icon color="orange" id="sNone" >restaurant_menu</v-icon> Recipies</router-link
        >

        </v-col>  
      
      </div>
      </v-row>
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
hr {
  border: 2px solid white;
  margin-top: 20px;
  margin-bottom: 20px;
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
  color: map-get($colorz, white);
  margin-left: 15%;
  padding: 5px 20px;
  list-style-type: none;
}
nav li i {
  margin-right: 10px;
}
nav li:nth-last-child(2) {
  position: absolute;
  bottom: 80px;
  color: map-get($colorz, white);
}
nav li:last-child {
  position: absolute;
  bottom: 40px;
  color: map-get($colorz, white);
}
#navDrawer{
  background-color: #e5b285;
  z-index: 99999;
}
.heada{
  @include infobox_mixin(none, none, none, none, map-get($colorz, white));
  font-size: 1.4em;
}
#toolbarMenu {
  display:flex;
   margin:auto;
}
#navCol {
  display:flex;
  margin-right: 208px;
}
#madeBy{
  margin-top:10%;
  margin:auto;
  display:flex;
  justify-content: center;
  align-items: center;
}



@media (max-width: 700px) {
#sNone {
  display: none;
  z-index: 1;
}
#toolbarMenu {
   z-index: 1;
}
#navCol {
  display:flex;
    z-index: 1;
}
#mobile{
  display:none;
}

}
@media (max-width: 900px) {
#sNone {
  display: none;
  z-index: 1;
}
#toolbarMenu {
   z-index: 1;
}
#navCol {
  display:flex;
    z-index: 1;
}

}

@media (min-width: 900px) {
   #doM{
  display:none;
}
hr {
  display:none;
}
}

</style>