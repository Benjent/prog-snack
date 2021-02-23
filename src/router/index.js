import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Album from '../views/Album.vue'
import Attic from '../views/Attic.vue'
import Designers from '../views/Designers.vue'
import Discographies from '../views/Discographies.vue'
import Gems from '../views/Gems.vue'
import Stats from '../views/Stats.vue'
import Subgenres from '../views/Subgenres.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Album },
    { path: '/about', component: About },
    { path: '/albums', component: Attic },
    { path: '/designers', component: Designers },
    { path: '/discographies', component: Discographies },
    { path: '/gems', component: Gems },
    { path: '/subgenres', component: Subgenres },
    { path: '/stats', component: Stats },
]

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})

export default router
