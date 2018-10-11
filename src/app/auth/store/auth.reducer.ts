import * as AuthActions from './auth.actions';
import { User } from '../user.model';

export interface State {
  token: string;
  user: User;
  isLoading: boolean;
}

const initialState: State = {
  token: null,
  user: {
    id: 'feu9rhf8reh',
    email: 'skimple@skimple.it',
    token: 'aaaaaaaaaaaaaaaaaaa',
    expireIn: 60000,
    isAdmin: true
  },
  isLoading: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.TRY_SIGNIN:
    case AuthActions.TRY_SIGNUP:
      return {
        ...state,
        isLoading: true
      };
    case AuthActions.SIGNUP:
    case AuthActions.SIGNIN:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case AuthActions.ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

export const getIsAuth = (state: State) => state.user !== null;
export const getIsAdmin = (state: State) => state.user !== null && state.user.isAdmin;
export const getIsLoading = (state: State) => state.isLoading;
