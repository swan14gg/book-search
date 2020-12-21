<template>
  <ul>
    <template v-for="bookInfo in bookInfos" :key="bookInfo.id">
      <li class="mb-5">
        <BookCard
          :link="bookInfo.previewLink"
          :imgSrc="bookInfo.thumbnail"
          :title="bookInfo.title"
          :author="bookInfo.authors"
          :description="bookInfo.description"
        />
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { BookInfo } from '@/types';
import { defineComponent, PropType } from 'vue';
import BookCard from './BookCard.vue';

export default defineComponent({
  name: 'BookCardList',
  components: {
    BookCard,
  },
  props: {
    bookInfos: {
      type: Object as PropType<BookInfo[]>,
    },
  },
});
</script>

<style scoped lang="scss"></style>
