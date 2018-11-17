import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
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
          const router = this._injector.get(Router);
          switch (err.status) {
            case 401:
              router.navigate(['/login']);
              break;
            case 404:
              router.navigate(['/not-found']);
              break;
            default:
              const uiService = this._injector.get(UIService);
              uiService.showSnackbar(err.message, null, 3000);
          }
        }
      )
    );
  }
}
