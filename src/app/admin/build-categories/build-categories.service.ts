import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CategoryProvider } from './category-provider.model';
import { map } from 'rxjs/operators';

@Injectable()
export class BuildCategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategoryProviders(): Observable<CategoryProvider[]> {
    return this.httpClient.get<CategoryProvider[]>(`${environment.apiPath}/categories/categories-providers`).pipe(
      map((result: CategoryProvider[]) => {
        if (!result) {
          result = [];
        }
        result.unshift({
          id: 0,
          provider: { id: 0, name: 'Amazon' },
          providerCategoryId: '',
          providerCategoryDesc: 'All'
        });
        return result;
      })
    );
  }
}
