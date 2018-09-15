import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

import * as fromRoot from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { Category } from './core/home/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuth$: Observable<boolean>;
  categories: Partial<Category>[] = [
    { title: 'Alimentari', children: [] },
    { title: 'Salute e cura della Persona', children: [] },
    { title: 'pulizia e cura della casa', children: [] },
    { title: 'Casa & Cucina', children: [] },
    { title: 'Abbigliamento', children: [] },
    { title: 'DVD e Blu - ray', children: [] },
    { title: 'Sport e tempo libero', children: [] },
    { title: 'Elettronica', children: [] },
    { title: 'Informatica', children: [] },
    { title: 'Cancelleria e prodotti per ufficio', children: [] },
    { title: 'Prodotti per animali domestici', children: [] },
    { title: 'Giochi e giocattoli', children: [] },
    { title: 'Bellezza', children: [] },
    { title: 'Scarpe e borse', children: [] },
    { title: 'Gioielli', children: [] },
    { title: 'Videogiochi', children: [] },
    { title: 'Buoni regalo', children: [] },
    { title: 'Fai da te', children: [] },
    { title: 'Valigeria', children: [] },
    { title: 'Illuminazione', children: [] },
    { title: 'Libri', children: [] },
    { title: 'Auto e moto', children: [] },
    { title: 'Strumenti musicali', children: [] },
    { title: 'Prima infanzia', children: [] }
  ];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  shrinkToolbar = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private store: Store<fromRoot.AppState>) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onScroll(event) {
    console.log('onScroll', event);
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
