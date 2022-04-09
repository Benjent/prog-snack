import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
    base: '/prog-snack/',
    plugins: [
        createVuePlugin(),
    ],
})
