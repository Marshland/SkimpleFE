import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate: _moment.Moment;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingUser);
    this.maxDate = moment();
    this.maxDate.year(this.maxDate.get('year') - 18);
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(new AuthActions.TrySignup(form.value));
  }
}
