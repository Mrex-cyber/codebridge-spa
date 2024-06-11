import { IArticle } from "./IArticle";

export interface IArticleResponse {
  count: number;
  results: IArticle[];
}
