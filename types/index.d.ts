type Result = {
  searchTarget: string;
  bookInfos: BookInfo[];
  isNotFound: boolean;
};

type BookInfo = {
  id: string;
  title: string;
  authors: string;
  publishedDate: string;
  description: string;
  thumbnail: string;
  previewLink: string;
};

type ApiData = {
  king: string;
  totalitems: number;
  items?: ItemApiData[];
};

type ItemApiData = {
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    previewLink: string;
  };
};

type SearchItem = {
  searchTarget: string;
  isByRelevance: boolean;
};

type AppState = {
  isLoading: boolean;
  occuredError: boolean;
};
