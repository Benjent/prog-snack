import path from "path"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { createVuePlugin } from "vite-plugin-vue2"

export default defineConfig({
    plugins: [
        createVuePlugin(),
        ViteImageOptimizer(),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "src"),
            },
        ],
    },
})
