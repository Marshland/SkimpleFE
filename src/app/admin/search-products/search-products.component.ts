import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, AfterContentInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, PageEvent } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
  styleUrls: ['./search-products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class SearchProductsComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  allDisplayedColumns = ['img', 'isAvailable', 'categories', 'title', 'price', 'offerPrice', 'ratio', 'action'];
  mobileDisplayedColumns = ['title', 'offerPrice', 'ratio', 'action'];
  displayedColumns = this.allDisplayedColumns.slice();
  filter = new AdminSearchProductFilter();
  dataSource = new MatTableDataSource<AdminSearchProduct>();
  categoryProviders$: Observable<CategoryProvider[]>;
  isLoadingCateoryProviders$: Observable<boolean>;
  isLoadingAdminProducts$: Observable<boolean>;
  isMobileSubscription: Subscription;
  expandedElement: AdminSearchProduct;
  minPrice = 0;
  maxPrice = 0;
  minPercentage = 0;
  maxPercentage = 0;
  minRatio = 0;
  maxRatio = 0;
  title = '';

  pageSizeOptions = [10, 20, 50];
  pageSize = 10;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('topPaginator')
  topPaginator: MatPaginator;

  @ViewChild('bottomPaginator')
  bottomPaginator: MatPaginator;

  constructor(private store: Store<fromAdmin.AdminFeatureState>, private dialog: MatDialog, private layoutService: LayoutService) {}

  ngOnInit() {
    this.store.dispatch(new AdminCategoriesActions.FetchCategoryProvider());
    this.categoryProviders$ = this.store.select(fromAdmin.getCateoryProviders);
    this.isLoadingCateoryProviders$ = this.store.select(fromAdmin.getIsLoadingCateoryProviders);
    this.isLoadingAdminProducts$ = this.store.select(fromAdmin.getIsLoadingAdminProducts);

    this.store.select(fromAdmin.getAdminProducts).subscribe((products: AdminSearchProduct[]) => {
      this.dataSource.data = products;
    });
    this.store.select(fromAdmin.getAdminProductFilter).subscribe((filter: AdminSearchProductFilter) => {
      this.filter = filter;
    });

    this.isMobileSubscription = this.layoutService.mobileQueryChange$.subscribe(isMobile => {
      if (isMobile) {
        this.displayedColumns = this.mobileDisplayedColumns.slice();
      } else {
        this.displayedColumns = this.allDisplayedColumns.slice();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.topPaginator;
    this.dataSource.filterPredicate = this.filterTable;
    this.dataSource.sortData = this.sortData;
  }

  ngAfterContentInit() {
    if (this.layoutService.mobileQueryMatches) {
      this.displayedColumns = this.mobileDisplayedColumns.slice();
    }
  }

  updatePaginator(page: PageEvent) {
    this.topPaginator.pageIndex = page.pageIndex;
    this.topPaginator._changePageSize(page.pageSize);
  }

  doSearchProduct() {
    this.dataSource.data = [];
    this.store.dispatch(new AdminSearchProductActions.SetFilter(this.filter));
  }

  doFilter(filterValue: string = '') {
    this.dataSource.filter = filterValue;
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
      return product.category.map(elm => elm.title).join(', ');
    }
    return '-';
  }

  getProductTitle(product: AdminSearchProduct): string {
    if (this.layoutService.mobileQueryMatches && product.category && product.category.length > 0) {
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

  setExpandedElm(element: AdminSearchProduct) {
    if (!this.layoutService.mobileQueryMatches) {
      return;
    }

    if (this.expandedElement) {
      this.expandedElement = element.idExternalProduct !== this.expandedElement.idExternalProduct ? element : null;
    } else {
      this.expandedElement = element;
    }
  }

  private filterTable = (data: AdminSearchProduct, filter: string) => {
    if (!data) {
      return;
    }

    this.topPaginator.pageIndex = 0;
    const results = [];

    if (this.minPrice > 0) {
      results.push(this.compareNumber(data.offerPrice || data.price, this.minPrice, true));
    }
    if (this.maxPrice > 0) {
      results.push(this.compareNumber(data.offerPrice || data.price, this.maxPrice, false));
    }
    if (this.minPercentage > 0) {
      results.push(this.compareNumber(data.percentageSaved, this.minPercentage, true));
    }
    if (this.maxPercentage > 0) {
      results.push(this.compareNumber(data.percentageSaved, this.maxPercentage, false));
    }
    if (this.minRatio > 0) {
      results.push(this.compareNumber(data.ratio, this.minRatio, true));
    }
    if (this.maxRatio > 0) {
      results.push(this.compareNumber(data.ratio, this.maxRatio, false));
    }

    const filterTitle = this.title.trim();
    const categories = this.getProductCategory(data);

    if (filterTitle !== '') {
      results.push(
        filterTitle.split('|').every(f => {
          return categories.toLowerCase().indexOf(f.toLowerCase()) > -1 || data.title.toLowerCase().indexOf(f.toLowerCase()) > -1;
        })
      );
    }

    return results.every(x => x);
  }

  private compareNumber(value, valueToCompare, min: boolean): boolean {
    if (value && valueToCompare > 0) {
      return min ? value >= valueToCompare : value <= valueToCompare;
    }
  }

  private sortData = (data: AdminSearchProduct[], sort: MatSort): AdminSearchProduct[] => {
    this.topPaginator.pageIndex = 0;
    let sortedData = data.slice();
    if (sort.active && sort.direction !== '') {
      sortedData = data.sort((a: AdminSearchProduct, b: AdminSearchProduct) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'ratio':
            return this.compare(a.ratio || a.price, b.ratio || b.price, isAsc);
          case 'offerPrice':
            return this.compare(a.offerPrice || a.price, b.offerPrice || b.price, isAsc);
          case 'price':
            return this.compare(a.price, b.price, isAsc);
          case 'title':
            return this.compare(a.title, b.title, isAsc);
          case 'categories':
            return this.compare(this.getProductCategory(a), this.getProductCategory(b), isAsc);
          case 'isAvailable':
            return this.compare(a.isAvailable, b.isAvailable, isAsc);
          default:
            return 0;
        }
      });
    }
    return sortedData;
  }

  private compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngOnDestroy(): void {
    if (this.isMobileSubscription && !this.isMobileSubscription.closed) {
      this.isMobileSubscription.unsubscribe();
    }
  }
}
