<template>
    <v-container>
        <v-row>
            <v-col offset-md="1" md="5">
              <h1>Add New item</h1>
            <div class="pa-2"  id="info">
                <v-text-field 
                label="Name of item"
                required
                v-model="name"
                >
                 </v-text-field>
                <v-text-field 
                label="Recipie"
                required
                v-model="recipie"
                >
                 </v-text-field>
                <v-text-field 
                label="Price"
                required
                v-model="price"
                >
                 </v-text-field>
                <v-text-field 
                label="Calories"
                required
                v-model="calories"
                >
                </v-text-field>
                <v-btn
                color="complete"
                @click="addNewMenuItem()"
                >
                Add Item
                </v-btn>
                <v-btn
                color="incomplete"
                 
                >
                Cancel
                </v-btn>
               </div>
            </v-col>

            <v-col offset-md="1" md="4">
              <h1>Preview</h1>
            <div class="pa-2" id="info">
                <v-simple-table id="menu-table">
                    <thead>
                        <tr>
                            <th class="text-left" style="width:70%">Name</th>
                            <th class="text-left" style="width:100px">Recipie</th>
                            <th class="text-left" style="width:100px">Price DKK</th>
                            <th class="text-left" style="width:30%">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span id="td_name"> {{name}} </span>
                            </td>
                            <td>
                                <span id="menu_item_desc"> {{recipie}} </span>
                            </td>
                            <td id="preview_menuitem_price">{{price}}</td>
                            <td id="preview_menuitem_calories">{{calories}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
               </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { dbMenuAdd } from '../../../firebase'

export default {
    data () {
      return {
          name: '',
          recipie: '',
          price: '',
          calories: '',
    }
  },
  methods: {
      addNewMenuItem() {
          dbMenuAdd.add({
              name: this.name,
              recipie: this.recipie,
              price: this.price,
              calories: this.calories,
          })
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