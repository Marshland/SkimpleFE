import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { BuildCategoriesComponent } from './build-categories/build-categories.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'search-products', component: SearchProductsComponent },
      { path: 'build-categories', component: BuildCategoriesComponent }
    ]
  },
  { path: '', component: AdminSidenavComponent, outlet: 'sidenav' },
  { path: '', component: AdminToolbarComponent, outlet: 'toolbar' }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
