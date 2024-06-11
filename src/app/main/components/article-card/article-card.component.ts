import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../models/IArticle';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: IArticle;
  @Input() template: string = "";

  constructor() { }

  ngOnInit() {
  }

}
