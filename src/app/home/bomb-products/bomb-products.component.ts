import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-bomb-products',
  templateUrl: './bomb-products.component.html',
  styleUrls: ['./bomb-products.component.scss']
})
export class BombProductsComponent implements OnInit {
  category: Category = {
    title: 'Bombe del giorno',
    imgPath: './assets/images/categories/bomb.svg',
    products: [new Product(), new Product(), new Product(), new Product()]
  };

  constructor() {}

  ngOnInit() {}
}
