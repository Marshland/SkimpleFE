import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AdminSearchProduct } from './search-product.model';
import { AdminSearchProductFilter } from './search-product-filter.model';

import * as fromAdmin from '../store/admin.reducer';
import * as AdminSearchProductActions from './store/search-product.actions';
import * as AdminCategoriesActions from '../build-categories/store/categories.actions';
import { CategoryProvider } from '../build-categories/category-provider.model';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['isAvailable', 'img', 'category', 'name', 'price', 'offerPrice', 'percentageSaved', 'action'];
  filter = new AdminSearchProductFilter();
  dataSource = new MatTableDataSource<AdminSearchProduct>();
  categoryProviders$: Observable<CategoryProvider[]>;
  isLoadingCateoryProviders$: Observable<boolean>;
  isLoadingAdminProducts$: Observable<boolean>;

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private store: Store<fromAdmin.AdminFeatureState>) {}

  ngOnInit() {
    this.store.dispatch(new AdminCategoriesActions.FetchCategoryProvider());
    this.categoryProviders$ = this.store.select(fromAdmin.getCateoryProviders);
    this.isLoadingCateoryProviders$ = this.store.select(fromAdmin.getIsLoadingCateoryProviders);
    this.isLoadingAdminProducts$ = this.store.select(fromAdmin.getIsLoadingAdminProducts);

    this.store.select(fromAdmin.getAdminProducts).subscribe((exercises: AdminSearchProduct[]) => {
      this.dataSource.data = exercises;
    });
    this.store.select(fromAdmin.getAdminProductFilter).subscribe((filter: AdminSearchProductFilter) => {
      this.filter = filter;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doSearchProduct(form: NgForm) {
    this.store.dispatch(new AdminSearchProductActions.SetFilter(form.value));
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getImg(product: AdminSearchProduct): string {
    if (product.multimedia && product.multimedia.length > 0) {
      return product.multimedia[0].uri;
    }
    return '';
  }

  getProductCategory(product: AdminSearchProduct): string {
    if (product.category && product.category.length > 0) {
      return product.category[0].title;
    }
    return '-';
  }

  getProductTitle(product: AdminSearchProduct): string {
    if (product.category && product.category.length > 0) {
      return `${product.category[0].title} - ${product.title}`;
    }
    return product.title;
  }

  getAvailableIcon(product: AdminSearchProduct): string {
    return product.isAvailable ? 'check' : 'close';
  }

  getAvailableText(product: AdminSearchProduct): string {
    return product.isAvailable ? 'Disponibile' : 'Non disponibile';
  }
}
