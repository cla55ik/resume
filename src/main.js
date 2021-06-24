import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss'


//import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika'                               
 
createApp(App).use(VueYandexMetrika, {
    id: 81916312,
    env: "production",
    options:{clickmap:true, trackLinks:true, accurateTrackBounce:true},
    
    
    // other options
    
}).mount('#app')




