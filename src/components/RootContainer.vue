<template>
  <Header class="mb-5" />
  <main class="container">
    <SearchBar class="mb-5" v-model="searchItem.searchTarget" @search="updateBookInfos" />
    <SelectSearchType class="mb-5" @set="setIsByRelevance" />
    <ErrorMessage
      v-if="result.isNotFound"
      :message="`「${result.searchTarget}」に一致する書籍は見つかりませんでした。`"
    />
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
import useSearchItem from '@/reactive/useSearchItem';
import useActionSearchItem from '@/reactive/useActionSearchItem';
import useResult from '@/reactive/useResult';
import useActionResult from '@/reactive/useActionResult';

export default defineComponent({
  name: 'RootContainer',
  components: {
    Header,
    SearchBar,
    SelectSearchType,
    ErrorMessage,
    BookCardList,
  },

  setup() {
    const { searchItem } = useSearchItem();
    const { setIsByRelevance } = useActionSearchItem(searchItem);
    const { result } = useResult();
    const { getBookInfos } = useActionResult(result);
    function updateBookInfos() {
      getBookInfos(searchItem.searchTarget, searchItem.isByRelevance);
    }
    return {
      searchItem,
      setIsByRelevance,
      result,
      updateBookInfos,
    };
  },
});
</script>
