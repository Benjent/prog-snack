export default {
    install(Vue) {
        Vue.prototype.$getAssetUrl = (path) => path && new URL(path, import.meta.url).href
    },
}
