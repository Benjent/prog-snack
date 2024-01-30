export default {
    install(Vue) {
        // Does not work on production
        // Vue.prototype.$getAssetUrl = (path) => path && new URL(path, import.meta.url).href
        Vue.prototype.$getAssetUrl = (path) => {
            // See "Retrieve items from a Pinia action in Nuxt3" section
            // https://keith-mifsud.me/blog/build-and-deploy-nuxt3-static-site-with-pinia-and-stripe-checkout-on-firebase
            const assets = import.meta.glob("/src/assets/**", { eager: true })
            if (assets[path]) {
                return assets[path].default
            }
        }
    },
}
