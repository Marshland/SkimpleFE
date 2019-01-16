import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { BuildCategoriesComponent } from './build-categories/build-categories.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const adminRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'search-products',
    children: [
      { path: '', component: SearchProductsComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'build-categories',
    children: [
      { path: '', component: BuildCategoriesComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  },
  {
    path: 'scheduler',
    children: [
      { path: '', component: SchedulerComponent },
      { path: '', component: SidenavComponent, outlet: 'sidenav' },
      { path: '', component: ToolbarComponent, outlet: 'toolbar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
