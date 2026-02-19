import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve('index.html'),
                biographie: resolve('biographie.html'),
                contact: resolve('contact.html'),
                galerie: resolve('galerie.html'),
            },
        },
    },
})
