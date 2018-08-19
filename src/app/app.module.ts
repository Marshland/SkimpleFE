import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { StoreModule } from '@ngrx/store';
import { NguCarouselModule } from '@ngu/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UIService } from './shared/ui.service';

import { ProductComponent } from './home/category-products/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryItemComponent } from './navigation/category-item/category-item.component';
import { MainCarouselComponent } from './home/main-carousel/main-carousel.component';
import { MainSearchComponent } from './home/main-search/main-search.component';
import { BestProductComponent } from './home/best-product/best-product.component';
import { BombProductsComponent } from './home/bomb-products/bomb-products.component';
import { CategoriesCarouselComponent } from './home/categories-carousel/categories-carousel.component';
import { CategoryProductsComponent } from './home/category-products/category-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    CategoryItemComponent,
    MainCarouselComponent,
    MainSearchComponent,
    BestProductComponent,
    BombProductsComponent,
    CategoriesCarouselComponent,
    CategoryProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    AuthModule,
    SharedModule,
    NguCarouselModule,
    ScrollDispatchModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }, AuthService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
