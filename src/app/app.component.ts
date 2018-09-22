import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { LayoutService } from './shared/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSidenav)
  sidenav: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef, private layoutService: LayoutService) {
    this.layoutService.init(changeDetectorRef);
  }

  ngAfterViewInit() {
    this.layoutService.sidenav = this.sidenav;
  }

  get isMobile(): boolean {
    return this.layoutService.mobileQueryMatches;
  }

  get sidenavMode(): string {
    return this.layoutService.sidenavMode;
  }

  get fixedToTop() {
    return this.layoutService.fixToTop;
  }

  ngOnDestroy(): void {
    this.layoutService.removeListener();
  }
}
