import Vue from "vue"
import VueRouter from "vue-router"
import { About, Album, Attic, Designers, Discographies, Gems, Stats, Subgenres } from "../views"

Vue.use(VueRouter)

const routes = [
    { path: "/", component: Album },
    { path: "/about", component: About },
    { path: "/albums", component: Attic },
    { path: "/designers", component: Designers },
    { path: "/discographies", component: Discographies },
    { path: "/gems", component: Gems },
    { path: "/subgenres", component: Subgenres },
    { path: "/stats", component: Stats },
    { path: "*", component: Album },
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },

})

export default router
