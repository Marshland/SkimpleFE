import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AdminSearchProduct } from './search-product.model';
import { AdminSearchProductFilter } from './search-product-filter.model';
import { CategoryProvider } from '../build-categories/category-provider.model';
import { PostProductComponent } from './post-product/post-product.component';

import * as fromAdmin from '../store/admin.reducer';
import * as AdminSearchProductActions from './store/search-product.actions';
import * as AdminCategoriesActions from '../build-categories/store/categories.actions';
import { PostProductRequest } from './post-product.model';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['img', 'isAvailable', 'name', 'price', 'offerPrice', 'percentageSaved', 'action'];
  filter = new AdminSearchProductFilter();
  dataSource = new MatTableDataSource<AdminSearchProduct>();
  categoryProviders$: Observable<CategoryProvider[]>;
  isLoadingCateoryProviders$: Observable<boolean>;
  isLoadingAdminProducts$: Observable<boolean>;
  minPrice = 0;
  maxPrice = 0;
  title = '';

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private store: Store<fromAdmin.AdminFeatureState>, private dialog: MatDialog, private layoutService: LayoutService) {}

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
    this.dataSource.filterPredicate = (data: AdminSearchProduct, filter: string) => {
      if (!data) {
        return;
      }
      switch (filter) {
        case 'price':
          let hasMin = false;
          let hasMax = false;
          if (data.offerPrice && this.minPrice > 0) {
            hasMin = data.offerPrice >= this.minPrice;
          } else if (data.price && this.minPrice > 0) {
            hasMin = data.price >= this.minPrice;
          }
          if (data.offerPrice && this.maxPrice > 0) {
            hasMax = data.offerPrice <= this.maxPrice;
          } else if (data.price && this.maxPrice > 0) {
            hasMax = data.price <= this.maxPrice;
          }
          return this.maxPrice > 0 && this.minPrice > 0 ? hasMin && hasMax : hasMin || hasMax;
        case 'title':
          return (
            this.getProductCategory(data)
              .toLowerCase()
              .indexOf(this.title) > -1 || data.title.toLowerCase().indexOf(this.title) > -1
          );
        default:
          return (
            this.getProductCategory(data)
              .toLowerCase()
              .indexOf(this.title) > -1 || data.title.toLowerCase().indexOf(this.title) > -1
          );
      }
    };
  }

  doSearchProduct() {
    this.store.dispatch(new AdminSearchProductActions.SetFilter(this.filter));
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getImg(product: AdminSearchProduct): string {
    if (product.multimedia && product.multimedia.length > 1) {
      if (product.multimedia.length > 2 && this.layoutService.mobileQueryMatches) {
        return product.multimedia[2].uri;
      }
      return product.multimedia[1].uri;
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

  openPublishDialog(product: AdminSearchProduct) {
    const dialogRef = this.dialog.open(PostProductComponent, { data: { product: product } });

    dialogRef.afterClosed().subscribe((result: PostProductRequest) => {
      if (result) {
        this.store.dispatch(new AdminSearchProductActions.PostProduct(result));
      }
    });
  }
}
