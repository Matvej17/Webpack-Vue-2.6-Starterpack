//import Vue from '../node_modules/vue/dist/vue'
import axios from 'axios'


try {
    window.$ = window.jQuery = require('jquery')
} catch (e) {}


//window.Vue = Vue
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'


// Mount Vue.js
// const app = new Vue({
//     el: '#app',
//     components: {
//         ExploreSection
//     }
// })


//IMPORT SCSS
import "./styles/main.scss"


//IMPORT SCRIPTS
import "./scripts/menu"