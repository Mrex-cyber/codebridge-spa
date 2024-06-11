import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainPageComponent } from './main/components/main-page/main-page.component';
import { ArticlesContainerComponent } from './main/containers/articles-container/articles-container.component';
import { ArticleCardComponent } from './main/components/article-card/article-card.component';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ArticleService } from './main/resources/articles.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { HighlightPipe } from './shared/pipes/highlight.pipe';
import { TruncatePipe } from './shared/pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticlesContainerComponent,
    ArticleCardComponent,

    FilterPipe,
    HighlightPipe,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync(),
    ArticleService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
