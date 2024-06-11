import { Pipe, PipeTransform } from '@angular/core';
import { IArticle } from '../../main/models/IArticle';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IArticle[], searchValue: string): IArticle[] {
    if (!searchValue) return value;

    return value.filter((v: IArticle) =>
      v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      || v.summary.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
      .sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }

        if (a.summary < b.summary) {
          return -1;
        }
        if (a.summary > b.summary) {
          return 1;
        }

        return 0;
      })
  }

}
