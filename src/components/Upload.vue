<template>
  <v-file-input label="File input" @change="uploadImage"> </v-file-input>
</template>

<script>
/* eslint-disable
*/
import { dbMenuAdd, fb } from "../../firebase";
export default {
  
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    uploadImage(e) {
      let file = e;
      console.log(e);
      var storageRef = fb.storage().ref('products/' + file.name);
      var uploadTask = storageRef.put(file);
    },
  }
  
}
</script>

<style lang="scss">

</style>