import axios from "axios";

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

// parameters
const orderBy = "&orderBy=";
const maxResults = "&maxResults=40";

export default function () {
  async function fetchBookApiDatas(target: string, isByRelevance: boolean) {
    const url =
      baseUrl +
      target +
      orderBy +
      (isByRelevance ? "relevance" : "newest") +
      maxResults;
    const { data } = await axios.get<ApiData>(url);
    return data.items;
  }
  return {
    fetchBookApiDatas,
  };
}
