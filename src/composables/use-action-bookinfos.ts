import { Ref } from 'vue';
import { BookInfo } from '@/types';
import { fetchBookApiDatas } from '@/api';

export default function(bookInfos: Ref<BookInfo[]>) {
  async function getBookInfos(target: string, isByRelevance: boolean) {
    const bookApiDatas = await fetchBookApiDatas(target, isByRelevance);
    if (!bookApiDatas) return;
    bookInfos.value = bookApiDatas.map(
      (data: {
        id: string;
        volumeInfo: {
          title: string;
          authors: string[] | undefined;
          description: string | undefined;
          imageLinks: { thumbnail: string } | undefined;
          previewLink: string;
        };
      }) => {
        const authors = data.volumeInfo.authors !== undefined ? data.volumeInfo.authors.join(', ') : '';
        const description = data.volumeInfo.description !== undefined ? data.volumeInfo.description : '';
        const thumbnail =
          data.volumeInfo.imageLinks !== undefined
            ? data.volumeInfo.imageLinks.thumbnail
            : 'https://books.google.co.jp/googlebooks/images/no_cover_thumb.gif';
        return {
          id: data.id,
          title: data.volumeInfo.title,
          authors: authors,
          description: description,
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
