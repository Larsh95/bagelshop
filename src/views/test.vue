<template>
    <v-container>
        <v-row>
            <v-col offset-md="1" md="5">
              <h1>Menu Items</h1>
            <div class="pa-2"  id="info">
              
                <v-simple-table id="menu-table">
                <template v-slot:default>
                <thead>
                     <tr>
          <th class="text-left" style="width:70%;">Name</th>
          <th class="text-left" style="width:100px">Calories</th>
          <th class="text-left" style="width:100px">Price</th>
          <th class="text-left">Add to Basket</th>
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
            <v-btn text small @click="addToBasket(item)">
              <v-icon color="orange">add_box</v-icon>
              </v-btn>
            </td>
                </tr>
                    </tbody>
                  </template>
               </v-simple-table>
               </div>
            </v-col>

            <v-col offset-md="1" md="4">
              <h1>Current Basket</h1>
            <div class="pa-2" id="info">
              <v-simple-table id="menu-table" v-if="basket.length > 0 ">
                <template v-slot:default>
                <thead>
                     <tr>
          <th class="text-left" style="width:50%;">Quantity</th>
          <th class="text-left" style="width:50%">Name</th>
          <th class="text-left" style="width:2%">image</th>
          <th class="text-left" style="width:2%">Calories</th>
        </tr>
         </thead>
         <tbody>
        <tr v-for="item in basket" :key="item.name">
          <td>
            <v-icon color="orange" @click="increaseQtn(item)">add_box</v-icon>
            {{ item.quantity }} 
            <v-icon color="orange" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
            </td>
            <td>{{ item.name }}</td>
           <td>{{ item.image }}</td>
           <td>{{ item.calories }}</td>
                </tr>
                    </tbody>
                  </template>
               </v-simple-table>

               <v-simple-table v-else>
                 <p>The basket is empty</p>
               </v-simple-table>
               <v-divider></v-divider>
              <v-row id="basket_checkout" class="mt-4, p-0" style="margin:0;">
                <v-col>
                  
                  <p>Subtotal:</p>
                  <p>Delivery:</p>
                  <p>Total amount:</p>
                  
                </v-col>

                <v-col class="text-right" style="margin-left:30%;">
                <p>{{ subTotal }} DKK</p>
                <p>10 DKK</p>
                <p> <b>{{total}} DKK</b> </p>
               
                </v-col>
                <v-col class="text-right">
                  <p>Calories: <br></p>
                  <p>
                  {{ calTotal }}</p>
                </v-col>
              </v-row>
              <v-col style="margin:0;" class="text-right" >
                  <v-btn color="orange">
                    checkout
                  </v-btn>
              </v-col>
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