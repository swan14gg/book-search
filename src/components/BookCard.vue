<template>
  <a class="card" :href="link" target="_blank">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image">
            <img :src="imgSrc" :alt="title" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-4">{{ author }}</p>
        </div>
      </div>
      <div v-if="description !== ''" class="content is-size-6">{{ description }}</div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookCard',
  props: {
    link: String,
    imgSrc: String,
    title: String,
    author: String,
    description: String,
  },
});
</script>

<style scoped lang="scss">
.image {
  width: 100px;
}
.media-content {
  overflow: hidden;
}
.card {
  display: block;
}
</style>
