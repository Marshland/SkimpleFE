import { NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './category-products/product/product.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { BestProductComponent } from './best-product/best-product.component';
import { BombProductsComponent } from './bomb-products/bomb-products.component';
import { CategoriesCarouselComponent } from './categories-carousel/categories-carousel.component';
import { CategoryProductsComponent } from './category-products/category-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    MainCarouselComponent,
    MainSearchComponent,
    BestProductComponent,
    BombProductsComponent,
    CategoriesCarouselComponent,
    CategoryProductsComponent
  ],
  imports: [SharedModule, NguCarouselModule]
})
export class HomeModule {}
