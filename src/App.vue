<template>
  <v-app id="app">
    <navigation/>
 <v-main>

    

      <router-view></router-view>

      </v-main>
    

  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
  export default {
      components: {
    Navigation,
  },
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style lang="scss">
main {
  
  height: auto;
  display:flex;
}
.col h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, white),
    10px,
    5px,
    map-get($colorz, orange)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: right;
  padding:5%;
}
.col:last-child  h1{
  
  text-align: left;
}
#info {
    background-color:white;
    height: auto;
}
</style>