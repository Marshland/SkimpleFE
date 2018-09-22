import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input()
  menuItems: MenuItem[];

  @Input()
  deepLevel = 0;

  showChildren = false;

  constructor() {}

  ngOnInit() {}
}
