import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SearchProductsComponent } from './search-products/search-products.component';
import { BuildCategoriesComponent } from './build-categories/build-categories.component';
import { SharedModule } from '../shared/shared.module';
import { MenuItemComponent } from './navigation/menu-item/menu-item.component';
import { AdminSearchProductService } from './search-products/search-product.service';
import { adminSearchProductReducer } from './search-products/store/search-product.reducer';
import { AdminSearchProductEffects } from './search-products/store/search-product.effects';
import { adminCategoriesReducer } from './build-categories/store/categories.reducer';
import { AdminCategoriesEffects } from './build-categories/store/categories.effects';
import { BuildCategoryService } from './build-categories/build-categories.service';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    StoreModule.forFeature('adminSearchProduct', adminSearchProductReducer),
    StoreModule.forFeature('adminCategories', adminCategoriesReducer),
    EffectsModule.forFeature([AdminSearchProductEffects, AdminCategoriesEffects])
  ],
  declarations: [
    DashboardComponent,
    AdminSidenavComponent,
    AdminToolbarComponent,
    SearchProductsComponent,
    BuildCategoriesComponent,
    MenuItemComponent
  ],
  providers: [AdminSearchProductService, BuildCategoryService]
})
export class AdminModule {}
