<template>
  <form class="field has-addons">
    <div class="control has-icons-left">
      <input type="search" class="input" :class="[commonClasses]" placeholder="Search books..." :value="modelValue" @input="updateValue">
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
    modelValue: String
  },
  setup(props, context) {
    const commonClasses = [
      "is-medium", "is-rounded", "is-primary"
    ]
    function updateValue(event: InputEvent) {
      if (!(event.target instanceof HTMLInputElement)) return;
      context.emit("update:modelValue", event.target.value);
    }
    return {
      commonClasses,
      updateValue
    }
  }
});
</script>
