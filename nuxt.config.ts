// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  },
  plugins: [
    { src: './plugins/vue-swipe-modal.ts', mode: 'client' }
  ],
})

