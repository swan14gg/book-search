<template>
  <Header />
  <SearchBar v-model="state.searchTarget" />
  <SelectSearchType @set="setIsRelevance" />
  <BookCard />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';
import SelectSearchType from './SelectSearchType.vue';
import BookCard from './BookCard.vue';

import useBookInfos from '@/composables/use-bookinfos';
import useActionBookInfos from '@/composables/use-action-bookinfos';

type State = {
  searchTarget: string;
  isByRelevance: boolean;
}

export default defineComponent({
  name: 'RootContainer',
  components: {
    Header,
    SearchBar,
    SelectSearchType,
    BookCard,
  },

  setup() {
    const state = reactive<State>({
      searchTarget: "",
      isByRelevance: true
    });
    function setIsByRelevance(value: boolean) {
      state.isByRelevance = value;
    }
    const { bookInfos } = useBookInfos();
    const { getBookInfos } = useActionBookInfos(bookInfos);
    return {
      state,
      setIsByRelevance,
      bookInfos,
      getBookInfos
    }
  },
});
</script>

<style scoped lang="scss">
</style>
