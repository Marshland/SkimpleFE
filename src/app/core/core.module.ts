import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/category-products/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryItemComponent } from './navigation/category-item/category-item.component';
import { MainCarouselComponent } from './home/main-carousel/main-carousel.component';
import { MainSearchComponent } from './home/main-search/main-search.component';
import { BestProductComponent } from './home/best-product/best-product.component';
import { BombProductsComponent } from './home/bomb-products/bomb-products.component';
import { CategoriesCarouselComponent } from './home/categories-carousel/categories-carousel.component';
import { CategoryProductsComponent } from './home/category-products/category-products.component';
import { SharedModule } from '../shared/shared.module';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { NguCarouselModule } from '@ngu/carousel';
import { DefaultToolbarComponent } from './default-toolbar/default-toolbar.component';
import { DefaultSidenavComponent } from './default-sidenav/default-sidenav.component';
import { ErrorInterceptor } from '../shared/error.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    FooterComponent,
    CategoryItemComponent,
    MainCarouselComponent,
    MainSearchComponent,
    BestProductComponent,
    BombProductsComponent,
    CategoriesCarouselComponent,
    CategoryProductsComponent,
    DefaultToolbarComponent,
    DefaultSidenavComponent
  ],
  imports: [SharedModule, NguCarouselModule, AppRoutingModule],
  exports: [AppRoutingModule, NguCarouselModule, CategoryItemComponent, FooterComponent],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class CoreModule {}
