<script setup lang="ts">
type Props = {
  link: string;
  imgSrc: string;
  title: string;
  author: string;
  publishedDate: string;
  description: string;
};

const props = defineProps<Props>();

const subTitle = computed(() => {
  return (
    props.author +
    (props.author !== "" && props.publishedDate !== "" ? "・" : "") +
    props.publishedDate
  );
});
</script>

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
