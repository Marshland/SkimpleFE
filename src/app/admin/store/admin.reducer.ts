import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAdminSearchProduct from '../search-products/store/search-product.reducer';
import * as fromAdminCategories from '../build-categories/store/categories.reducer';
import * as fromScheduler from '../scheduler/store/scheduler.reducer';
import * as fromApp from '../../store/app.reducer';

export interface AdminFeatureState extends fromApp.AppState {
  adminSearchProduct: fromAdminSearchProduct.State;
  adminCategories: fromAdminCategories.State;
  scheduler: fromScheduler.State;
}

export const getAdminSearchProductState = createFeatureSelector<fromAdminSearchProduct.State>('adminSearchProduct');
export const getAdminProductFilter = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getFilter);
export const getIsLoadingAdminProducts = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getIsLoading);
export const getAdminProducts = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getProducts);
export const getIsPostingProduct = createSelector(getAdminSearchProductState, fromAdminSearchProduct.getIsPostingProduct);

export const getAdminCategoriesState = createFeatureSelector<fromAdminCategories.State>('adminCategories');
export const getIsLoadingCateoryProviders = createSelector(getAdminCategoriesState, fromAdminCategories.getIsLoadingCateoryProviders);
export const getCateoryProviders = createSelector(getAdminCategoriesState, fromAdminCategories.getCateoryProviders);

export const getSchedulerState = createFeatureSelector<fromScheduler.State>('scheduler');
export const getSchedulerJobs = createSelector(getSchedulerState, fromScheduler.getJobs);
export const getIsLoadingJobs = createSelector(getSchedulerState, fromScheduler.getIsLoading);
export const getIsLoadingRunJob = createSelector(getSchedulerState, fromScheduler.getIsRunLoading);
export const getIsLoadingStopJob = createSelector(getSchedulerState, fromScheduler.getIsStopLoading);
