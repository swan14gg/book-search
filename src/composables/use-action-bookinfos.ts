import { Ref } from 'vue';
import { BookInfo } from '@/types';
import { fetchBookApiDatas } from '@/api';

export default function(bookInfos: Ref<BookInfo[]>) {
  async function getBookInfos(target: string, isByRelevance: boolean) {
    const bookApiDatas = await fetchBookApiDatas(target, isByRelevance);
    bookInfos.value = bookApiDatas.map(
      (data: {
        id: string;
        volumeInfo: {
          title: string;
          authors: string[] | undefined;
          description: string;
          imageLinks: { thumbnail: string } | undefined;
          previewLink: string;
        };
      }) => {
        const thumbnail =
          data.volumeInfo.imageLinks !== undefined
            ? data.volumeInfo.imageLinks.thumbnail
            : 'https://books.google.co.jp/googlebooks/images/no_cover_thumb.gif';
        const authors = data.volumeInfo.authors !== undefined ? data.volumeInfo.authors.join(', ') : '';
        return {
          id: data.id,
          title: data.volumeInfo.title,
          authors: authors,
          description: data.volumeInfo.description,
          thumbnail: thumbnail,
          previewLink: data.volumeInfo.previewLink,
        };
      }
    );
  }
  return {
    getBookInfos,
  };
}
