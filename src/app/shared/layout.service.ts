import { Injectable, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidenav: MatSidenav;
  private mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  private _fixToTop = 56;

  constructor(private media: MediaMatcher) {}

  init(changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  get mobileQueryMatches(): boolean {
    return this.mobileQuery.matches;
  }

  get sidenavMode(): string {
    return this.mobileQueryMatches ? 'over' : 'side';
  }

  get fixToTop(): number {
    return this.mobileQueryMatches ? this._fixToTop : 0;
  }

  get isSidenavOpened(): boolean {
    return this.sidenav ? this.sidenav.opened : false;
  }

  removeListener() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
