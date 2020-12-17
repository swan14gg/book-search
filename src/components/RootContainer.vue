<template>
  <Header />
  <SearchBar v-model="state.searchTarget" />
  <SelectSearchType @set="setIsRelevance" />
  {{ state }}
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';
import SelectSearchType from './SelectSearchType.vue';

type State = {
  searchTarget: string;
  isRelevance: boolean;
}

export default defineComponent({
  name: 'RootContainer',
  components: {
    Header,
    SearchBar,
    SelectSearchType,
  },

  setup() {
    const state = reactive<State>({
      searchTarget: "",
      isRelevance: true
    });
    function setIsRelevance(value: boolean) {
      state.isRelevance = value;
    }
    return {
      state,
      setIsRelevance
    }
  },
});
</script>
