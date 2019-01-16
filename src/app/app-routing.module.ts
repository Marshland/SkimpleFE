import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { AuthGuard } from './auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AuthGuard], canActivate: [AuthGuard] },
  {
    path: 'not-found',
    children: [
      { path: '', component: NotFoundComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
