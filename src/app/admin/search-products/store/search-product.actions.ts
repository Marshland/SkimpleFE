import { Action } from '@ngrx/store';
import { AdminSearchProductFilter } from '../search-product-filter.model';
import { AdminSearchProduct } from '../search-product.model';
import { PostProductRequest } from '../post-product.model';

export const SET_FILTER = '[Admin search products] Set Filter';
export const FETCH_PRODUCTS = '[Admin search products] Fetch Products';
export const FETCHED_PRODUCTS = '[Admin search products] Fetched Products';
export const POST_PRODUCT = '[Admin search products] Post Product';
export const POSTED_PRODUCT = '[Admin search products] Posted Product';
export const ERROR = '[Admin search products] Error';

export class SetFilter implements Action {
  readonly type = SET_FILTER;

  constructor(public payload: AdminSearchProductFilter) {}
}

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;

  constructor(public payload: AdminSearchProductFilter) {}
}

export class FetchedProducts implements Action {
  readonly type = FETCHED_PRODUCTS;

  constructor(public payload: AdminSearchProduct[]) {}
}

export class PostProduct implements Action {
  readonly type = POST_PRODUCT;

  constructor(public payload: PostProductRequest) {}
}

export class PostedProduct implements Action {
  readonly type = POSTED_PRODUCT;
}

export class Error implements Action {
  readonly type = ERROR;
}

export type AdminSearchProductActions = SetFilter | FetchProducts | FetchedProducts | PostProduct | PostedProduct | Error;
