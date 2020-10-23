<template>
  <v-container>
    <v-row>
      <v-col offset-md="1" md="5">
        <h1>Add New item</h1>
        <div class="pa-2" id="info">
          <v-text-field label="Name of item" required v-model="name">
          </v-text-field>

          
          <v-file-input label="File input" @change="uploadImage"> </v-file-input>

          <v-text-field 
          label="description" 
          required 
          v-model="description">
          </v-text-field>


          <v-textarea
            auto-grow
            outlined
            rows="1"
            row-height="15"
            label="Price"
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
          <v-btn 
          color="complete" 
          @click="addNewMenuItem()"
          :disabled="btnDisable"
          > 
          Add Item </v-btn>
          <v-btn color="incomplete"> Cancel </v-btn>
        </div>
      </v-col>

      <v-col offset-md="1" md="4">
        <h1>Preview</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu-table">
            <thead>
              <tr>
                <th class="text-left" style="width: 70%">Name</th>
                <th class="text-left" style="width: 100px">description</th>
                <th class="text-left" style="width: 100px">Price DKK</th>
                <th class="text-left" style="width: 30%">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span id="td_name"> {{ name }} </span>
                </td>
                <td>
                  <span id="menu_item_desc"> {{ description }} </span>
                </td>
                <td id="preview_menuitem_price">{{ price }}</td>
                <td id="preview_menuitem_calories">{{ calories }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd, fb } from "../../../firebase";
// import firebase from 'firebase'
// import 'firebase/firestore'

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      calories: "",
      image: null,
      
    };
  },
  methods: {
    uploadImage(e) {
      
      let file = e.target.files[0];
      console.log(e.target.files[0]);
      var storageRef = fb.storage().ref('products/' + file.name);
      let uploadTask = storageRef.put(file);

      uploadTask.on('state_changed', () => {

      }, () => {

      }, () => {
        
        uploadTask.snapshot.ref.getDownloadURL().then((DownloadURL) => {
          this.image = DownloadURL;
          this.btnDisable = false;
          console.log('File available at', DownloadURL);
          
        });
      });

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
    map-get($colorz, white),
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
  background-color: white;
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
</style>