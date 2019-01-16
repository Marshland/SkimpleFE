import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, AfterContentInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromAdmin from '../store/admin.reducer';
import * as SchedulerActions from './store/scheduler.actions';
import { LayoutService } from 'src/app/shared/layout.service';
import { Job } from './scheduler.model';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  allDisplayedColumns = ['name', 'state', 'category', 'startDate', 'endDate', 'seconds', 'action'];
  mobileDisplayedColumns = ['name', 'state', 'seconds', 'action'];
  displayedColumns = this.allDisplayedColumns.slice();
  dataSource = new MatTableDataSource<Job>();
  isLoadingJobs$: Observable<boolean>;
  isLoadingRunJob$: Observable<boolean>;
  isLoadingStopJob$: Observable<boolean>;
  isMobileSubscription: Subscription;

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private store: Store<fromAdmin.AdminFeatureState>, private dialog: MatDialog, private layoutService: LayoutService) {}

  ngOnInit() {
    this.store.dispatch(new SchedulerActions.FetchJobs());
    this.isLoadingRunJob$ = this.store.select(fromAdmin.getIsLoadingJobs);
    this.isLoadingRunJob$ = this.store.select(fromAdmin.getIsLoadingRunJob);
    this.isLoadingStopJob$ = this.store.select(fromAdmin.getIsLoadingStopJob);

    this.store.select(fromAdmin.getSchedulerJobs).subscribe((jobs: Job[]) => {
      this.dataSource.data = jobs;
    });

    this.isMobileSubscription = this.layoutService.mobileQueryChange$.subscribe(isMobile => {
      if (isMobile) {
        this.displayedColumns = this.mobileDisplayedColumns.slice();
      } else {
        this.displayedColumns = this.allDisplayedColumns.slice();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterContentInit() {
    if (this.layoutService.mobileQueryMatches) {
      this.displayedColumns = this.mobileDisplayedColumns.slice();
    }
  }

  doFilter(filterValue: string = '') {
    this.dataSource.filter = filterValue;
  }

  canDoAction(action: string, job: Job): boolean {
    if (job.state) {
      switch (job.state.toLowerCase()) {
        case 'in_progress':
          return action === 'stop';
        case 'suspended':
          return action === 'run';
      }
    }
    return true;
  }

  getStateIcon(job: Job): string {
    // return product.isAvailable ? 'check' : 'close';
    return '';
  }

  runJob(job: Job): void {
    this.store.dispatch(new SchedulerActions.RunJob(job));
  }

  stopJob(job: Job): void {
    this.store.dispatch(new SchedulerActions.StopJob(job));
  }

  ngOnDestroy(): void {
    if (this.isMobileSubscription && !this.isMobileSubscription.closed) {
      this.isMobileSubscription.unsubscribe();
    }
  }
}
