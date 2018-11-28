import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registerUser(data: AuthData): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiPath}/register`, data);
  }

  login(data: AuthData): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiPath}/login`, data);
  }
}
