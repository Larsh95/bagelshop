<template>
    <v-container>
        <v-row>
            <v-col offset-md="2" md="8">
              <h1>Current Recipies</h1>
            <div class="pa-2"  id="info">
                <v-simple-table id="menu-table">
                <template v-slot:default>
                <thead>
                     <tr>
          <th class="text-left" style="width:70%;">Name
              <v-btn color="orange" small text to="/addNew">
                  <v-icon>add</v-icon> 
                  <span style="padding:0 10px;">Add Item</span>
                  </v-btn>
          </th>
          <th class="text-left" style="width:100px">Ingredients</th>
          <th class="text-left" style="width:100px">Calories</th>
          <th class="text-left" style="width:100px">Approach</th>
          
        </tr>
         </thead>
         <tbody>
        <tr v-for="item in menuItems" :key="item.name">
          <td>
            <span id="td_name">{{ item.name }}</span>  <br>
            <span id="menu_item_desc">{{ item.description }}</span>  
            </td>
          <td>{{ item.calories }}</td>
          <td>{{ item.price }}</td>
          
          
            <td>
              <v-btn small text>
                <v-icon color="orange">edit</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn small text  @click="deleteItem(item.id)">
                <v-icon color=incomplete>delete</v-icon>
              </v-btn>
            </td>
                </tr>
                    </tbody>
                  </template>
               </v-simple-table>
               </div>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>

import { dbMenuAdd } from '../../firebase'

export default {
    data () {
      return {
        basket: []
      }
    },

    beforeCreated() {
      this.$store.dispatch('setMenuItems')
    },
methods: {
      deleteItem(id) {
        dbMenuAdd.doc(id).delete().then(function(){
           // console.log("Document sucessfully deleted");
        }).catch(function(error) {
           console.error("Error removing item: ", error);
        });
      }, 
      addToBasket(item) {
        if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
          item = this.basket.find(itemInArray => item.name === itemInArray.name);
          this.increaseQtn(item);
        }
        else {
          this.basket.push({
            name: item.name,
            price: item.price,
            calories: item.calories,
            quantity: 1,
        })
       }
      },
      increaseQtn(item) {
        item.quantity++
      },
      decreaseQtn(item) {
        item.quantity--;
        if (item.quantity === 0) {
          this.basket.splice(this.basket.indexOf(item), 1)
        }
      },
    },
    computed: {
      menuItems() {
        return this.$store.getters.getMenuItems
      },
        subTotal () {
          var subCost = 0;
          for(var items in this.basket) {
            var individualItem = this.basket[items]; 
            subCost += individualItem.quantity * individualItem.price
          }
          return subCost
        },
         calTotal () {
          var caTotal = 0;
          for(var items in this.basket) {
            var individualItem = this.basket[items]; 
            caTotal += individualItem.quantity * individualItem.calories
          }
          return caTotal
        }
      }
     
  }
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
  padding:5%;
}
.col:last-child  h1{
  
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

#basket_checkout{
  font-size: 13px;
  
}
#basket_checkout p:first-child{
  line-height: 2px;
}


</style>