import { ApiData } from '@/types';
import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=search+';

// parameters
const orderBy = '&orderBy=';
const maxResults = '&maxResults=40';

export async function getBookApiDatas(target: string, isByRelevance: boolean) {
  const url = baseUrl + target + orderBy + isByRelevance ? 'relevance' : 'newest' + maxResults;
  const { data } = await axios.get<ApiData>(url);
  return data.items;
}
