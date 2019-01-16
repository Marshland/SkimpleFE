import * as SchedulerActions from './scheduler.actions';
import { Job } from '../scheduler.model';

export interface State {
  jobs: Job[];
  isLoading: boolean;
  isRunLoading: boolean;
  isStopLoading: boolean;
}

const initialState: State = {
  jobs: [],
  isLoading: false,
  isRunLoading: false,
  isStopLoading: false
};

export function schedulerReducer(state = initialState, action: SchedulerActions.SchedulerActions) {
  switch (action.type) {
    case SchedulerActions.FETCH_JOBS:
      return { ...state, isLoading: true };
    case SchedulerActions.FETCHED_JOBS:
      return { ...state, jobs: action.payload, isLoading: false };
    case SchedulerActions.RUN_JOB:
      return { ...state, isRunLoading: true };
    case SchedulerActions.COMPLETED_RUN_JOB:
      const updatedRunJobs = {
        ...state.jobs,
        ...action.payload
      };
      return { ...state, jobs: updatedRunJobs, isRunLoading: false };
    case SchedulerActions.STOP_JOB:
      return { ...state, isStopLoading: true };
    case SchedulerActions.COMPLETED_STOP_JOB:
      const updatedStopJobs = {
        ...state.jobs,
        ...action.payload
      };
      return { ...state, jobs: updatedStopJobs, isStopLoading: false };
    case SchedulerActions.ERROR:
      return { ...state, isLoading: false, isRunLoading: false, isStopLoading: false };
    default:
      return state;
  }
}

export const getJobs = (state: State) => state.jobs;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsRunLoading = (state: State) => state.isRunLoading;
export const getIsStopLoading = (state: State) => state.isStopLoading;
