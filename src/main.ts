import Vue from "vue"
import VueMq from "vue-mq"
import Transitions from "vue2-transitions"
import Filters from "./plugins/Filters"

import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false
Vue.use(Filters)
Vue.use(VueMq, {
    breakpoints: {
        M: 981, // $mobile + 1
        L: Infinity,
    },
})
Vue.use(Transitions)
Vue.use(Transitions)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
