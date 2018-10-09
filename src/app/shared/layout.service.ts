import { Injectable, ChangeDetectorRef } from '@angular/core';
import { MatSidenav, MatIconRegistry } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidenav: MatSidenav;
  private mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  private _fixToTop = 56;

  constructor(private media: MediaMatcher, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  init(changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.registerCustomIcon();
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

  private registerCustomIcon() {
    this.matIconRegistry.addSvgIcon(
      'industry-science',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/categories/industria_scienza.svg')
    );
  }
}
