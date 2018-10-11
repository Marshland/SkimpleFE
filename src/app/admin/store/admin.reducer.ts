import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAdminSearchProduct from '../search-products/store/search-product.reducer';
import * as fromAdminCategories from '../build-categories/store/categories.reducer';
import * as fromApp from '../../store/app.reducer';

export interface AdminFeatureState extends fromApp.AppState {
  adminSearchProduct: fromAdminSearchProduct.State;
  adminCategories: fromAdminCategories.State;
}

export const getAdminSearchProductState = createFeatureSelector<fromAdminSearchProduct.State>('adminSearchProduct');
export const getAdminProductFilter = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getFilter);
export const getIsLoadingAdminProducts = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getIsLoading);
export const getAdminProducts = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getProducts);
export const getIsPostingProduct = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getIsPostingProduct);

export const getAdminCategoriesState = createFeatureSelector<fromAdminCategories.State>('adminCategories');
export const getIsLoadingCateoryProviders = createSelector(getAdminCategoriesState, fromAdminCategories.getIsLoadingCateoryProviders);
export const getCateoryProviders = createSelector(getAdminCategoriesState, fromAdminCategories.getCateoryProviders);
