import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UIService } from './ui.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        event => {},
        err => {
          console.log(err);
          if (err.status === 404) {
            const router = this._injector.get(Router);
            router.navigate(['/404']);
          } else {
            const uiService = this._injector.get(UIService);
            uiService.showSnackbar(err.message, null, 3000);
          }
        }
      )
    );
  }
}
