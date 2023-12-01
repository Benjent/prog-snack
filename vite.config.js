import path from "path"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import vue from "@vitejs/plugin-vue2"

// Tests fail because of the following:
/*
Error: [vue-test-utils]: window is undefined, vue-test-utils needs to be run in a browser environment.
You can run the tests in node using jsdom
*/
// ... But no jsdom option is present in the vue-test-utils config
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
