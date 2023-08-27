export default defineNuxtConfig({
  app: {
    head: {
      title: "Book Search",
      meta: [
        {
          name: "description",
          content: "書籍検索アプリケーション",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Daiki" },

        { property: "og:title", content: "Book Search" },
        {
          property: "og:description",
          content: "書籍検索アプリケーション",
        },
        {
          property: "og:image",
          content: "https://book-search.app.swan14gg.dev/ogp.png",
        },

        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Book Search" },
        {
          name: "twitter:description",
          content: "書籍検索アプリケーション",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
        },
      ],
    },
  },
  css: ["assets/styles.scss"],
  devtools:
    process.env.NODE_ENV === "development"
      ? { enabled: true }
      : { enabled: false }, // 本番環境では無効に
});
