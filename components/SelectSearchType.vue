<script setup lang="ts">
type Props = {
  orderBy: OrderByType;
};
const props = defineProps<Props>();
const emit = defineEmits(["update:orderBy", "change"]);

const orderBy = computed({
  get: () => props.orderBy,
  set: (value) => emit("update:orderBy", value),
});
</script>

<template>
  <div class="field">
    <div class="control">
      <div class="select is-primary is-medium">
        <select v-model="orderBy" @change="emit('change')">
          <option value="relevance">関連度順</option>
          <option value="newest">日付順</option>
        </select>
      </div>
    </div>
  </div>
</template>
