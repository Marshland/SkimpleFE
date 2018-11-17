import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import { AdminSearchProductFilter } from '../search-product-filter.model';
import { AdminSearchProductService } from '../search-product.service';
import * as AdminSearchProductActions from './search-product.actions';
import { AdminSearchProduct } from '../search-product.model';
import { PostProductRequest } from '../post-product.model';
import { UIService } from 'src/app/shared/ui.service';

@Injectable()
export class AdminSearchProductEffects {
  @Effect()
  adminSearchProductSetFilter = this.actions$.pipe(
    ofType(AdminSearchProductActions.SET_FILTER),
    map((action: AdminSearchProductActions.SetFilter) => {
      return action.payload;
    }),
    switchMap((filter: AdminSearchProductFilter) => {
      return of(new AdminSearchProductActions.FetchProducts(filter));
    })
  );

  @Effect()
  adminSearchProductFetch = this.actions$.pipe(
    ofType(AdminSearchProductActions.FETCH_PRODUCTS),
    map((action: AdminSearchProductActions.FetchProducts) => {
      return action.payload;
    }),
    switchMap((filter: AdminSearchProductFilter) => {
      return this.adminSearchProductService.searchProducts(filter).pipe(
        map((products: AdminSearchProduct[]) => {
          return new AdminSearchProductActions.FetchedProducts(products);
        }),
        catchError(() => of(new AdminSearchProductActions.Error()))
      );
    })
  );

  @Effect()
  adminSearchProductPost = this.actions$.pipe(
    ofType(AdminSearchProductActions.POST_PRODUCT),
    map((action: AdminSearchProductActions.PostProduct) => {
      return action.payload;
    }),
    switchMap((data: PostProductRequest) => {
      return this.adminSearchProductService.postProduct(data).pipe(
        map(() => {
          return new AdminSearchProductActions.PostedProduct();
        }),
        catchError(() => of(new AdminSearchProductActions.Error()))
      );
    })
  );

  @Effect({ dispatch: false })
  adminSearchProductPosted = this.actions$.pipe(
    ofType(AdminSearchProductActions.POSTED_PRODUCT),
    tap(() => {
      this.uiService.showSnackbar('Prodotto pubblicato', null, 2000);
    })
  );

  constructor(private actions$: Actions, private adminSearchProductService: AdminSearchProductService, private uiService: UIService) {}
}
