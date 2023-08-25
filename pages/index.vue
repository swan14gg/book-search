<script setup lang="ts">
const { searchItem } = useSearchItem();
const { setIsByRelevance } = useActionSearchItem(searchItem);
const { result } = useResult();
const { getBookInfos } = useActionResult(result);
const { appState, setIsLoading, setOccuredError } = useAppState();

function updateBookInfos() {
  if (appState.isLoading) return;
  const trimmedTarget = searchItem.searchTarget.trim();
  if (trimmedTarget === "") return;
  searchItem.searchTarget = trimmedTarget;
  setIsLoading(true);
  getBookInfos(searchItem.searchTarget, searchItem.isByRelevance)
    .then(() => {
      setIsLoading(false);
      setOccuredError(false);
    })
    .catch(() => {
      setIsLoading(false);
      setOccuredError(true);
    });
}

function setSearchType(value: boolean) {
  setIsByRelevance(value);
  if (result.searchTarget === "") return;
  searchItem.searchTarget = result.searchTarget;
  updateBookInfos();
}
</script>

<template>
  <Header class="mb-5" />
  <main class="container is-max-desktop">
    <SearchBar
      class="mb-5"
      v-model="searchItem.searchTarget"
      @search="updateBookInfos"
    />
    <SelectSearchType class="mb-5" @set="setSearchType" />
    <ErrorMessage
      v-if="result.isNotFound"
      :message="`「${result.searchTarget}」に一致する書籍は見つかりませんでした。`"
    />
    <ErrorMessage
      v-if="appState.occuredError"
      message="エラーが発生しました。再度お試しください。"
    />
    <div v-show="appState.isLoading" class="columns is-centered is-mobile">
      <LoadingIcon />
    </div>
    <BookCardList :bookInfos="result.bookInfos" />
  </main>
</template>
