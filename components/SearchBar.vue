<script setup lang="ts">
type Props = {
  modelValue: string;
};
defineProps<Props>();

const emit = defineEmits(["update:modelValue", "search"]);

const commonClasses = ["is-medium", "is-rounded", "is-primary"];
function onInput(event: Event) {
  if (!(event.target instanceof HTMLInputElement)) return;
  emit("update:modelValue", event.target.value);
}
function onSubmit() {
  emit("search");
}
</script>

<template>
  <form class="field has-addons" @submit.prevent="onSubmit">
    <div class="control has-icons-left is-flex-grow-1">
      <input
        type="search"
        class="input"
        :class="[commonClasses]"
        placeholder="Search books..."
        :value="modelValue"
        @input="onInput"
      />
      <span class="icon is-left">
        <i class="fas fa-book"></i>
      </span>
    </div>
    <div class="control">
      <button type="submit" class="button" :class="[commonClasses]">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </form>
</template>
