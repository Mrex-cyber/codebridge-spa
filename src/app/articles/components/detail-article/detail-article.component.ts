import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../../main/models/IArticle';
import { Subscription, tap } from 'rxjs';
import { ArticleService } from '../../../main/resources/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  public article: IArticle = null!;
  private subscription: Subscription = new Subscription();

  constructor(private articleService: ArticleService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.currentRoute.params.subscribe(params => {
      const id = params['id'];
       this.articleService.getArticleById(id).pipe(
        tap(data => {
          this.article = data;
        })
      ).subscribe(d => this.article = d);
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public navigateToMain(){
    this.router.navigate(["main"]);
  }
}
