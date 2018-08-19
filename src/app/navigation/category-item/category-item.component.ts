import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../home/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input()
  categories: Category[];

  @Input()
  deepLevel = 0;

  showChildren = false;

  constructor() {}

  ngOnInit() {}
}
