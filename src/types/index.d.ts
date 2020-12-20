import dataJSON from './sample.json';
import bookInfo from './bookinfo.json';

export type BookInfo = {
  id: string;
  title: string;
  authors: string;
  description: string;
  thumbnail: string;
  previewLink: string;
};
