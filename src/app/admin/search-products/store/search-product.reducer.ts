import * as AdminSearchProductActions from './search-product.actions';
import { AdminSearchProduct } from '../search-product.model';
import { AdminSearchProductFilter } from '../search-product-filter.model';

export interface State {
  filter: AdminSearchProductFilter;
  products: AdminSearchProduct[];
  isLoading: boolean;
}

const initialState: State = {
  filter: {
    keywords: '',
    searchIndex: 'All'
  },
  products: [],
  isLoading: false
};

export function adminSearchProductReducer(state = initialState, action: AdminSearchProductActions.AdminSearchProductActions) {
  switch (action.type) {
    case AdminSearchProductActions.SET_FILTER:
      return { ...state, filter: action.payload };
    case AdminSearchProductActions.FETCH_PRODUCTS:
      return { ...state, isLoading: true };
    case AdminSearchProductActions.FETCHED_PRODUCTS:
      return { ...state, products: action.payload, isLoading: false };
    case AdminSearchProductActions.ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export const getFilter = (state: State) => state.filter;
export const getProducts = (state: State) => state.products;
export const getIsLoading = (state: State) => state.isLoading;
