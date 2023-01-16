export default {
  telemetry: false,
  head: {
    title: "nuxt-exam",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  router: {
    middleware: "auth",
  },
  css: ["~/assets/styles/main.css"],
  serverMiddleware: ["~/api/index.js"],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    "nuxt-buefy",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],
  axios: {
    baseURL: "http://localhost:3000/api"
  },
  auth: {
    watchLoggedIn: true,
    strategies: {
      local: {
        endpoints: {
          login: { url: "auth/login", method: "post", propertyName: "login" },
          user: { url: "auth/on-auth", method: "get", propertyName: "onAuth" },
          logout: false
        }
      }
    }
  },
  build: {},
};
