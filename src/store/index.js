import Vue from 'vue'
import Vuex from 'vuex'
import { dbMenuAdd } from '../../firebase'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basketItems: [
            {
            
            },
        ],
        menuItems: [],
        currentUser: null
    },

    mutations: {
        // addBasketItems: (state, basketItems) => {
        //     if (basketItems instanceof Array) {
        //         basketItems.forEach(item => {
        //             if (state.basketItems.find(itemInArray => item.name === itemInArray.name)) {
        //                 item = state.basketItems.find(itemInArray => item.name === itemInArray.name);
        //                 item.quantity++
        //             }
        //             else {
        //                 state.basketItems.push({
        //                     name: item.name,
        //                     description: item.description,
        //                     price: item.price,
        //                     calories: item.calories,
        //                     quantity: 1,
        //                 })
        //             }

        //         })
        //     }
        // },
        userStatus (state, user) {
            if(user) {
                state.currentUser = user
            }
            else {
                state.currentUser = null
            }
        },
 

    setMenuItems: state => {
        let menuItems = []
        dbMenuAdd.onSnapshot((snapshotItems) => {
            menuItems = []
            snapshotItems.forEach((doc) => {
                var menuItemData = doc.data();
                menuItems.push({
                    ...menuItemData,
                    // name:menuItemData.name,
                    // description: menuItemData.description,
                    // price: menuItemData.price,
                    // calories: menuItemData.calories, 
                    id: doc.id
                })
            })
            state.menuItems = menuItems
        }
    )},
    setQtn: state => {
        let menuQtn = []
        dbMenuAdd.onSnapshot((snapshotItems) => {
            menuQtn = []
            snapshotItems.forEach((doc) => {
                var menuQtnData = doc.data();
                menuQtn.push({
                    ...menuQtnData,
                    // name:menuItemData.name,
                    // description: menuItemData.description,
                    // price: menuItemData.price,
                    // calories: menuItemData.calories, 
                    id: doc.id
                })
            })
            state.menuQtn = menuQtn
        }
    )}
},

    actions: {
        setUser(context, user) {
            context.commit('userStatus', user)
        },
        setMenuItems: context => {
            context.commit('setMenuItems')
        },
        setQtn: context => {
            context.commit('setQtn')
        }
    },
    getters: {
        getBasketItems: state => state.basketItems,
        currentUser: state => state.currentUser,
        getMenuItems: state => state.menuItems,
        getMenuQtn: state => state.menuQtn
    }
})