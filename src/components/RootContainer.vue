<template>
  <Header class="mb-5" />
  <main class="container">
    <SearchBar class="mb-5" v-model="state.searchTarget" @search="updateBookInfos" />
    <SelectSearchType class="mb-5" @set="setIsByRelevance" />
    <BookCardList :bookInfos="bookInfos" />
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';
import SelectSearchType from './SelectSearchType.vue';
import BookCardList from './BookCardList.vue';
import useBookInfos from '@/composables/use-bookinfos';
import useActionBookInfos from '@/composables/use-action-bookinfos';

type State = {
  searchTarget: string;
  isByRelevance: boolean;
};

export default defineComponent({
  name: 'RootContainer',
  components: {
    Header,
    SearchBar,
    SelectSearchType,
    BookCardList,
  },

  setup() {
    const state = reactive<State>({
      searchTarget: '',
      isByRelevance: true,
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
      updateBookInfos,
    };
  },
});
</script>
