// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss','@nuxtjs/web-vitals',"@nuxtjs/sitemap",'@nuxt/image'],
  sitemap: {
    hostname: process.env.BASE_URL,
    routes: ['/','about','/contact','/pricing','/privacy-policy','/free-classes', '/contact']
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    'vue-toastification/dist/index.css',
     '@fortawesome/fontawesome-free/css/all.css'
    ],
  build: {
      transpile: ['vue-toastification', '@tiptap/vue-3',
      '@tiptap/starter-kit',
      '@tiptap/pm'],

    },
  app: {
    head: {
       htmlAttrs: {
      lang: 'en'
    },
    title: 'A Plus Tutoring',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        },
         {
          rel: 'icon',
          type: 'image/png',
          href: '/logo-dark.png' 
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/icons/apple-touch-icon.png' 
        },
        {
          rel: 'manifest',
          href: '/webmanifest.json',
        },
      ],
    },
  },
  nitro:{
     compressPublicAssets: true,
    plugins:['~/server/index.ts'],
     prerender: {
      routes: ['/','/about','/contact','/pricing','/privacy-policy','/terms-of-service']
    },
    preset: 'netlify'
  },
    routeRules: {
    // Cache static pages for 1 hour (3600 seconds)
    '/': { swr: 3600 },
    '/about': { swr: 3600 },
    '/contact': { swr: 3600 },
    '/pricing': { isr: 600 },
    '/privacy-policy': { swr: 3600 },
    '/terms-of-service': { swr: 3600 },
  },
  runtimeConfig:{
     mongodburi:process.env.MONGOOSE_URL,
     public: {
      BASE_URL: process.env.BASE_URL 
    }
  },
})
