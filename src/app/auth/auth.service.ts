import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import * as _moment from 'moment';
const moment = _moment;

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  checkLocalStorage(): Observable<User> {
    const token = localStorage.getItem('token');
    const expireIn = localStorage.getItem('expireIn');
    if (!token || !expireIn) {
      return null;
    }

    const expireToken = moment().date(+expireIn);
    if (expireToken.isAfter(moment())) {
      return this.getUserFromToken(token);
    }
  }

  registerUser(data: AuthData): Observable<User> {
    // return this.httpClient.post<User>(`${environment.apiPath}/register`, data);
    return of({
      id: 'feu9rhf8reh',
      email: 'skimple@skimple.it',
      token: 'aaaaaaaaaaaaaaaaaaa',
      expireIn: moment()
        .add(2, 'hours')
        .get('seconds'),
      isAdmin: true
    });
  }

  login(data: AuthData): Observable<User> {
    if (data.email !== 'antonio@heroku.it' || data.password !== 'mortacciSkimplosi') {
      return of({
        id: 'feusas9rhf8reh',
        email: 'no@no.it',
        token: 'aaaaaaaaaaaaaaaaaaa',
        expireIn: moment()
          .add(2, 'hours')
          .get('seconds'),
        isAdmin: false
      });
    }
    // return this.httpClient.post<User>(`${environment.apiPath}/login`, data);
    return of({
      id: 'feu9rhf8reh',
      email: 'skimple@skimple.it',
      token: 'aaaaaaaaaaaaaaaaaaa',
      expireIn: moment()
        .add(2, 'hours')
        .get('seconds'),
      isAdmin: true
    });
  }

  private getUserFromToken(token: string) {
    // this.httpClient.post(`${environment.apiPath}/login`, data);
    return of({
      id: 'feu9rhf8reh',
      email: 'skimple@skimple.it',
      token: 'aaaaaaaaaaaaaaaaaaa',
      expireIn: moment()
        .add(2, 'hours')
        .get('seconds'),
      isAdmin: true
    });
  }
}
