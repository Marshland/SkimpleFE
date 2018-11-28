import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { environment } from '../../environments/environment';
import { SignupData, SigninData } from './auth-data.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registerUser(data: SignupData): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiPath}/sign`, data);
  }

  login(data: SigninData): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiPath}/login`, data);
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiPath}}/logout`, {});
  }
}
