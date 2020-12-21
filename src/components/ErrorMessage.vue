<template>
  <p class="has-text-danger">{{ message }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorMessage',
  props: {
    message: String,
  },
});
</script>
