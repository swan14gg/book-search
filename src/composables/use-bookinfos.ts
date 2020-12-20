import { ref } from 'vue';
import { BookInfo } from '@/types';

export default function() {
  const bookInfos = ref<BookInfo[]>([]);
  const isNotFound = ref(false);
  return {
    bookInfos,
    isNotFound,
  };
}
