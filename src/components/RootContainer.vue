<template>
  <Header />
  <SearchBar v-model="state.searchTarget" @search="updateBookInfos" />
  <SelectSearchType @set="setIsByRelevance" />
  <BookCard />
  {{ bookInfos }}
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
    function updateBookInfos() {
      getBookInfos(state.searchTarget, state.isByRelevance);
    }
    return {
      state,
      setIsByRelevance,
      bookInfos,
      updateBookInfos
    }
  },
});
</script>

<style scoped lang="scss">
</style>
