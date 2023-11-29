import path from "path"
import vue from '@vitejs/plugin-vue'
import { defineConfig } from "vitest/config"

// TODO component testing is broken since the migration from Jest
// TODO double-criteria check is broken since the migration to vite
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "src"),
            },
        ],
    },
})
