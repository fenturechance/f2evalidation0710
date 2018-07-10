import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import CreateAccount from './components/CreateAccount'
import GeneralInfo from './components/GeneralInfo'
import UpdatePic from './components/UpdatePic'
import PaymentMethod from './components/PaymentMethod'
import Progress from './components/Progress'
import Finish from './components/Finish'

import fontawesome from '@fortawesome/fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'
import faRegular from '@fortawesome/fontawesome-free-regular'
import faBrands from '@fortawesome/fontawesome-free-brands'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('Progress',Progress);

const router = new VueRouter({
    routes : [
        { path : '/' , component : CreateAccount },
        { path : '/GeneralInfo' , component : GeneralInfo },
        { path : '/UpdatePic' , component : UpdatePic },
        { path : '/PaymentMethod' , component : PaymentMethod },
        { path : '/Finish' , component : Finish },
    ]
});

// router.beforeEach((to,from,next)=>{

// })

const store = new Vuex.Store({
    state: {

    },
    getters:{

    }
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
