type ApiData = {
  king: string;
  totalitems: number;
  items?: ItemApiData[];
};

type ItemApiData = {
  id: string;
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

type Book = {
  id: string;
  title: string;
  authors: string;
  publishedDate: string;
  description: string;
  thumbnail: string;
  previewLink: string;
};

type OrderByType = "relevance" | "newest";
