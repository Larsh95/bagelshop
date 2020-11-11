<template>
  <v-container>
    <v-row>
      <v-col offset-md="1" md="5" xs="9" cols="12" >
        
        <div class="pa-2" id="info">
          <h2>Add New Recipie</h2>
          <v-text-field label="Name of Recipie" required v-model="name">
          </v-text-field>

        
          <v-file-input label="File input" @change="uploadImage"> </v-file-input>

          <v-textarea
            auto-grow
            
            rows="1"
            row-height="15"
            label="Ingredients"
            required
            v-model="description"
            placeholder
            wrap
          >
          </v-textarea>


          <v-textarea
            auto-grow
            
            rows="1"
            row-height="15"
            label="Approach"
            required
            v-model="price"
            placeholder
            wrap
          >
          </v-textarea>

          

          <!-- <div>
                <v-btn @click="click1">choose a photo</v-btn>
               <input type="file" ref="input1"
               style="display: none"
               @change="previewImage" accept="image/*" >   
               </div> 
               <div v-if="imageData!=null">                     
               <img class="preview" height="268" width="356" :src="img1">
               <br>
               </div>    -->

          <v-text-field label="Calories" required v-model="calories">
          </v-text-field>
          <v-row id="btnRow">
          <v-col >
          <v-btn 
          
          @click="addNewMenuItem()"
          id="add"
          > 
          Add Recipie </v-btn>
          </v-col>
          <v-col align="right">
          <v-btn id="cancel"> Cancel </v-btn>
          </v-col></v-row>
        </div>
      </v-col>
     
      <v-col id="preview" offset-md="1" md="4" xs="4" cols="12">
        
        <div class="pa-2" id="info2">
          <h2>Preview</h2>
          
            <span id="td_name">{{ name }}</span> <br/>

          <span id="sub">Calories: {{ calories }}</span><br /><br/>
          <h4>Ingredients:</h4>
          <span id="sub"> {{ description }}</span><br /><br/>
          <h4>Approach</h4>
          <!-- <span id="sub">{{ item.howto }}</span><br /><br/> -->
          
          <span id="sub">{{ price }}</span><br /><br/>

         
        </div>
      </v-col>
  
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable
*/

import { dbMenuAdd, fb } from "../../../firebase";
// import firebase from 'firebase'
// import 'firebase/firestore'

export default {
  components: {

  },
  data() {
    return {
      name: "",
      description: "",
      price: "",
      calories: "",      
    };
  },
  methods: {
    uploadImage(e) {
      
      let file = e;
      console.log(e);
      var storageRef = fb.storage().ref(file.name);
      var uploadTask = storageRef.put(file);
      // let uploadTask = storageRef.put(file);

    },
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        image: this.image,
        description: this.description,
        price: this.price,
        calories: this.calories,
        
      });
    },
  },
  //   create () {

  //       const post = {
  //         photo: this.img1,
  //         caption: this.caption
  //       }

  //       firebase.database().ref('PhotoGallery').push(post)
  //       .then((response) => {
  //         console.log(response)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //     },
  //   click1() {
  //   this.$refs.input1.click()
  // },

  // previewImage(event) {
  //   this.uploadValue=0;
  //   this.img1=null;
  //   this.imageData = event.target.files[0];
  //   this.onUpload()
  // },

  // onUpload(){
  //   this.img1=null;
  //   const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  //   storageRef.on(`state_changed`,snapshot=>{
  //   this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  //     }, error=>{console.log(error.message)},
  //   ()=>{this.uploadValue=100;
  //       storageRef.snapshot.ref.getDownloadURL().then((url)=>{
  //           this.img1 =url;
  //           console.log(this.img1)
  //         });
  //       }
  //     );
  //  },
};
</script>

<style lang="scss" scoped>
.col h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, pastry),
    10px,
    5px,
    map-get($colorz, orange)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: right;
  padding: 5%;
 
}
.col:last-child h1 {
  text-align: left;
}
#info {
  background-color: #faf2e8;
}
#info2{
  background-color:  #faf2e8;

}
tr th {
  font-weight: 300;
  font-weight: bold;
}
#td_name {
  font-weight: bold;
}
tr td {
  padding: 10px 10px 10px 16px;
}
#menu_item_desc {
  font-style: italic;
  font-weight: 300;
  color: map-get($colorz, darkgrey);
  font-size: 13px;
}

#basket_checkout {
  font-size: 13px;
}
#basket_checkout p:first-child {
  line-height: 2px;
}
#btnRow{
  height: auto;
}
#add, #cancel {
  background-color: #db885c;
}

h4 {
  font-weight: bold;
  font-size: 30px;
  display:flex; 
  justify-content: center;
  align-items: center;
}
#sub {
  display:flex; 
  justify-content: center;
  align-items: center;
  white-space: pre-wrap
}
#td_name{
  font-weight: bold;
  font-size: 40px;
  display:flex; 
  justify-content: center;
  align-items: center;
}
h2 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.6em;
  text-align: right;
  padding:2%;
  display:flex;
  align-items: center;
  justify-content: center;
  color: #FC6D2B;
  border-bottom: 3px solid white;
}

</style>