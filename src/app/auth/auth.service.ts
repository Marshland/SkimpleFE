import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  registerUser(data: AuthData): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiPath}/register`, data);
  }

  login(data: AuthData): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiPath}/login`, data).pipe(
      map(result => {
        console.log(result);
        return {
          id: 'feu9rhf8reh',
          email: 'skimple@skimple.it',
          token: 'aaaaaaaaaaaaaaaaaaa',
          expireIn: moment()
            .add(2, 'hours')
            .get('seconds'),
          isAdmin: true
        };
      })
    );
  }
}
