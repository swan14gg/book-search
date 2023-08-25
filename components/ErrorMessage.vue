<script setup lang="ts">
type Props = {
  message: string;
};
defineProps<Props>();
</script>

<template>
  <p class="has-text-danger">{{ message }}</p>
</template>
