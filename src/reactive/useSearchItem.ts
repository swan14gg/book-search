import { reactive } from 'vue';
import { SearchItem } from '@/types';

export default function() {
  const searchItem = reactive<SearchItem>({
    searchTarget: '',
    isByRelevance: true,
  });
  return {
    searchItem,
  };
}
