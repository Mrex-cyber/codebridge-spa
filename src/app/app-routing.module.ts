import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/components/main-page/main-page.component';
import { DetailArticleComponent } from './articles/components/detail-article/detail-article.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'detail/:id', component: DetailArticleComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
