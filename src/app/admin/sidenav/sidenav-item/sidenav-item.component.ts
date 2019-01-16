import { Component, OnInit, Input } from '@angular/core';
import { SidenavItem } from './sidenav-item.model';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input()
  menuItems: SidenavItem[];

  @Input()
  deepLevel = 0;

  showChildren = false;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  onSelectItem() {
    this.layoutService.sidenav.toggle();
  }
}
