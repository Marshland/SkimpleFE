import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/app.reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
  isAuth$: Observable<boolean>;

  constructor(private layoutService: LayoutService, private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  get isSidenavOpened(): boolean {
    return this.layoutService.isSidenavOpened;
  }

  toggleSidenav() {
    this.layoutService.sidenav.toggle();
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
