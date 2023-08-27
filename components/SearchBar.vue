<script setup lang="ts">
type Props = {
  keyword: string;
};
const props = defineProps<Props>();
const emit = defineEmits(["update:keyword", "search"]);

const keyword = computed({
  get: () => props.keyword,
  set: (value) => emit("update:keyword", value),
});

function handleSubmit() {
  emit("search");
}
const commonClasses = ["is-medium", "is-rounded", "is-primary"];
</script>

<template>
  <form class="field has-addons" @submit.prevent="handleSubmit">
    <div class="control has-icons-left is-flex-grow-1">
      <input
        v-model="keyword"
        type="search"
        class="input"
        :class="[commonClasses]"
        placeholder="Search books..."
      />
      <span class="icon is-left">
        <span class="material-symbols-outlined"> library_books </span>
      </span>
    </div>
    <div class="control">
      <button type="submit" class="button" :class="[commonClasses]">
        <span class="material-symbols-outlined"> search </span>
      </button>
    </div>
  </form>
</template>
