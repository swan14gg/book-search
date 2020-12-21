<template>
  <Header class="mb-5" />
  <main class="container">
    <SearchBar class="mb-5" v-model="searchItem.searchTarget" @search="updateBookInfos" />
    <SelectSearchType class="mb-5" @set="setIsByRelevance" />
    <ErrorMessage
      v-if="result.isNotFound"
      :message="`「${result.searchTarget}」に一致する書籍は見つかりませんでした。`"
    />
    <div v-show="appState.isLoading" class="columns is-centered">
      <LoadingIcon />
    </div>
    <BookCardList :bookInfos="result.bookInfos" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';
import SelectSearchType from './SelectSearchType.vue';
import ErrorMessage from './ErrorMessage.vue';
import BookCardList from './BookCardList.vue';
import LoadingIcon from './LoadingIcon.vue';
import useSearchItem from '@/reactive/useSearchItem';
import useActionSearchItem from '@/reactive/useActionSearchItem';
import useResult from '@/reactive/useResult';
import useActionResult from '@/reactive/useActionResult';
import useAppState from '@/reactive/useAppState';
import useActionAppState from '@/reactive/useActionAppState';

export default defineComponent({
  name: 'RootContainer',
  components: {
    Header,
    SearchBar,
    SelectSearchType,
    ErrorMessage,
    BookCardList,
    LoadingIcon,
  },

  setup() {
    const { searchItem } = useSearchItem();
    const { setIsByRelevance } = useActionSearchItem(searchItem);
    const { result } = useResult();
    const { getBookInfos } = useActionResult(result);
    const { appState } = useAppState();
    const { setIsLoading, setOccuredError } = useActionAppState(appState);
    function updateBookInfos() {
      const trimmedTarget = searchItem.searchTarget.trim();
      if (trimmedTarget === '') return;
      searchItem.searchTarget = trimmedTarget;
      setIsLoading(true);
      setOccuredError(false);
      getBookInfos(searchItem.searchTarget, searchItem.isByRelevance)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setOccuredError(true);
        });
    }
    return {
      searchItem,
      setIsByRelevance,
      result,
      appState,
      updateBookInfos,
    };
  },
});
</script>

<style scoped lang="scss">
.centered {
  margin: 0 auto;
}
</style>
