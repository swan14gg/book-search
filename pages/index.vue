<script setup lang="ts">
const { keyword, orderBy, getBooks, pending, success, error } = useBook();

const books = ref<Book[]>([]);

async function searchBooks() {
  if (keyword.value === "") {
    return;
  }
  books.value = await getBooks();
}

const errorMessage = computed(() => {
  if (error.value) {
    return "エラーが発生しました。";
  } else if (success.value && books.value.length === 0) {
    return "書籍が見つかりませんでした。";
  } else {
    return "";
  }
});
</script>

<template>
  <Header class="mb-5" />
  <main class="container is-max-desktop px-1">
    <SearchBar class="mb-5" v-model:keyword="keyword" @search="searchBooks" />
    <SelectSearchType
      v-model:order-by="orderBy"
      class="mb-5"
      @change="searchBooks"
    />
    <ErrorMessage v-if="errorMessage" :message="errorMessage" />
    <div v-show="pending" class="columns is-centered is-mobile">
      <LoadingIcon />
    </div>
    <BookCardList :books="books" />
  </main>
</template>
