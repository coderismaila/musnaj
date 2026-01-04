// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-og-image",
    "nuxt-resend",
    "nuxt-maplibre",
  ],
  css: ["~/assets/css/main.css"],
  content: {
    experimental: { nativeSqlite: true },
  },
  mdc: {
    highlight: {
      noApiRoute: false,
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        "maplibre-gl",
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
