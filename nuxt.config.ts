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
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["assets/styles.scss", "@fortawesome/fontawesome-free/css/all.css"],
  devtools:
    process.env.NODE_ENV === "development"
      ? { enabled: true }
      : { enabled: false }, // 本番環境では無効に
});
