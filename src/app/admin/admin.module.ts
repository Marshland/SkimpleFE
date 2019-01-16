import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SearchProductsComponent } from './search-products/search-products.component';
import { BuildCategoriesComponent } from './build-categories/build-categories.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { PostProductComponent } from './search-products/post-product/post-product.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

import { AdminSearchProductService } from './search-products/search-product.service';
import { adminSearchProductReducer } from './search-products/store/search-product.reducer';
import { AdminSearchProductEffects } from './search-products/store/search-product.effects';

import { adminCategoriesReducer } from './build-categories/store/categories.reducer';
import { AdminCategoriesEffects } from './build-categories/store/categories.effects';
import { BuildCategoryService } from './build-categories/build-categories.service';

import { schedulerReducer } from './scheduler/store/scheduler.reducer';
import { SchedulerEffects } from './scheduler/store/scheduler.effects';
import { SchedulerService } from './scheduler/scheduler.service';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    StoreModule.forFeature('adminSearchProduct', adminSearchProductReducer),
    StoreModule.forFeature('adminCategories', adminCategoriesReducer),
    StoreModule.forFeature('scheduler', schedulerReducer),
    EffectsModule.forFeature([AdminSearchProductEffects, AdminCategoriesEffects, SchedulerEffects])
  ],
  declarations: [
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
    SearchProductsComponent,
    BuildCategoriesComponent,
    SidenavItemComponent,
    PostProductComponent,
    SchedulerComponent
  ],
  providers: [AdminSearchProductService, BuildCategoryService, SchedulerService],
  entryComponents: [PostProductComponent]
})
export class AdminModule {}
