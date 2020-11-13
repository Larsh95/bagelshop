<template>
  <v-container height="1920px">
    <v-row>
      <v-col offset-md="3" md="6">
        <h1>Recipies</h1>
        <div id="info">
          <li v-for="item in menuItems" :key="item.name">
            <span id="td_name">{{ item.name }}</span> <br />

            <div id="divImage">
            <v-img v-bind:src="item.image"></v-img>
            </div>

            <!-- <div >
            <div >
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
         </div>
 
       <div v-if="imageData!=null">                     
          <img class="preview" height="268" width="356" :src="img1">
       <br>
       </div>   
      
       </div> -->

            <span id="sub">Total Calories: {{ item.calories }}</span
            ><br /><br />
            <v-row>
              <v-col>
                <div class="pa-2">
                  <h4>Ingredients:</h4>
                  <div class="pa-2">
                    <span id="sub"> {{ item.description }}</span
                    ><br /><br />
                  </div>
                </div>
              </v-col>
              <v-col>
                <div class="pa-2">
                  <h4>Approach</h4>
                  <div class="pa-2">
                    <span id="sub">{{ item.price }}</span
                    ><br /><br />
                  </div>
                </div>
              </v-col>
            </v-row>
            <hr />

          
            <v-row class="d-flex justify-center" id="commentBox">
              <v-col class="d-flex justify-center">
            <v-btn class="ma-4">
            <v-icon color="orange" @click="increaseRating(qtn)"
              >mdi-thumb-up</v-icon
            >
            </v-btn>
            <span id="below">0</span>
            </v-col>
            
            <v-col class="d-flex justify-center">
              
            <v-btn class="ma-4">
              
            <v-icon color="orange" @click="decreaseRating(qtn)"
              >mdi-thumb-down</v-icon
            >
            </v-btn>
            
            <span id="below">0</span>
            </v-col>
            
            </v-row>
           
            <!-- <v-rating
              empty-icon="mdiStarOutline"
              full-icon="mdiStar"
              half-icon="mdiStarHalfFull"
              hover
              length="5"
              size="10"
              @click="addNewRating()"
            ></v-rating> -->
            <hr />

            <Comments/>

            <hr />
          </li>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Comments from '../components/Comments.vue'
import { dbMenuAdd } from "../../firebase";
// import firebase from 'firebase'
// import 'firebase/firestore'

export default {
  components: {
    Comments
  },
  data() {
    return {
      basketDump: [],
      menuItems: [],
      setQtn: [],
      decreaseRating: -1,
      increaseRating: +1,
    };
  },
// beforeCreate() {
//       this.$store.dispatch('setMenuItems')
//     },
  created() {
    dbMenuAdd.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        var menuItemData = doc.data();
        this.menuItems.push({
          id: doc.id,
          name: menuItemData.name,
          description: menuItemData.description,
          price: menuItemData.price,
          calories: menuItemData.calories,
          image: menuItemData.image,
        });
      });
    });
    // dbQtn.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log(doc.id, " => ", doc.data());
    //     var qtn = doc.data();
    //     this.qtn.push({
    //       id: doc.id,
    //       qtn: qtn.name,
    //     });
    //   });
    // });
  },

  

  methods: {

    // addNewRatings(qtn) {
    //   qtn.increaseQtn++;
    //   qtn.decreaseQtn--;
    // },

    //   addToBasket(item) {
    //    if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
    //      item = this.basket.find(itemInArray => item.name === itemInArray.name);
    //        this.increaseQtn(item);
    //     }
    //     else {
    //       this.basket.push({
    //          name: item.name,
    //          price: item.price,
    //         calories: item.calories,
    //          quantity: 1,
    //     })
    //     }
    //   this.basketDump.push({
    //        name: item.name,
    //        price: item.price,
    //        calories: item.calories,
    //       quantity: 1,
    //     });
    //      this.$store.commit("addBasketItems", this.basketDump);
    //      this.basketDump = [];
    //   },
    //   increaseQtn(item) {
    //     item.quantity++;
    //   },
    //   decreaseQtn(item) {
    //     item.quantity--;
    //     if (item.quantity === 0) {
    //       this.basket.splice(this.basket.indexOf(item), 1);
    //     }
    //   },
  },
  computed: {
    // menuItems() {
    //     return this.$store.getters.getMenuItems
    //   },
  },
};
</script>

<style lang="scss" scoped>
.col h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, nav),
    10px,
    5px,
    map-get($colorz, white)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2em;
  text-align: center;
  padding: 5%;
  background-color: #e5b285;
}
.col:last-child h1 {
  text-align: center;
}
#info {
  background-color: #faf2e8;
  height: auto;
  width: 100%;
}
#sub {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
}
#td_name {
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
}

h4 {
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
hr {
  border: 3px solid white;
  margin-top: 20px;
  margin-bottom: 20px;
}
#below {
  margin-bottom: auto;
  margin-top: auto;
}
#divImage{
  display:flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin:auto;
  margin-bottom: 5%;
}
</style>