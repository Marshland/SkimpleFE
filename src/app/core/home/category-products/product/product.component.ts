import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
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
