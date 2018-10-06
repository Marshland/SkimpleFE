import * as AdminCategoriesActions from './categories.actions';
import { CategoryProvider } from '../category-provider.model';

export interface State {
  categoryProviders: CategoryProvider[];
  isLoadingCategoryProviders: boolean;
}

const initialState: State = {
  categoryProviders: [],
  isLoadingCategoryProviders: false
};

export function adminCategoriesReducer(state = initialState, action: AdminCategoriesActions.AdminCategoriesActions) {
  switch (action.type) {
    case AdminCategoriesActions.FETCH_CATEGORY_PROVIDER:
      return { ...state, isLoadingCategoryProviders: true };
    case AdminCategoriesActions.FETCHED_CATEGORY_PROVIDER:
      return { ...state, categoryProviders: action.payload, isLoadingCategoryProviders: false };
    case AdminCategoriesActions.ERROR:
      return {
        ...state,
        categoryProviders: [
          {
            id: 0,
            provider: { id: 0, name: 'Amazon' },
            providerCategoryId: '',
            providerCategoryDesc: 'All'
          }
        ],
        isLoadingCategoryProviders: false
      };
    default:
      return state;
  }
}

export const getCateoryProviders = (state: State) => state.categoryProviders;
export const getIsLoadingCateoryProviders = (state: State) => state.isLoadingCategoryProviders;
