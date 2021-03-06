import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Job } from './scheduler.model';
import { map } from 'rxjs/operators';

@Injectable()
export class SchedulerService {
  constructor(private httpClient: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${environment.apiPath}/jobs`).pipe(map(data => data || []));
  }

  runJob(data: Job): Observable<Job> {
    return this.httpClient.post<Job>(`${environment.apiPath}/jobs/run`, data);
  }

  stopJob(data: Job): Observable<Job> {
    return this.httpClient.post<Job>(`${environment.apiPath}/jobs/stop`, data);
  }
}
