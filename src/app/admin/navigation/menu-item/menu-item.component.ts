import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item.model';
import { LayoutService } from 'src/app/shared/layout.service';

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

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  onSelectItem() {
    this.layoutService.sidenav.toggle();
  }
}
