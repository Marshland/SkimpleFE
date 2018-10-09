import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DefaultSidenavComponent } from './core/default-sidenav/default-sidenav.component';
import { DefaultToolbarComponent } from './core/default-toolbar/default-toolbar.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: '', component: DefaultSidenavComponent, outlet: 'sidenav' },
      { path: '', component: DefaultToolbarComponent, outlet: 'toolbar' }
    ]
  },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
