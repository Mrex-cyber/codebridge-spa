import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { IArticle } from '../models/IArticle';
import { IArticleResponse } from '../models/IArticleResponse';

@Injectable()
export class ArticleService {
  private articleUrl: string = "https://api.spaceflightnewsapi.net/v4/";

  private httpOptions = {
    headers: new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://mrex-cyber.github.io/codebridge-spa/"})
  };

  constructor(private client: HttpClient) { }

  public getArticles(): Observable<IArticle[]> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});

    return this.client.get<IArticleResponse>(this.articleUrl + "articles/", this.httpOptions).pipe(
      map(response => response.results)
    );;
  }

  public getArticleById(id: number): Observable<IArticle> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});

    return this.client.get<IArticle>(this.articleUrl + "articles/" + id, this.httpOptions).pipe(
      map(response => response)
    );;
  }

}
