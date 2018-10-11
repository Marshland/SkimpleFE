import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminSearchProduct } from './search-product.model';
import { AdminSearchProductFilter } from './search-product-filter.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PostProductRequest } from './post-product.model';

@Injectable()
export class AdminSearchProductService {
  constructor(private httpClient: HttpClient) {}

  searchProducts(filter: AdminSearchProductFilter): Observable<AdminSearchProduct[]> {
    return this.httpClient.post<AdminSearchProduct[]>(`${environment.apiPath}/products/search-amazon`, filter);
  }

  postProduct(data: PostProductRequest): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiPath}/products/send`, data);
  }
}
