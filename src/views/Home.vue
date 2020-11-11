<template>
  <v-container grid-list="xs">
    

    <v-row align-center class="info_box" row-wrap>
      <v-col sm="6" xs="6" offset-sm="3">
        <h1>Front Page</h1>
        <div>
          <h2>Recipes</h2>  
          <p>
            
<br>
Here you will find all my favorite recipes. They have been developed with the aim that they should all be easy to make and contain simple ingredients. It must be fun to cook and you must dare to challenge yourself and use your senses. I believe that it is much more fun to be in the kitchen if you experiment and adapt the dishes to your own taste buds.
<br><br>
With me you will find easy dishes for sweet desserts and cakes, recipes for pastries and much more. Our universe has no limits and I develop recipes for ordinary people with a craving for good food.
<br><br>
I have lots of great ideas and am constantly developing new exciting recipes. That's why new ones are added every week so you can be inspired all the time. I hope you can feel my passion for cooking as you flip through our many pages and can even be inspired to go into the kitchen.
<br><br>
The kitchen is our favorite place and we spend many hours there every day. This is where we unfold our creative minds, but at the same time can de-stress after a long day. Cooking is for us, the best therapy.


          </p>
        </div>
      </v-col>


    </v-row>
<v-row align-center class="info_box">´

    </v-row>
 
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
   // HelloWorld
  }
}
</script>

<style lang="scss">
main {
    margin-top:3%;
}
.info_box .col h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, nav),
    10px,
    5px,
    map-get($colorz, primary),
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  background-color: #e5b285;
}

h2 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
}

.info_box .col div {
  background-color: #faf2e8;
  padding: 20px;
}

.row:first-child {
  height: 40vh;
}
.row:last-child {
  height: 40vh;
}

</style>