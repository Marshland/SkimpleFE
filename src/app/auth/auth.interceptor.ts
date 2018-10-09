import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, switchMap } from 'rxjs/operators';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      switchMap((authState: fromAuth.State) => {
        if (authState.user) {
          // const copiedReq = req.clone({ params: req.params.set('auth', authState.user.token) });
          // return next.handle(copiedReq);
          return next.handle(req);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}