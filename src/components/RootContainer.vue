<template>
  <Header class="mb-5" />
  <main class="container is-max-desktop">
    <SearchBar class="mb-5" v-model="searchItem.searchTarget" @search="updateBookInfos" />
    <SelectSearchType class="mb-5" @set="setSearchType" />
    <ErrorMessage
      v-if="result.isNotFound"
      :message="`「${result.searchTarget}」に一致する書籍は見つかりませんでした。`"
    />
    <ErrorMessage v-if="result.setOccuredError" message="エラーが発生しました。再度お試しください。" />
    <div v-show="appState.isLoading" class="columns is-centered is-mobile">
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
      if (appState.isLoading) return;
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
          setIsLoading(false);
          setOccuredError(true);
        });
    }
    function setSearchType(value: boolean) {
      setIsByRelevance(value);
      if (result.searchTarget === '') return;
      searchItem.searchTarget = result.searchTarget;
      updateBookInfos();
    }
    return {
      searchItem,
      result,
      appState,
      updateBookInfos,
      setSearchType,
    };
  },
});
</script>
