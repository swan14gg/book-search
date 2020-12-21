import { reactive } from 'vue';
import { Result } from '@/types';

export default function() {
  const result = reactive<Result>({
    searchTarget: '',
    bookInfos: [],
    isNotFound: false,
  });
  return {
    result,
  };
}
