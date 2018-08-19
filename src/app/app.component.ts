import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

import { AuthService } from './auth/auth.service';
import * as fromRoot from './app.reducer';
import { Category } from './home/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuth$: Observable<boolean>;
  categories: Category[] = [
    { title: 'Alimentari', link: '', children: [] },
    { title: 'Salute e cura della Persona', link: '', children: [] },
    { title: 'pulizia e cura della casa', link: '', children: [] },
    { title: 'Casa & Cucina', link: '', children: [] },
    { title: 'Abbigliamento', link: '', children: [] },
    { title: 'DVD e Blu - ray', link: '', children: [] },
    { title: 'Sport e tempo libero', link: '', children: [] },
    { title: 'Elettronica', link: '', children: [] },
    { title: 'Informatica', link: '', children: [] },
    { title: 'Cancelleria e prodotti per ufficio', link: '', children: [] },
    { title: 'Prodotti per animali domestici', link: '', children: [] },
    { title: 'Giochi e giocattoli', link: '', children: [] },
    { title: 'Bellezza', link: '', children: [] },
    { title: 'Scarpe e borse', link: '', children: [] },
    { title: 'Gioielli', link: '', children: [] },
    { title: 'Videogiochi', link: '', children: [] },
    { title: 'Buoni regalo', link: '', children: [] },
    { title: 'Fai da te', link: '', children: [] },
    { title: 'Valigeria', link: '', children: [] },
    { title: 'Illuminazione', link: '', children: [] },
    { title: 'Libri', link: '', children: [] },
    { title: 'Auto e moto', link: '', children: [] },
    { title: 'Strumenti musicali', link: '', children: [] },
    { title: 'Prima infanzia', link: '', children: [] }
  ];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  shrinkToolbar = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {
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
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
