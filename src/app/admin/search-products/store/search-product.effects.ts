import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import { AdminSearchProductFilter } from '../search-product-filter.model';
import { AdminSearchProductService } from '../search-product.service';
import * as AdminSearchProductActions from './search-product.actions';
import { AdminSearchProduct } from '../search-product.model';

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
  adminSearchProductFetchProduct = this.actions$.pipe(
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

  constructor(private actions$: Actions, private adminSearchProductService: AdminSearchProductService) {}
}
