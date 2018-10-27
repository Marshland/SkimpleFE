import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminSearchProduct } from './search-product.model';
import { AdminSearchProductFilter } from './search-product-filter.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PostProductRequest } from './post-product.model';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminSearchProductService {
  constructor(private httpClient: HttpClient) {}

  searchProducts(filter: AdminSearchProductFilter): Observable<AdminSearchProduct[]> {
    return this.httpClient.post<AdminSearchProduct[]>(`${environment.apiPath}/products/search-amazon`, filter).pipe(
      map(data => {
        data.forEach(elm => {
          elm.multimedia = elm.multimedia.sort((a, b) => (a.type < b.type ? 1 : a.type === b.type ? 0 : -1));
        });
        return data;
      })
    );
  }

  postProduct(data: PostProductRequest): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiPath}/products/send`, data);
  }
}
