import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.scss']
})
export class BestProductComponent implements OnInit {
  product: Product = {
    title: 'Titolo',
    category: 'Categoria',
    imgPath: '',
    imgTitle: '',
    description: 'Descrizione prodotto'
  };

  constructor() {}

  ngOnInit() {}
}
