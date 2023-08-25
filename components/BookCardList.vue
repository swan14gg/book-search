<script setup lang="ts">
type Props = {
  bookInfos: BookInfo[];
};
defineProps<Props>();
</script>

<template>
  <ul>
    <template v-for="bookInfo in bookInfos" :key="bookInfo.id">
      <li class="mb-5">
        <BookCard
          :link="bookInfo.previewLink"
          :imgSrc="bookInfo.thumbnail"
          :title="bookInfo.title"
          :author="bookInfo.authors"
          :publishedDate="bookInfo.publishedDate"
          :description="bookInfo.description"
        />
      </li>
    </template>
  </ul>
</template>
