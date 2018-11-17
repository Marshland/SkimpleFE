import { Action } from '@ngrx/store';
import { Job } from '../scheduler.model';

export const FETCH_JOBS = '[Admin scheduler] Fetch Jobs';
export const FETCHED_JOBS = '[Admin scheduler] Fetched Jobs';
export const RUN_JOB = '[Admin scheduler] Run Job';
export const COMPLETED_RUN_JOB = '[Admin scheduler] Completed Run Job';
export const STOP_JOB = '[Admin scheduler] Stop Job';
export const COMPLETED_STOP_JOB = '[Admin scheduler] Completef Stop Job';
export const ERROR = '[Admin scheduler] Error';

export class FetchJobs implements Action {
  readonly type = FETCH_JOBS;

  constructor() {}
}

export class FetchedJobs implements Action {
  readonly type = FETCHED_JOBS;

  constructor(public payload: Job[]) {}
}

export class RunJob implements Action {
  readonly type = RUN_JOB;

  constructor(public payload: Job) {}
}

export class CompletedRunJob implements Action {
  readonly type = COMPLETED_RUN_JOB;

  constructor(public payload: Job) {}
}

export class StopJob implements Action {
  readonly type = STOP_JOB;

  constructor(public payload: Job) {}
}

export class CompletedStopJob implements Action {
  readonly type = COMPLETED_STOP_JOB;

  constructor(public payload: Job) {}
}

export class Error implements Action {
  readonly type = ERROR;
}

export type SchedulerActions = FetchJobs | FetchedJobs | RunJob | CompletedRunJob | StopJob | CompletedStopJob | Error;
