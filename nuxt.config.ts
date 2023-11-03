// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "florify",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        // },
      ],
    },
  },
  modules: ["@element-plus/nuxt", "@pinia/nuxt"],
  // io: {
  //   sockets: [
  //     {
  //       url: "https://testzone-xc93.onrender.com",
  //       default: true,
  //     },
  //   ],
  // },
  css: ["~/assets/main.scss"],
  // plugins: [{ src: "~/plugins/socket.js", ssr: false }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
