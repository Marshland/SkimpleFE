import { Component } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories: Partial<Category>[] = [
    {
      title: 'Abbigliamento',
      imgPath: './assets/images/categories/clothing.png',
      products: [new Product(), new Product(), new Product(), new Product()]
    },
    {
      title: 'Informatica',
      imgPath: './assets/images/categories/tech.png',
      products: [new Product(), new Product(), new Product(), new Product()]
    }
  ];

  constructor() {}
}
