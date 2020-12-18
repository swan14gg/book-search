import { Ref } from 'vue';
import { BookInfo } from '@/types';
import { fetchBookApiDatas } from '@/api';

export default function(bookInfos: Ref<BookInfo[]>) {
  async function getBookInfos(target: string, isByRelevance: boolean) {
    const bookApiDatas = await fetchBookApiDatas(target, isByRelevance);
    bookInfos.value = bookApiDatas.map(
      (data: {
        volumeInfo: {
          title: string;
          authors: string[];
          description: string;
          imageLinks: { thumbnail: string };
          previewLink: string;
        };
      }) => {
        return {
          title: data.volumeInfo.title,
          authors: data.volumeInfo.authors,
          description: data.volumeInfo.description,
          thumbnail: data.volumeInfo.imageLinks?.thumbnail,
          previewLink: data.volumeInfo.previewLink,
        };
      }
    );
  }
  return {
    getBookInfos,
  };
}
