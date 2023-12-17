// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    'nuxt-icon',
    

    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Kosugi: true,
          "Kosugi+Maru": true,
          Ubuntu: true,
          Prompt: true,
          Hina: true,
        },
        display: "swap",
      },
    ],
    "@nuxt/image",
  ],
  
  css: ["~/assets/css/style.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "aqizakana",
      link: [{ rel: "icon", href: "/logo.png" }],
    },
  },
});
