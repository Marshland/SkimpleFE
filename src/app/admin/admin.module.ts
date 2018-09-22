import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SearchProductsComponent } from './search-products/search-products.component';
import { BuildCategoriesComponent } from './build-categories/build-categories.component';
import { SharedModule } from '../shared/shared.module';
import { MenuItemComponent } from './navigation/menu-item/menu-item.component';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [
    DashboardComponent,
    AdminSidenavComponent,
    AdminToolbarComponent,
    SearchProductsComponent,
    BuildCategoriesComponent,
    MenuItemComponent
  ]
})
export class AdminModule {}
