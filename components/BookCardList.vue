<script setup lang="ts">
type Props = {
  books: Book[];
};
defineProps<Props>();
</script>

<template>
  <ul>
    <template v-for="book in books" :key="book.id">
      <li class="mb-5">
        <BookCard
          :link="book.previewLink"
          :imgSrc="book.thumbnail"
          :title="book.title"
          :author="book.authors"
          :publishedDate="book.publishedDate"
          :description="book.description"
        />
      </li>
    </template>
  </ul>
</template>
