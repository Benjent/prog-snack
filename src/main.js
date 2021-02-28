import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'
import filters from './filters'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueMq, {
    breakpoints: {
        M: 981, // $mobile + 1
        L: Infinity,
    },
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
