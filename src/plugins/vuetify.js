import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#333333',
                secondary: '#2B2B2B',
                white: '#ffffff',
                darkgrey: '#707070',
                orange:'#FC6D2B',
                complete:'#2BFC83',
                inprogress: '#FFB936',
                incomplete: '#FF1212',
                lightgrey: '#cacaca'
            }
        }
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
    
});
