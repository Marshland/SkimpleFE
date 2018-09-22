import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DefaultSidenavComponent } from '../core/default-sidenav/default-sidenav.component';
import { DefaultToolbarComponent } from '../core/default-toolbar/default-toolbar.component';

const routes: Routes = [
  {
    path: 'signup',
    children: [
      { path: '', component: SignupComponent },
      { path: '', component: DefaultSidenavComponent, outlet: 'sidenav' },
      { path: '', component: DefaultToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent },
      { path: '', component: DefaultSidenavComponent, outlet: 'sidenav' },
      { path: '', component: DefaultToolbarComponent, outlet: 'toolbar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
