// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    'vue-toastification/dist/index.css',
     '@fortawesome/fontawesome-free/css/all.css'
    ],
  build: {
      transpile: ['vue-toastification', '@tiptap/vue-3',
      '@tiptap/starter-kit',
      '@tiptap/pm']
      
    },
  app: {
    head: {
       htmlAttrs: {
      lang: 'en'
    },
    title: 'A Plus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
  nitro:{
    plugins:['~/server/index.ts']
  },
  runtimeConfig:{
    mongodburi:process.env.MONGOOSE_URL
  },
})
