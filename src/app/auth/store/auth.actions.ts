import { Action } from '@ngrx/store';
import { AuthData } from '../auth-data.model';
import { User } from '../user.model';

export const TRY_SIGNUP = '[Auth] Try Signup';
export const SIGNUP = '[Auth] Signup';
export const TRY_SIGNIN = '[Auth] Try Signin';
export const SIGNIN = '[Auth] Signin';
export const LOGOUT = '[Auth] Logout';
export const ERROR = '[Auth] Error';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: AuthData) {}
}

export class TrySignin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: AuthData) {}
}

export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload: User) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class Error implements Action {
  readonly type = ERROR;
}

export type AuthActions = Signup | Signin | Logout | TrySignup | TrySignin | Error;
