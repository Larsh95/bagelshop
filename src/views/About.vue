<template>
    <v-container grid-list="xs">
    <v-row align-center class="info_box">
      <v-col sm="4" xs="12" offset-sm="1">
        <h1>Recipies</h1>
        
      </v-col>
    </v-row>

    <v-row align-center class="info_box" row-wrap>
      <v-col sm="2" xs="12" offset-sm="1">
        <h1>Our Recipies</h1>
        <div>
          <p>
            Use the recipies to get fat
          </p>
        </div>
      </v-col>

    </v-row>
  </v-container>

</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.info_box:first-child .col h1 {
  font-size: 150%;
  padding: 50px;
  color: orange;
  
}

.info_box h1 {
  color: orange;
  background-color: #36454f;
}

</style>