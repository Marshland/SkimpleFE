import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import * as SchedulerActions from './scheduler.actions';
import { UIService } from 'src/app/shared/ui.service';
import { SchedulerService } from '../scheduler.service';
import { Job } from '../scheduler.model';

@Injectable()
export class SchedulerEffects {
  @Effect()
  schedulerFetchJobs = this.actions$.pipe(
    ofType(SchedulerActions.FETCH_JOBS),
    switchMap(() => {
      return this.schedulerService.getJobs().pipe(
        map((jobs: Job[]) => {
          return new SchedulerActions.FetchedJobs(jobs);
        }),
        catchError(() => of(new SchedulerActions.Error()))
      );
    })
  );

  @Effect()
  schedulerRunJob = this.actions$.pipe(
    ofType(SchedulerActions.RUN_JOB),
    map((action: SchedulerActions.RunJob) => {
      return action.payload;
    }),
    switchMap((data: Job) => {
      return this.schedulerService.runJob(data).pipe(
        map(response => {
          return new SchedulerActions.CompletedRunJob(response);
        }),
        catchError(() => of(new SchedulerActions.Error()))
      );
    })
  );

  @Effect()
  schedulerStopJob = this.actions$.pipe(
    ofType(SchedulerActions.STOP_JOB),
    map((action: SchedulerActions.StopJob) => {
      return action.payload;
    }),
    switchMap((data: Job) => {
      return this.schedulerService.stopJob(data).pipe(
        map(response => {
          return new SchedulerActions.CompletedStopJob(response);
        }),
        catchError(() => of(new SchedulerActions.Error()))
      );
    })
  );

  @Effect({ dispatch: false })
  schedulerCompleteRunJob = this.actions$.pipe(
    ofType(SchedulerActions.COMPLETED_RUN_JOB),
    map((action: SchedulerActions.CompletedRunJob) => {
      return action.payload;
    }),
    tap((data: Job) => {
      this.uiService.showSnackbar(`Job ${data.name} in esecuzione`, null, 2000);
    })
  );

  @Effect({ dispatch: false })
  schedulerCompleteStopJob = this.actions$.pipe(
    ofType(SchedulerActions.COMPLETED_STOP_JOB),
    map((action: SchedulerActions.CompletedStopJob) => {
      return action.payload;
    }),
    tap((data: Job) => {
      this.uiService.showSnackbar(`Job ${data.name} fermato`, null, 2000);
    })
  );

  constructor(private actions$: Actions, private schedulerService: SchedulerService, private uiService: UIService) {}
}
