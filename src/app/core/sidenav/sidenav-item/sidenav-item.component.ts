import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../home/category.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input()
  categories: Category[];

  @Input()
  deepLevel = 0;

  showChildren = false;

  constructor() {}

  ngOnInit() {}

  categoryLink(category: Category) {
    return encodeURI(category.title);
  }
}
