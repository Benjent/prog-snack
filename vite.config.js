import path from "path"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import vue from "@vitejs/plugin-vue2"

// Since Vue 2.7 migration, test fails when calling wrapper.emitted() after a custom event trigger
// Calling await wrapper.vm.$nextTick(), await wrapper.vm.$forceUpdate() or await new Promise((resolve) => setTimeout(resolve)) does not fix this
// It seems that component is never re-rendered when it should. Wait for Vue 3 migration?
export default defineConfig({
    base: "./",
    plugins: [vue(), ViteImageOptimizer()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "src"),
            },
        ],
    },
})
