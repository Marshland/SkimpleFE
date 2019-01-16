import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: 'signup',
    children: [
      { path: '', component: SignupComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
