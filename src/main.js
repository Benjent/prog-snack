import { createApp } from "vue"
import VueMq from "vue3-mq"
// import Transitions from "vue2-transitions"

import App from "./App.vue"
import filters from "./filters"
import router from "./router"
import store from "./store"

// Vue.use(Transitions)

const app = createApp(App)
app.config.globalProperties.$filters = filters
app.config.globalProperties.$getAssetUrl = (path) => path && new URL(path, import.meta.url).href
app.use(router)
app.use(store)
app.use(VueMq, {
    breakpoints: {
        M: 981, // $mobile + 1
        L: Infinity,
    },
})
app.mount("#app")
