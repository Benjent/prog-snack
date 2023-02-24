import Vue from "vue"
import VueRouter from "vue-router"
import { About, Album, Attic, Designers, Discographies, Gems, Stats, Subgenres } from "../views"

Vue.use(VueRouter)

const routes = [
    {
        name: "home",
        path: "/",
        component: Album,
        meta: { title: "Prog Snack - Find your next favorite Prog record" },
    },
    {
        name: "about",
        path: "/about",
        component: About,
        meta: { title: "Prog Snack - About" },
    },
    {
        name: "attic",
        path: "/albums",
        component: Attic,
        meta: { title: "Prog Snack - Albums" },
    },
    {
        name: "designers",
        path: "/designers",
        component: Designers,
        meta: { title: "Prog Snack - Designers" },
    },
    {
        name: "discographies",
        path: "/discographies",
        component: Discographies,
        meta: { title: "Prog Snack - Discographies" },
    },
    {
        name: "gems",
        path: "/gems",
        component: Gems,
        meta: { title: "Prog Snack - Gems" },
    },
    {
        name: "subgenres",
        path: "/subgenres",
        component: Subgenres,
        meta: { title: "Prog Snack - Subgenres" },
    },
    {
        name: "stats",
        path: "/stats",
        component: Stats,
        meta: { title: "Prog Snack - Stats" },
    },
    {
        name: "any",
        path: "*",
        component: Album,
        meta: { title: "Prog Snack - Find your next favorite Prog record" },
    },
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
})

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title
    })
})

export default router
