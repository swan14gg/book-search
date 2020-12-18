import { ref } from 'vue';
import { BookInfo } from '@/types';

export default function() {
  const bookinfos = ref<BookInfo[]>([]);
  return {
    bookinfos,
  };
}
