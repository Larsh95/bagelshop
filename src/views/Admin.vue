<template>
    <v-container>

<v-snackbar
      v-model="updatedSuccess"
      top
      color="#db885c"
      rounded
    >
      {{ updatedText }}

        <v-btn
          color="White"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      
    </v-snackbar>


        <v-row>
            <v-col offset-md="1" md="10">
              
              
            <div class="pa-2"  id="info">
              <h1>Current Recipies 
                </h1>
                <v-btn id="add_new" color="orange" small text to="/addNew">
                  <v-icon>add</v-icon> 
                  <span style="padding:0 10px;">Add Recipie</span>
                  </v-btn>
                <v-simple-table id="menu-table">
                <template v-slot:default>
                <thead>
                     <tr>
          <th class="text-left" style="width:100px;">Name of Recipie
              
          </th>
          <th class="text-left" style="width:100px">Img</th>
           <th class="text-left" style="width:100px">Calories</th>
          <th class="text-left" style="width:100px">Ingredients</th>
         
          <th class="text-left" style="width:100px">Approach</th>
          <th class="text-left" style="width:100px">Edit</th>
          <th class="text-left" style="width:100px">Delete</th>
          
        </tr>
         </thead>
         <tbody>
        <tr v-for="item in menuItems" :key="item.name">
          <td>
            <span id="td_name">{{ item.name }}</span>  <br>
            
            
            </td>
            <div id="divImage">
            <v-img v-bind:src="item.image"></v-img>
            </div>
            <td>{{ item.calories }}</td>
            <td>{{item.description }}</td>
          
          <td>{{ item.price }}</td>
          
          
            <td>
              <v-btn small text id="edit">
                <v-icon color="orange"
                @click.stop="dialog = true"
                @click="editItem(item)"
                >edit</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn id="del" small text  @click="deleteItem(item.id)">
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
        <v-row>
              <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        
        
        <div class="pa-5" id="info" >
          <h2>Edit Recipie</h2>
          <v-text-field label="Name of Recipie"  v-model="item.name"
          background-color="white">
          </v-text-field>

          <!-- <v-file-input label="File input" @change="uploadImage"> </v-file-input> -->


          <v-textarea
            auto-grow
            rows="1"
            row-height="15"
            label="Ingredients"
            required
            v-model="item.description"
            placeholder
            wrap
            background-color="white"
          >
          </v-textarea>

          <v-textarea
            auto-grow
            rows="1"
            row-height="15"
            label="Approach"
            required
            v-model="item.price"
            placeholder
            wrap
            background-color="white"
          >
          </v-textarea>

          <v-text-field label="Calories" required v-model="item.calories"
          background-color="white">
          </v-text-field>

          <v-row id="btnRow">
            <v-col>
          <v-btn 
          id="add"
          @click="updateItem()"
          
          > 
          Edit Item </v-btn></v-col>
          <v-col align="right">
          <v-btn id="cancel"
          @click.stop="dialog = false"> Close </v-btn>
          </v-col>
          </v-row>
        </div>

      </v-card>
    </v-dialog>
        </v-row>
    </v-container>
</template>

<script>

import { dbMenuAdd } from '../../firebase'

export default {
    data () {
      return {
        basket: [],
        dialog: false,
        item: [],
        activeEditItem: null,
        updatedSuccess: false,
        updatedText: 'The recipie has been updated!'
      }
    },

    beforeCreate() {
      this.$store.dispatch('setMenuItems')
    },
      //  created() {
      //   dbMenuAdd.get().then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       console.log(doc.id, " => ", doc.data());
      //       var menuItemData = doc.data();
      //       this.menuItems.push({
      //         id: doc.id,
      //         name: menuItemData.name,
      //         description: menuItemData.description,
      //         price: menuItemData.price,
      //         calories: menuItemData.calories     
      //       })
      //     })
      //   })
      // },
methods: {
      editItem(item) {
        this.item = item
        this.activeEditItem = item.id
      },
      updateItem() {
        dbMenuAdd.doc(this.activeEditItem).update(this.item)
        .then(() => {
          this.updatedSuccess = true;
          console.log("document updated");
        })
        .catch(function(error) {
          console.error("Error updating Document: ", error);
        })
      },
      deleteItem(id) {
        dbMenuAdd.doc(id).delete()
        .then(function(){
           // console.log("Document sucessfully deleted");
        })
        .catch(function(error) {
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
    map-get($colorz, pastry),
    10px,
    5px,
    map-get($colorz, orange)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5em;
  text-align: right;
  padding:5%;
  display:flex;
  align-items: center;
  justify-content: center;
  height:30px;
  
}

#info {
    background-color: #faf2e8;
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

#add_new{
  display:flex;
  justify-content: flex-start;
  background-color: #faf2e8;
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
}
#add, #cancel {
  background-color: #db885c;
  color: white;
}
#btnRow{
  height: auto;
}

#divImage{
  display:flex;
  justify-content: center;
  align-items: center;
  max-width: 50px;
  max-height: 30px;
  margin-top: 5%;
}

@media (min-width: 900px) {
   
}
</style>