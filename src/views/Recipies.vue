<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6">
        <h1>Recipies</h1>
        <div id="info">
          <li v-for="item in menuItems" :key="item.name">
          <span id="td_name">{{ item.name }}</span> <br/>

          
          

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

          <span id="sub">Total calories: {{ item.calories }}</span><br /><br/>
          <h4>Ingredients:</h4>
          <span id="sub"> {{ item.description }}</span><br /><br/>
          <h4>Approach</h4>
          <span id="sub">{{ item.howto }}</span><br /><br/>
          
          <span id="sub">{{ item.price }}</span><br /><br/>
          </li>
          <v-col id="o"></v-col>
          <v-col id="fg"></v-col>
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../firebase";
// import firebase from 'firebase'
// import 'firebase/firestore'

export default {
  data() {
    return {
      basketDump: [],
      menuItems: [
        
        // {
        //   name: 'Frozen Yogurt',
        //   description:"Yogurt, Sugar, Heavy Cream, Corn Syrup",
        //   calories: 159,
        //   price: 15,
        // },
        // {
        //   name: 'Ice cream sandwich',
        //   description:"Milk, Sugar, Eggs, Chocolate, Vanilla, Salt, Butter",
        //   calories: 237,
        //   price: 23,
        // },
        // {
        //   name: 'Eclair',
        //   description:"Water, Milk, Butter, Salt, Sugar, Eggs",
        //   calories: 262,
        //   price: 26,
        // },
        // {
        //   name: 'Cupcake',
        //   description:"Butter, Eggs, Vanilla, Flour, Baking powder, Vanilla, Sugar",
        //   calories: 305,
        //   price: 30,
        // },
        // {
        //   name: 'Gingerbread',
        //   description:"Flour, Molasses, Pure Vanilla Extract, Grounded Ginger, Cinnamon, Grounded Cloves, Eggs, Brown Sugar, Sugar",
        //   calories: 356,
        //   price: 35,
        // },
      ],
    };
    
  },
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
        });
      });
    });
  },

  methods: {
  
    addToBasket(item) {
      //   if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
      //     item = this.basket.find(itemInArray => item.name === itemInArray.name);
      //     this.increaseQtn(item);
      //   }
      //   else {
      //     this.basket.push({
      //       name: item.name,
      //       price: item.price,
      //       calories: item.calories,
      //       quantity: 1,
      //   })
      //  }
      this.basketDump.push({
        name: item.name,
        price: item.price,
        calories: item.calories,
        quantity: 1,
      });
      this.$store.commit("addBasketItems", this.basketDump);
      this.basketDump = [];
    },
    increaseQtn(item) {
      item.quantity++;
    },
    decreaseQtn(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    },
  },
  computed: {
    basket() {
      //return this.$store.state.basketItems;
      return this.$store.getters.getBasketItems;
    },
    subTotal() {
      var subCost = 0;
      for (var items in this.basket) {
        var individualItem = this.basket[items];
        subCost += individualItem.quantity * individualItem.price;
      }
      return subCost;
    },
    calTotal() {
      var caTotal = 0;
      for (var items in this.basket) {
        var individualItem = this.basket[items];
        caTotal += individualItem.quantity * individualItem.calories;
      }
      return caTotal;
    },
    total() {
      var DeliveryPrice = 10;
      var totalCost = this.subTotal;
      return totalCost + DeliveryPrice;
    },
    
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
    map-get($colorz, primary)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  padding: 5%;
   background-color: #e5b285;
}
.col:last-child h1 {
  text-align: center;
}
#info {
  background-color: #faf2e8;
  height: 100%;
  width:100%;
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
 
li{
  list-style: none;
}

h4 {
  font-weight: bold;
  font-size: 30px;
  display:flex; 
  justify-content: center;
  align-items: center;
}
</style>