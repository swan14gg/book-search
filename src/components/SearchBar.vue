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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    modelValue: String,
  },
  emit: ['search'],
  setup(props, context) {
    const commonClasses = ['is-medium', 'is-rounded', 'is-primary'];
    function onInput(event: InputEvent) {
      if (!(event.target instanceof HTMLInputElement)) return;
      context.emit('update:modelValue', event.target.value);
    }
    function onSubmit() {
      context.emit('search');
    }
    return {
      commonClasses,
      onInput,
      onSubmit,
    };
  },
});
</script>
