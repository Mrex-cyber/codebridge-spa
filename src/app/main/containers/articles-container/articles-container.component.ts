import { Component, OnDestroy, OnInit } from '@angular/core';
import { IArticle } from '../../models/IArticle';
import { ArticleService } from '../../resources/articles.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.css']
})
export class ArticlesContainerComponent implements OnInit, OnDestroy {
  public articles: IArticle[] = [];
  public template: string = "";
  private subscription: Subscription = new Subscription();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.subscription = this.articleService.getArticles().pipe(
      tap(data => {
        this.articles = data;
      })
    ).subscribe(d => this.articles = d);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
