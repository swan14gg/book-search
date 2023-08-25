<script setup lang="ts">
import { defineComponent, ref } from "vue";

const emit = defineEmits(["set"]);

type SearchType = "relevance" | "date";
const selected = ref<SearchType>("relevance");

function onChange(event: Event) {
  if (!(event.target instanceof HTMLSelectElement)) return;
  emit("set", event.target.value === "relevance");
}
</script>

<template>
  <div class="field">
    <div class="control">
      <div class="select is-primary is-medium">
        <select v-model="selected" @change="onChange">
          <option value="relevance">関連度順</option>
          <option value="date">日付順</option>
        </select>
      </div>
    </div>
  </div>
</template>
