<template>
  <Header />
  <SearchBar v-model="searchTarget" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';

export default defineComponent({
  name: 'RootContainer',
  components: {
    Header,
    SearchBar
  },
  setup() {
    const searchTarget = ref('');
    return {
      searchTarget
    }
  },
});
</script>

<style scoped lang="scss">
</style>
