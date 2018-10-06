import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as AdminSearchProductActions from './categories.actions';
import { BuildCategoryService } from '../build-categories.service';
import { CategoryProvider } from '../category-provider.model';

@Injectable()
export class AdminCategoriesEffects {
  @Effect()
  adminCategoriesFetchCategoryProdiver = this.actions$.pipe(
    ofType(AdminSearchProductActions.FETCH_CATEGORY_PROVIDER),
    switchMap(() => {
      return this.buildCategoryService.getCategoryProviders().pipe(
        map((categoryProviders: CategoryProvider[]) => {
          return new AdminSearchProductActions.FetchedCategoryProvider(categoryProviders);
        }),
        catchError(() => of(new AdminSearchProductActions.Error()))
      );
    })
  );

  constructor(private actions$: Actions, private buildCategoryService: BuildCategoryService) {}
}
