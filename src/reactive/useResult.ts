import { reactive } from 'vue';
import { Result } from '@/types';

export default function() {
  const result = reactive<Result>({
    bookInfos: [],
    isNotFound: false,
  });
  return {
    result,
  };
}
