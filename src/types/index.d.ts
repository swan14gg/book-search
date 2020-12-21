export type Result = {
  bookInfos: BookInfo[];
  isNotFound: boolean;
};

export type BookInfo = {
  id: string;
  title: string;
  authors: string;
  description: string;
  thumbnail: string;
  previewLink: string;
};

export type ApiData = {
  king: string;
  totalitems: number;
  items?: ItemApiData[];
};

export type ItemApiData = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    previewLink: string;
  };
};

export type SearchItem = {
  searchTarget: string;
  isByRelevance: boolean;
};
