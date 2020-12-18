<template>
  <div class="field">
    <div class="control">
      <div class="select is-primary is-medium">
        <select v-model="selected" @change="onChange">
          <option :value="searchType[0]">関連度順</option>
          <option :value="searchType[1]">日付順</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SelectSearchType',
  emit: ["set"],
  setup(props, context) {
    const searchType = [
      "relevance", "date"
    ]
    const selected = ref(searchType[0]);
    function onChange(event: Event) {
      if (!(event.target instanceof HTMLSelectElement)) return;
      context.emit("set", event.target.value === searchType[0]);
    }
    return {
      searchType,
      selected,
      onChange
    }
  },
});
</script>
