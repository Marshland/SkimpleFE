import * as AuthActions from './auth.actions';
import { User } from '../user.model';
import { ROLES } from '../role-constant';

export interface State {
  user: User;
  isLoading: boolean;
}

const initialState: State = {
  user: {
    password: null,
    username: 'francescoromano@libero.it',
    authorities: [{ authority: 'ROLE_ADMIN' }],
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    enabled: true
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
      return {
        ...state,
        isLoading: false
      };
    case AuthActions.SIGNIN:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
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
export const getIsAdmin = (state: State) => state.user !== null && state.user.authorities.some(x => x.authority === ROLES.admin);
export const getIsLoading = (state: State) => state.isLoading;
