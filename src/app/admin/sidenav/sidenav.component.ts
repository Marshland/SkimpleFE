import { Component, OnInit } from '@angular/core';
import { SidenavItem } from './sidenav-item/sidenav-item.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems: Partial<SidenavItem>[] = [
    {
      title: 'Ricerca prodotti',
      url: '/admin/search-products',
      icon: 'search'
    },
    {
      title: 'Categorie',
      url: '/admin/build-categories',
      icon: 'category'
    },
    {
      title: 'Schedulazione job',
      url: '/admin/scheduler',
      icon: 'settings_backup_restore'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
