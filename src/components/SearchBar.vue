<template>
  <input type="text" :value="modelValue" @input="updateValue">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    modelValue: String
  },
  setup(props, context) {
    function updateValue(event: InputEvent) {
      if (!(event.target instanceof HTMLInputElement)) return;
      context.emit("update:modelValue", event.target.value);
    }
    return {
      updateValue
    }
  }
});
</script>

<style scoped lang="scss">
</style>
