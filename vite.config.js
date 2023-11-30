import path from "path"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
    plugins: [
        vue(),
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
