import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import * as _moment from 'moment';
const moment = _moment;

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { environment } from '../../environments/environment';

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
    // this.httpClient.post(`${environment.apiPath}/register`, data);
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

  login(data: AuthData) {
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
