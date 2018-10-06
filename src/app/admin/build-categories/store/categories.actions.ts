import { Action } from '@ngrx/store';
import { CategoryProvider } from '../category-provider.model';

export const FETCH_CATEGORY_PROVIDER = '[Admin categories] Fetch Category Provider';
export const FETCHED_CATEGORY_PROVIDER = '[Admin categories] Fetched Category Provider';
export const ERROR = '[Admin categories] Error';

export class FetchCategoryProvider implements Action {
  readonly type = FETCH_CATEGORY_PROVIDER;
}

export class FetchedCategoryProvider implements Action {
  readonly type = FETCHED_CATEGORY_PROVIDER;

  constructor(public payload: CategoryProvider[]) {}
}

export class Error implements Action {
  readonly type = ERROR;
}

export type AdminCategoriesActions = FetchCategoryProvider | FetchedCategoryProvider | Error;
