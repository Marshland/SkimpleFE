import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take, retry, map } from 'rxjs/operators';

import * as fromRoot from '../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<fromRoot.AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(
      take(1),
      map(val => {
        if (!val) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(
      take(1),
      map(val => {
        if (!val) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
}
