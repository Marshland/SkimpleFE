import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
  @Input()
  category: Category;

  constructor() {}

  ngOnInit() {}
}
