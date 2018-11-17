import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { BuildCategoriesComponent } from './build-categories/build-categories.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const adminRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: '', component: AdminSidenavComponent, outlet: 'sidenav' },
      { path: '', component: AdminToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'search-products',
    children: [
      { path: '', component: SearchProductsComponent },
      { path: '', component: AdminSidenavComponent, outlet: 'sidenav' },
      { path: '', component: AdminToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'build-categories',
    children: [
      { path: '', component: BuildCategoriesComponent },
      { path: '', component: AdminSidenavComponent, outlet: 'sidenav' },
      { path: '', component: AdminToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'scheduler',
    children: [
      { path: '', component: SchedulerComponent },
      { path: '', component: AdminSidenavComponent, outlet: 'sidenav' },
      { path: '', component: AdminToolbarComponent, outlet: 'toolbar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
