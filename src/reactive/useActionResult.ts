import { Result } from '@/types';
import { fetchBookApiDatas } from '@/api';

export default function(result: Result) {
  async function getBookInfos(target: string, isByRelevance: boolean) {
    const bookApiDatas = await fetchBookApiDatas(target, isByRelevance);
    result.searchTarget = target;
    if (!bookApiDatas) {
      result.isNotFound = true;
      return;
    }
    result.isNotFound = false;
    result.bookInfos = bookApiDatas.map((data) => {
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
    });
  }
  return {
    getBookInfos,
  };
}
