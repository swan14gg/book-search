export default function () {
  const maxResults = 40;
  const noCoverThumbnail =
    "https://books.google.co.jp/googlebooks/images/no_cover_thumb.gif";

  const keyword = ref("");
  const orderBy = ref<OrderByType>("relevance");

  const { data, refresh, status } = useFetch<ApiData>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      query: {
        q: keyword,
        orderBy,
        maxResults,
        projection: "lite",
      },
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }
  );

  const pending = computed(() => status.value === "pending");
  const success = computed(() => status.value === "success");
  const error = computed(() => status.value === "error");

  async function getBooks(): Promise<Book[]> {
    await refresh();
    if (data.value === null || data.value.items === undefined) {
      return [];
    }
    const books = data.value.items.map((item) => {
      const authors = item.volumeInfo.authors?.join(", ") ?? "";
      const publishedDate = item.volumeInfo.publishedDate ?? "";
      const description = item.volumeInfo.description ?? "";
      const thumbnail =
        item.volumeInfo.imageLinks?.thumbnail ?? noCoverThumbnail;
      return {
        id: item.id,
        title: item.volumeInfo.title,
        authors,
        publishedDate,
        description,
        thumbnail,
        previewLink: item.volumeInfo.previewLink,
      };
    });
    return books;
  }
  return {
    keyword,
    orderBy,
    getBooks,
    pending,
    success,
    error,
  };
}
