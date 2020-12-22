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
          <p v-if="subTitle !== ''" class="subtitle is-5">{{ subTitle }}</p>
          <p v-if="description !== ''" class="is-size-6">{{ description }}</p>
        </div>
      </div>
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
    publishedDate: String,
    description: String,
  },
  setup(props) {
    const subTitle =
      props.author + (props.author !== '' && props.publishedDate !== '' ? '・' : '') + props.publishedDate;
    return {
      subTitle,
    };
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
