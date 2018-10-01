import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';
import { AuthData } from '../auth-data.model';
import { User } from '../user.model';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  @Effect()
  authTrySignup = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNUP),
    map((action: AuthActions.TrySignup) => {
      return action.payload;
    }),
    switchMap((authData: AuthData) => {
      return this.authService.registerUser(authData).pipe(
        map((user: User) => {
          this.router.navigate(['/']);
          return new AuthActions.Signup(user);
        }),
        catchError(() => of(new AuthActions.Error()))
      );
    })
  );

  @Effect()
  authTrySignin = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    map((action: AuthActions.TrySignin) => {
      return action.payload;
    }),
    switchMap((authData: AuthData) => {
      return this.authService.login(authData).pipe(
        map((user: User) => {
          console.log(user);
          this.router.navigate(['/']);
          return new AuthActions.Signin(user);
        }),
        catchError(() => of(new AuthActions.Error()))
      );
    })
  );

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(private actions$: Actions, private router: Router, private authService: AuthService) {}
}
