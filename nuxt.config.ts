import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    devtools: { enabled: true },

    css: ['~/assets/css/tailwind.css'],

    future: {
        compatibilityVersion: 4,
    },

    vite: {
        plugins: [tailwindcss()],
    },

    nitro: {
        compressPublicAssets: true,

        imports: {
            dirs: ["server/utils/**", "utils/**"],
        },
    },

    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
        pageTransition: {
            name: 'fade',
            mode: 'out-in',
        },
        layoutTransition: {
            name: 'fade',
            mode: 'out-in',
        },
    },

    experimental: {
        viewTransition: true,
    },

    typescript: {
        typeCheck: true,
        strict: true,
    },

    modules: [
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxtjs/seo',
        '@nuxt/content',
        '@vueuse/nuxt',
        'shadcn-nuxt',
    ],

    shadcn: {
        prefix: 'Ui',
        componentDir: './app/components/ui',
    },

    components: {
        global: true,
    },

    vueuse: {
        ssrHandlers: true,
    },

    router: {
        options: {
            linkActiveClass: 'link-active',
            linkExactActiveClass: 'link-exact-active text-primary',
        },
    },
})
