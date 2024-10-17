import { BASE_URL, key } from "./myApi";

export interface BookI {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  item: Array<{
    title: string;
    link: string;
    author: string;
    pubDate: string;
    description: string;
    isbn: string;
    isbn13: string;
    itemId: number;
    priceSales: number;
    priceStandard: number;
    mallType: string;
    stockStatus: string;
    mileage: number;
    cover: string;
    categoryId: number;
    categoryName: string;
    publisher: string;
    salesPoint: number;
    adult: boolean;
    fixedPrice: boolean;
    customerReviewRank: number;
    bestDuration: string;
    bestRank: number;
    subInfo: object;
  }>;
}

export const getBestseller = async () => {
  return fetch(
    `/ttb/api/ItemList.aspx?ttbkey=${key}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&cover=big`
  ).then((response) => response.json());
};
